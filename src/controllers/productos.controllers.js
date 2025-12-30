
const pool = require('../bd');

//const getProductos = async (req, res) => {
//   const result = await pool.query('SELECT NOW()')
//   console.log(result)
//   res.json(result.rows[0].now)
//};

const getProductos = async (req, res) => {
  const result = await pool.query("SELECT * FROM productos ORDER BY id");
  res.json(result.rows);
};

const createProductos = async (req, res) => {
    const {nombre_producto, valor} = req.body;
    await pool.query(
        "INSERT INTO productos (nombre_producto, valor) VALUES ($1, $2) RETURNING *",
        [nombre_producto, valor]
        
    );
    res.json({ message: "Producto creado" });
};

const updateProductos = async (req, res) => {
  const { id } = req.params;
  const {nombre_producto, valor} = req.body;
  await pool.query(
    "UPDATE productos SET nombre_producto=$1, valor=$2 WHERE id=$3 RETURNING *",
    [nombre_producto, valor, id]
  );
  res.json({ message: "Producto actualizado" });
};

const deleteProductos = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM productos WHERE id=$1 RETURNING *", [id]);
  res.json({ message: "Producto eliminado" });
};


module.exports={
    getProductos,
    createProductos,
    updateProductos,
    deleteProductos
}

