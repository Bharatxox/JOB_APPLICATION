const express = require("express");
const jobRoutes = require("./routes/job");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://kamalbisht819:yjdgLlcfuySJVs4A@cluster0.8n4anqw.mongodb.net/"
  )
  .then(() => console.log("DB connection established and connected"))
  .catch((err) => console.error(err));

app.use(express.json());
app.use(jobRoutes);

const port = 8888;

app.listen(port, () => {
  console.log("server is running at the port " + port);
});
