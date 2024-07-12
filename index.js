const express = require("express");
const jobRoutes = require("./routes/job");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/job_app")
  .then(() => console.log("DB connection established and connected"))
  .catch((err) => console.error(err));

app.use(express.json());
app.use(jobRoutes);

const port = 8888;

app.listen(port, () => {
  console.log("server is running at the port " + port);
});
