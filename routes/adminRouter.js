const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("homeAdmin", { layout: "mainAdmin.handlebars" });
});

router.get("/productos", (req, res) => {
  res.render("productosAdmin", { layout: "mainAdmin.handlebars" });
});

module.exports = router;
