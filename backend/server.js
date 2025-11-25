import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/authRoutes.js";
  //Helps in loading environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
connectDB(); //Establish connection to MongoDB

app.use("/api/auth", router);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})