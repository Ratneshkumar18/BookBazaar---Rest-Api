import express from "express";
import db from "../src/config/db.js"

const app = express();
const PORT = 3000


app.get("/", (req,res) => {
    console.log("heelo ji home page")
    res.send("home page")
})


// Mongodb connection
db()
app.listen(PORT, () => {
    console.log(`sever started on port number ${PORT}` )
})