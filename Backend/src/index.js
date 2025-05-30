import express from "express";

const app = express();
const PORT = 3000


app.get("/", (req,res) => {
    console.log("heelo ji home page")
    res.send("home page")
})
app.listen(PORT, () => {
    console.log(`sever started on port number ${PORT}` )
})