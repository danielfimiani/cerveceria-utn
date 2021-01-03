const express = require("express");
const router = express.Router();
const Productos = require("../models/productos");
const ServicioProducto = require("../services/productos");

router.get("/productos", function (req, res) {
  let Usuario = Usuarios.find((Usuario) => Usuario.id_usuario == req.session.userId);
  if (Usuario && Usuario.sn_admin == 1) {
    res.render("productos", {
      bAgregaNavbar: true,
      bAdmin: true,
      bUsuario: true,
      Usuario: Usuario,
      Productos: Productos,
    });
  } else {
    res.redirect("/login");
  }
});

//Login
router.post("/", function (req, res) {
  const objProducto = req.body;
  const objProductoimg = req.file;
  console.log(req.body);
  const id = ServicioProducto.createProducto(objProducto, objProductoimg);
  res.json(id);
});

const updateProducto = (req, res) => {
  console.log(req);
  const { idproducto } = req;
  console.log(idproducto);
  // ServicioProducto.deleteProducto(idproducto);
  // res.json(repuesta);
};

//router.get("/productos/delete/:idproducto", deleteProducto);
//router.get("/update/:idproducto", updateProducto);
module.exports = router;
