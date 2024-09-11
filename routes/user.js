const express = require("express");

const router= express.Router();
const {auth,isStudent,isAdmin} = require("../middlewares/auth");

const {login,signup} = require("../controllers/Auth");

router.post("/login",login);
router.post("/signup",signup);

//protected routes :
router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to testing route"
    });
})
router.get("/students",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome students"
    });
})
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome Admin"
    });
})
module.exports = router;