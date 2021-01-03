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

    const GetProductoHome = (snespecial) => pool
    .query("select txt_nombre, txt_desc, imp_precio, image from productos where sn_especial = ? ", [
    snespecial])
    .then((result) => result)
    .catch((e) =>  e);


    const GetProductoslist = () => pool
    .query("select   c.txt_categoria,txt_nombre,txt_desc, imp_precio,sn_especial,image,case when p.sn_habilitado= 1 then 'SI' else 'NO' end as 'sn_habilitado',p.ts_create, p.ts_update from productos  p inner join categorias c on p.id_categoria = c.id_categoria")
    .then((result) => result)
    .catch((e) =>  e);


    
module.exports = { create, Delete , update , GetProductoHome};
