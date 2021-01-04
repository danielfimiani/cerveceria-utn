const express = require("express");
const router = express.Router();

//Home
router.use("/", require("./homeRouter"));
//DashBoard
router.use("/admin", require("./adminRouter"));

module.exports = router;
