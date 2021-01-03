const pool = require("./../utils/bd");
const T_PRODUCTO = "productos";

const create = (obj, uid) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_PRODUCTO, obj])
    .then((response) => response)
    .catch((e) => e);

const createImages = ({ id_producto, uid }) =>
  pool
    .query("UPDATE  ?? SET image = ? where id_producto = ?", [T_PRODUCTO, uid, id_producto])
    .then((response) => response)
    .catch((e) => e);

const update = (
  { idproducto },
  { id_categoria, txt_nombre, txt_desc, imp_precio, sn_especial, sn_habilitado },
  uid
  ) =>
  pool
    .query(
      "UPDATE ??  SET id_categoria= ?, txt_nombre= ? , txt_desc = ? , imp_precio = ? ,sn_especial = ? , sn_habilitado = ? , image = ?  Where id_producto = ?",
      [
        T_PRODUCTO,
        id_categoria,
        txt_nombre,
        txt_desc,
        imp_precio,
        sn_especial,
        sn_habilitado,
        idproducto,
        uid
      ]
    )
    .then((result) => result)
    .catch((e) => e);

const Delete = (id) =>
  pool
    .query("DELETE FROM ??  WHERE id_producto = ?", [T_PRODUCTO, id])
    .then((result) => result)
    .catch((e) => e);

const GetProductoHome = (snespecial) =>
  pool
    .query("select txt_nombre, txt_desc, imp_precio, image from ?? where sn_especial = ? ", [
      T_PRODUCTO,
      snespecial,
    ])
    .then((result) => result)
    .catch((e) => e);

const GetProductoslist = () =>
  pool
    .query(
      `SELECT
          p.id_producto , 
          c.id_categoria, 
          c.txt_categoria, 
          txt_nombre,
          txt_desc, 
          imp_precio,
          CASE WHEN p.sn_especial = 1 THEN 1 ELSE 0 END as sn_especial,
          image,
          CASE WHEN p.sn_habilitado = 1 THEN 1 ELSE 0 END as sn_habilitado,
          p.ts_create, 
          p.ts_update 
      from productos p 
      inner join categorias c on p.id_categoria = c.id_categoria
      `
    )
    .then((result) => result)
    .catch((e) => e);

module.exports = { create, Delete, update, GetProductoHome, GetProductoslist };
