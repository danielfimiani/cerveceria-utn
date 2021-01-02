const express = require("express");
const router = express.Router();
const Productos = require("../models/productos");
const Categoria = require("../models/categorias");
const ServicioProducto = require("../services/productos")


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
  const id = ServicioProducto.createProducto(objProducto,objProductoimg);
  res.json(id);
});

 

router.delete("/delete/:idproducto", function (req, res) {
  const {idproducto} = req.params
  console.log(idproducto);
  const rest = ServicioProducto.deleteProducto(idproducto);
  res.json(rest);
});

router.post("/update/:idproducto", function (req, res) {
  const idproducto = req.params
  const body = req.body
  const rest = ServicioProducto.updateProducto(idproducto, body);
  res.json(rest);
});

const updateProducto = (req, res) =>{    
  console.log(req)
  const {idproducto} = req;
  console.log(idproducto);
 // ServicioProducto.deleteProducto(idproducto);
  // res.json(repuesta);
}


//router.get("/productos/delete/:idproducto", deleteProducto);
//router.get("/update/:idproducto", updateProducto);
module.exports = router;
