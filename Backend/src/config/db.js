import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const db = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connected mongodb")
    })
    .catch((err) => {
        console.log("err coonect to mongodb", err)
    })
}


export default db