const pool = require("./../utils/bd");
const T_PRODUCTO = "productos";

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_PRODUCTO, obj])
    .then((response) => response)
    .catch((e) => e);

const update = (
  { idproducto },
  { id_categoria, txt_nombre, txt_desc, imp_precio, sn_especial, image, sn_habilitado }
) =>
  pool
    .query(
      "UPDATE ??  SET id_categoria= ?, txt_nombre= ? , txt_desc = ? , imp_precio = ? ,sn_especial = ? , image = ? , sn_habilitado = ? Where id_producto = ?",
      [
        T_PRODUCTO,
        id_categoria,
        txt_nombre,
        txt_desc,
        imp_precio,
        sn_especial,
        image,
        sn_habilitado,
        idproducto,
      ]
    )
    .then((result) => result)
    .catch((e) => e);

const GetEspecialidades = async () => {
  try {
    const repuesta = await pool.query(
      "select txt_nombre, txt_desc, imp_precio, image from productos where sn_especial != 0"
    );
    return repuesta;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { create, update, GetEspecialidades };
