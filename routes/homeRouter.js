const express = require("express");
const router = express.Router();
//Entities
const Categorias = require("../models/categorias");
const Productos = require("../models/productos");
const Productos_Imagenes = require("../models/productos_imagenes");
const Usuarios = require("../models/usuarios");

router.get("/", function (req, res) {
  let ArrProdImg = ArmaArrayProductos();
  let Usuario = Usuarios.find(
    (Usuario) => Usuario.id_usuario === req.session.userId
  );
  if (Usuario) {
    res.render("home", {
      bAgregaNavbar: true,
      Categorias: Categorias,
      Productos: ArrProdImg,
      Usuario: Usuario,
      bUsuario: true,
    });
  } else {
    res.render("home", {
      bAgregaNavbar: true,
      Categorias: Categorias,
      Productos: ArrProdImg,
      bUsuario: false,
    });
  }
});

function ArmaArrayProductos() {
  const ArrProdImg = [];
  Productos.forEach((element) => {
    if (element.sn_habilitado == 1) {
      let aux_Arr = new ProdImg();
      aux_Arr.id_producto = element.id_producto;
      aux_Arr.txt_nombre = element.txt_nombre;
      aux_Arr.txt_desc = element.txt_desc;
      aux_Arr.cant = element.stock;
      aux_Arr.precio = element.precio;
      let img = Productos_Imagenes.find((img) => {
        return img.id_producto == element.id_producto;
      });
      aux_Arr.urlImg = img.txt_path;
      ArrProdImg.push(aux_Arr);
    }
  });
  return ArrProdImg;
}

function ProdImg() {
  var id_producto;
  var txt_nombre;
  var txt_desc;
  var cant;
  var precio;
  var urlImg;
}

module.exports = router;
