const express = require("express");
const router = express.Router();
const Usuarios = require("../models/usuarios");
const Productos = require("../models/productos");
const Productos_Imagenes = require("../models/productos_imagenes");
const Categoria = require("../models/categorias");

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

router.get("/productos/:id_producto", function (req, res) {
  let Usuario = Usuarios.find((Usuario) => Usuario.id_usuario == req.session.userId);
  if (Usuario && Usuario.sn_admin == 1) {
    const { id_producto } = req.params;
    let Producto = ArmaArrayProdCat(id_producto);
    if (Producto) {
      res.render("productoSingle", {
        bAgregaNavbar: true,
        bAdmin: true,
        bUsuario: true,
        Usuario: Usuario,
        Producto: Producto,
      });
    } else {
      res.redirect("/productos");
    }
  } else {
    res.redirect("/login");
  }
});

function ArmaArrayProdCat(id_producto) {
  const ArrProdCat = [];
  let AuxArrProdCat = new ProdCat();
  let Producto = Productos.find((Producto) => Producto.id_producto == id_producto);
  let aux_cat = Categoria.find((aux_cat) => aux_cat.id_categoria == Producto.id_categoria);
  let aux_img = Productos_Imagenes.find((aux_img) => aux_img.id_producto == Producto.id_producto);
  if (aux_cat && aux_img) {
    AuxArrProdCat.id_producto = Producto.id_producto;
    AuxArrProdCat.txt_nombre = Producto.txt_nombre;
    AuxArrProdCat.txt_desc = Producto.txt_desc;
    AuxArrProdCat.stock = Producto.stock;
    AuxArrProdCat.precio = Producto.precio;
    AuxArrProdCat.sn_habilitado = Producto.sn_habilitado;
    AuxArrProdCat.sn_eliminado = Producto.sn_eliminado;
    AuxArrProdCat.txt_categoria = aux_cat.txt_desc;
    AuxArrProdCat.Url = aux_img.txt_path;
    ArrProdCat.push(AuxArrProdCat);
  } else {
    return undefined;
  }

  if (Producto) {
  } else {
    return undefined;
  }

  return ArrProdCat;
}

function ProdCat() {
  var id_producto;
  var txt_nombre;
  var txt_desc;
  var stock;
  var precio;
  var sn_habilitado;
  var sn_eliminado;
  var txt_categoria;
  var Url;
}

module.exports = router;
