const express = require("express");
const router = express.Router();
const Compras = require("../models/compras");
const Estado_Pago = require("../models/estado_pago");
const Usuarios = require("../models/usuarios");
const Provincias = require("../models/provincias");
const Compra_Producto = require("../models/compra_producto");
const Productos = require("../models/productos");
const Productos_Imagenes = require("../models/productos_imagenes");
const Categorias = require("../models/categorias");
const Direccion_Envio = require("../models/direccion_envio");

router.get("/compras", function (req, res) {
  let Usuario = Usuarios.find((Usuario) => Usuario.id_usuario == req.session.userId);
  if (Usuario && Usuario.sn_admin == 1) {
    let ComprasGen = ArmaArrayComprasGen();
    if (Compras) {
      res.render("compras", {
        bAgregaNavbar: true,
        bAdmin: true,
        bUsuario: true,
        Usuario: Usuario,
        Compras: ComprasGen,
      });
    } else {
      res.redirect("/compras");
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/compras/:id_compra", function (req, res) {
  const { id_compra } = req.params;
  let Usuario = Usuarios.find((Usuario) => Usuario.id_usuario == req.session.userId);
  if (Usuario && Usuario.sn_admin == 1) {
    let ComprasDet = ArmaArrayComprasDetalle(id_compra);
    if (Compras) {
      res.render("compraSingle", {
        bAgregaNavbar: true,
        bAdmin: true,
        bUsuario: true,
        Usuario: Usuario,
        Compras: ComprasDet,
      });
    } else {
      res.redirect("/compras");
    }
  } else {
    res.redirect("/login");
  }
});

function ArmaArrayComprasGen() {
  const ComprasGen = [];
  Compras.forEach((element) => {
    let auxComprasGen = new ArrComprasGen();
    let aux_txt_usuario = Usuarios.find(
      (aux_txt_usuario) => aux_txt_usuario.id_usuario === element.id_usuario
    );
    //console.log(aux_txt_usuario);
    let aux_estado_pago = Estado_Pago.find(
      (aux_estado_pago) => aux_estado_pago.id_estado_pago == element.id_estado_pago
    );

    auxComprasGen.id_compra = element.id_compra;
    auxComprasGen.txt_usuario = aux_txt_usuario.txt_nombre + " " + aux_txt_usuario.txt_apellido;
    auxComprasGen.id_estado_pago = aux_estado_pago.id_estado_pago;
    auxComprasGen.txt_estado_pago = aux_estado_pago.txt_desc;
    ComprasGen.push(auxComprasGen);
  });

  return ComprasGen;
}

function ArrComprasGen() {
  var id_compra;
  var txt_usuario;
  var id_estado_pago;
  var txt_estado_pago;
}

function ArmaArrayComprasDetalle(id_compra) {
  const ComprasDetalle = new ArrComprasDetalle();
  const AuxArrProductos = [];

  let aux_compra = Compras.find((aux_compra) => aux_compra.id_compra == id_compra);
  let aux_estado_pago = Estado_Pago.find(
    (aux_estado_pago) => aux_estado_pago.id_estado_pago == aux_compra.id_estado_pago
  );
  let aux_usuario = Usuarios.find((aux_usuario) => aux_usuario.id_usuario == aux_compra.id_usuario);
  let aux_compra_producto = Compra_Producto.filter(
    (aux_compra_producto) => aux_compra_producto.id_compra == aux_compra.id_compra
  );
  aux_compra_producto.forEach((element) => {
    let aux_ArrProductos = new ArrProductos();

    let aux_producto = Productos.find(
      (aux_producto) => aux_producto.id_producto == element.id_producto
    );
    let aux_producto_img = Productos_Imagenes.find(
      (aux_producto_img) => aux_producto_img.id_producto == aux_producto.id_producto
    );
    let aux_categoria = Categorias.find(
      (aux_categoria) => aux_categoria.id_categoria == aux_producto.id_categoria
    );

    aux_ArrProductos.txt_nombre = aux_producto.txt_nombre;
    aux_ArrProductos.txt_desc = aux_producto.txt_desc;
    aux_ArrProductos.txt_categoria = aux_categoria.txt_desc;
    aux_ArrProductos.Url = aux_producto_img.txt_path;

    AuxArrProductos.push(aux_ArrProductos);
  });

  let aux_dir_envio = Direccion_Envio.find(
    (aux_dir_envio) => aux_dir_envio.id_direccion_envio == aux_compra.id_direccion_envio
  );

  let aux_provincia = Provincias.find(
    (aux_provincia) => aux_provincia.id_provincia == aux_dir_envio.id_provincia
  );

  //Compra
  ComprasDetalle.id_compra = id_compra;
  ComprasDetalle.token = aux_compra.token;
  ComprasDetalle.id_estado_pago = aux_estado_pago.id_estado_pago;
  ComprasDetalle.txt_estado_pago = aux_estado_pago.txt_desc;
  ComprasDetalle.txt_usuario = aux_usuario.txt_nombre;
  ComprasDetalle.txt_apellido = aux_usuario.txt_apellido;
  ComprasDetalle.txt_mail = aux_usuario.txt_email;
  ComprasDetalle.txt_direccion = aux_dir_envio.txtdirrecion;
  ComprasDetalle.txt_provincia = aux_provincia.txt_Desc;
  ComprasDetalle.ArrProductos = AuxArrProductos;
  return ComprasDetalle;
}

function ArrComprasDetalle() {
  //Compra
  var id_compra;
  var token;
  var id_estado_pago;
  var txt_estado_pago;
  //Datos Usuario
  var txt_usuario;
  var txt_apellido;
  var txt_mail;
  //DAtos Envio
  var txt_direccion;
  var txt_provincia;
  var ArrProductos;
}

function ArrProductos() {
  var txt_nombre;
  var txt_desc;
  var txt_categoria;
  var Url;
}

module.exports = router;
