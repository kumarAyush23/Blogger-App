import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://ayush:35779735@cluster0.yamseaj.mongodb.net/blog-app');
    console.log("DB Connected");
}