const express = require("express");
const router = express.Router();

// router.use("/", require("./productosRouter"));
// router.use("/", require("./comprasRouter"));
router.get("/", (req, res) => {
  res.render("homeAdmin");
});

module.exports = router;
