const JobModel = require("../model/job");

const createJob = async (req, res) => {
  //   console.log(req.body);
  try {
    const response = await JobModel.create(req.body);
    console.log(response);
    res.json({
      sucess: true,
      message: "Create job Api",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      message: "something went wrong please try again",
    });
  }
};

const listJob = async (req, res) => {
  try {
    const component = {};
    const { minSalary, title } = req.query;

    if (title) {
      component.title = {
        $regex: new RegExp(`${req.query.title}`, "gi"),
      };
    }
    if (minSalary) {
      component.salary = {
        $gt: minSalary,
      };
    }

    const jobList = await JobModel.find(component);
    res.json({
      sucess: true,
      message: "show job Api",
      result: jobList,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      sucess: false,
      message: "something went wrong please try again",
    });
  }
};

const updateJob = async (req, res) => {
  try {
    console.log(req.params.id);
    //apply validation rules
    const updateJob = {
      $set: req.body,
    };
    const filterJob = {};
    const { minSalary, title, maxSalary } = req.query;

    if (title) {
      filterJob.title = {
        $regex: new RegExp(`${req.query.title}`, "gi"),
      };
    }
    if (minSalary) {
      filterJob.salary = {
        $gte: minSalary,
      };
    }
    if (maxSalary) {
      filterJob.salary = {
        $lte: maxSalary,
      };
    }
    // const response = await JobModel.findByIdAndUpdate(req.params.id, updateJob);
    const response2 = await JobModel.updateMany(filterJob, updateJob);
    console.log(response2);
    res.json({
      sucess: true,
      message: "Update job Api",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucess: false,
      message: "something went wrong please try again",
    });
  }
};

const deleteJob = async (req, res) => {
  console.log(req.params.id);
  const filterJob = {};
  const { minSalary, title, maxSalary } = req.query;

  if (title) {
    filterJob.title = {
      $regex: new RegExp(`${req.query.title}`, "gi"),
    };
  }
  if (minSalary) {
    filterJob.salary = {
      $gte: minSalary,
    };
  }
  if (maxSalary) {
    filterJob.salary = {
      $lte: maxSalary,
    };
  }
  // const response = await JobModel.findByIdAndDelete(req.params.id);
  const response2 = await JobModel.deleteMany(filterJob);
  console.log(response2);
  res.json({
    sucess: true,
    message: "Delete job Api",
  });
};

const jobController = {
  createJob,
  listJob,
  updateJob,
  deleteJob,
};

module.exports = jobController;
