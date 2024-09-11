const mongoose = require("mongoose");
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then( ()=>{
        console.log("DB ka connection is successfull")
    })
    .catch((err)=>{
         console.log("DB CONNECTION ISSUE");
         process.exit(1);
    })
}
