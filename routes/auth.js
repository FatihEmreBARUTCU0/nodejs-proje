const express=require("express")
const { register, login } = require("../controllers/auth.js")

const router=express.Router()

router.post("/register",register)
router.post("/login",login)

router.post("/product",auth.asdasdasd)

module.exports=router