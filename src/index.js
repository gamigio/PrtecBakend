const express = require("express");
const cors = require("cors");


const productosRoutes =require('./routes/productos.routes');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', productosRoutes);

app.listen('3000')
console.log('servidor en el puerto 3000')


