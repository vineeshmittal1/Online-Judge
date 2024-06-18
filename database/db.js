const mongoose=require('mongoose');
const dotenv=require('dotenv');
const { errorMonitor } = require('events');

dotenv.config();

const DBConnection= async ()=>{
   const MONGODB_URL=process.env.MONGODB_URI;
   try{
       await mongoose.connect(MONGODB_URL,{useNewUrlParser:true});
       console.log("DB connection established");
   }catch(error){
        console.log("Error connecting to MongoDB: " + error);
   }
};
module.exports={DBConnection};