const express = require("express");
const router = express.Router();
const studentRouter = require("./api/studentRoute")
const studentAuthRouter = require("./api/studentAuthRouter")


router.use("/student", studentRouter);
router.use("/student/auth", studentAuthRouter);

module.exports = router;