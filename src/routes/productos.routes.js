const {Router} = require("express");
const router = Router();
//const pool = require('../bd');

const {getProductos} = require("../controllers/productos.controllers");
const {createProductos} = require("../controllers/productos.controllers");
const {updateProductos} = require("../controllers/productos.controllers");
const {deleteProductos} = require("../controllers/productos.controllers");
//router.get('/', async (req, res) => {
//   const result = await pool.query('SELECT NOW()')
//   console.log(result)
//   res.json(result.rows[0].now)
//})

router.get('/productos', getProductos);
router.post('/productos', createProductos);
router.put('/productos/:id', updateProductos);
router.delete('/productos/:id', deleteProductos);



module.exports = router; 