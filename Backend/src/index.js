import express from "express";
import db from "../src/config/db.js"
import userRoutes from "./routes/user.route.js"

const app = express();
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (req,res) => {
    res.send("home page")
})


// Mongodb connection
db()


// routes
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    console.log(`sever started on port number ${PORT}` )
})