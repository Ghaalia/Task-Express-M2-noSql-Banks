const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log(process.env.mongo_bd_url);
    const con = await mongoose.connect(process.env.mongo_bd_url);
    console.log(`mongo connected: ${con.connection.host}`);
  } catch (e) {
    console.log(`Somthing went wrong while connecting to DataBase `, e);
  }
};

module.exports = connectDB;
