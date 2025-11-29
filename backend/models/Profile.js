import mongoose from "mongoose";




const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // linking user table
    required: true,
    unique: true
  },
  description: {
    type: String,
    default: ""
  },
  followers: {
    type: Number,
    default: 0
  },
  following: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Profile", ProfileSchema);
