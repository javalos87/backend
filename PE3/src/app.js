import express from "express";
import { ProductManager } from "./ProductManager.js";

//Instancio la clase
const pro = new ProductManager("./src/productos.json");

//Configuracion del servidor
const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 8080;

//Servidor raiz
app.get("/", (req, res) => {
  res.send(`Server levantado sobre puerto: ${port}`);
});

//Ruta /products
app.get("/products", async (req, res) => {
  //Obtengo los productos
  const prod = await pro.getProducts();
  //Guardo el valor del limite
  const limite = req.query.limit;
  //Si existe limite, recorto el array SINO lo muestro entero
  if (limite) {
    const limiteProductos = prod.slice(0, limite);
    res.json(limiteProductos);
  } else {
    res.json(prod);
  }
});

// PARAMS
app.get("/products/:pid", async (req, res) => {
  const getPID = await pro.getProductById(+req.params.pid);

  res.json(getPID);
});

app.get("/unparametro/:nombre/:apellido", (req, res) => {
  console.log(req.params.nombre, req.params.apellido);
  res.send(`Bienvenido: ${req.params.nombre} ${req.params.apellido}`);
});
// QUERY
app.get("/ejemploQueries", (req, res) => {
  let consultas = req.query;
  let { nombre, apellido, edad } = req.query;
  //res.send(consultas);
  res.send({ nombre, apellido, edad });
});

// Servidor en escucha
app.listen(port, (req, res) => {
  console.log(`Server levantado sobre puerto: ${port}`);
});
