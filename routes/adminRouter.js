const express = require("express");
const router = express.Router();

//DashBoard
router.get("/", (req, res) => {
  res.render("homeAdmin", { layout: "mainAdmin.handlebars" });
});
//Categorias
router.use("/categorias", require("./categoriasRouter"));
//Productos
router.use("/productos", require("./productosRouter"));

module.exports = router;
