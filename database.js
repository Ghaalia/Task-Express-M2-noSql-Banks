const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://Ghaalia:OxvSvpq94oGxTR7w@cluster0.mx8vcfj.mongodb.net/FirstDB"
    );
    console.log(`mongo connected: ${con.connection.host}`);
  } catch {
    console.log(`Somthing went wrong while connecting to DataBase `);
  }
};

module.exports = connectDB;
