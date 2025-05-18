const express =require("express")
const cors = require("cors")
const dotenv=require("dotenv")
const db = require("./config/db")
const body_parser=require("body-parser")
const authRouter=require("./routes/auth.js")

dotenv.config()

const app=express()
app.use(cors({
     origin: "http://localhost:3000"
}))
app.use(body_parser.json())
/* app.use(body_parser.urlencoded()) */

app.use("/api",authRouter)


const PORT=process.env.PORT || 8000
/* db() */
app.listen(PORT,()=>{

console.log("server is running on port 8000")

})

