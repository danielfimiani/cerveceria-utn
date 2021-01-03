const pool = require("./../utils/bd");
const T_PRODUCTO = "productos";

const create = (obj,uid) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_PRODUCTO, obj])
    .then((response) => response)
    .catch((e) => e);

    const createImages = ({ id_producto, uid }) =>
    pool
      .query("UPDATE  ?? SET image = ? where id_producto = ?",
       [T_PRODUCTO, uid,id_producto ])
      .then((response) => response)
      .catch((e) => e);
  

    const update = ({ idproducto }, {id_categoria,txt_nombre,txt_desc,imp_precio,sn_especial,image,sn_habilitado }) =>
    pool
      .query("UPDATE ??  SET id_categoria= ?, txt_nombre= ? , txt_desc = ? , imp_precio = ? ,sn_especial = ? , image = ? , sn_habilitado = ? Where id_producto = ?", [
        T_PRODUCTO,id_categoria,txt_nombre,txt_desc,imp_precio,sn_especial,image,sn_habilitado,idproducto
      ]) 
      .then((result) =>  result)
      .catch((e) => e);

    const Delete = (id) =>
    pool
      .query("DELETE FROM ??  WHERE id_producto = ?", [
        T_PRODUCTO,id])
      .then((result) => result)
      .catch((e) => e);

    const GetProducto = (snespecial) => pool
    .query("select txt_nombre, txt_desc, imp_precio, image from productos where ((sn_especial = ? and ? is not null ) or ( ? is null))", [
    snespecial,snespecial,snespecial])
    .then((result) => result)
    .catch((e) =>  e);

    
module.exports = { create, Delete , update , GetProducto};
