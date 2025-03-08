import mongoose from "mongoose";
import { DB_URI,NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error("Please define the MONGODB_URI variable inside your .env.<environtment>.local");
}


const connectToDB = async () => {
    try {
        await mongoose.connect(DB_URI)

        console.log(`connected to db in ${NODE_ENV}`)
    } catch (error) {
        console.log("error connecting to DB: ", error)
        process.exit(1)
    }
}

export default connectToDB