import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Profile from "../models/Profile.js";


export const RegisterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    //Create a profile when the User is Registered.
    await Profile.create(
      {user: newUser._id,
        description: "",
        followers: 0,
        following: 0});

    return res.status(201).json({
      message: "User registered successfully!",
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};



export const LoginUser = async(req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({ message: "Invalid email or password" });
    }else{
      const isMatch = await bcrypt.compare(password,user.password);
      if(!isMatch){
        return res.status(400).json({ message: "Invalid email or password" });
      }else{
        // Generate Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
        return res.status(200).json(
          { 
          message: "Login successful",
          token: token,
        user: { id: user._id, name: user.name, email: user.email }     
       }
      );
      }
    }
  }catch(error){
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
}


export const getProfile  = async (req,res)=>{
  try{
    const userId = req.user.id;
    console.log(req.user.id);
    console.log("fetching profile for user:", userId);
    const profile = await Profile.findOne({user: userId}).populate('user','name email');
    console.log("Profile found:", profile);
    res.status(200).json(profile);
  }catch(error){
    res.status(500).json({ message: "Server Error" });
  }
}



export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { description } = req.body;

    const updated = await Profile.findOneAndUpdate(
      { user: userId },
      { description },
      { new: true }
    );

    res.json({ message: "Profile updated", profile: updated });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile" });
  }
};