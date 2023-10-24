let accounts = require("./accounts");
const express = require("express");
const app = express();
const accountsRoutes = require("./api/accounts/accounts.routes");
const connectDB = require("./database");
require("dotenv").config();
app.use(express.json());

app.use("/accounts", accountsRoutes);

connectDB();
app.listen(process.env.port, () => {
  console.log(`The application is running on localhost:${process.env.port}`);
});
