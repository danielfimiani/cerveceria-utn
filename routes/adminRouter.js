const express = require("express");
const router = express.Router();

router.use("/", require("./productosRouter"));
router.use("/", require("./comprasRouter"));

module.exports = router;
