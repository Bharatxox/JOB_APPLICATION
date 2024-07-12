const express = require("express");

const router = express.Router();
const {
  createJob,
  listJob,
  updateJob,
  deleteJob,
} = require("../controller/job");

router.post("/api/jobs", createJob);

router.get("/api/jobs", listJob);

router.put("/api/jobs/:id", updateJob);

router.delete("/api/jobs/:id", deleteJob);

module.exports = router;
