const express = require("express");
const jobRoutes = require("./routes/job");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
// console.log(process.env.DATABASE_URL); use dotenv modeule to acces the env file locally
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB connection established and connected"))
  .catch((err) => console.error(err));

app.use(express.json());
app.use(jobRoutes);

const port = 8888;

app.listen(port, () => {
  console.log("server is running at the port " + port);
});
