const fs = require("fs");
const path = "./productos.json";

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  addProduct = async (product) => {
    const prod = await this.getProducts();

    prod.length === 0
      ? (product.id = 1)
      : (product.id = prod[prod.length - 1].id + 1);
    prod.push(product);
    await fs.promises.writeFile(this.path, JSON.stringify(prod));
    console.log("*********************************************************");
    console.log("Se ha agregado el producto: ");
    return console.log(product);
  };

  getProducts = async () => {
    if (fs.existsSync(this.path)) {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const products = JSON.parse(data);
      console.log(products);
      return products;
    } else {
      return [];
    }
  };

  getProductById = async (id) => {
    const prod = await this.getProducts();
    console.log("*********************************************************");
    console.log("Buscar producto por el id: ", id);

    const productindex = prod.findIndex((e) => e.id == id);

    if (productindex === -1) {
      return console.log("Not found");
    } else {
      console.log("Producto Encontrado");
      console.log(prod[productindex]);
      return prod[productindex];
    }
  };

  updateProduct = async (id, product) => {
    const prod = await this.getProducts();
    const productindex = prod.findIndex((e) => e.id == id);
    product.id = id;
    let newTodos = [...prod];

    newTodos[productindex] = { ...product };
    await fs.promises.writeFile(this.path, JSON.stringify(newTodos));
    return console.log(newTodos);
  };

  deleteProduct = async (id) => {
    const prod = await this.getProducts();
    const productindex = prod.findIndex((e) => e.id == id);
    prod.splice(productindex, 1);
    await fs.promises.writeFile(this.path, JSON.stringify(prod));
    return console.log(prod);
  };
}
//------------------------------------------------------------------/
/// Testing
// Se creará una instancia de la clase “ProductManager”
const pro = new ProductManager("./productos.json");

//Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
pro.getProducts();

//Se llamará al método “addProduct” con los campos:
//title: “producto prueba”
//description:”Este es un producto prueba”
//price:200,
//thumbnail:”Sin imagen”
//code:”abc123”,
//stock:25
//El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
/* let producto = {
  title: "producto prueba 6",
  description: "Este es un producto prueba 5",
  price: 900,
  thumbnail: "Sin imagen",
  code: "abc12345",
  stock: 1950,
};
pro.addProduct(producto); */

// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
//pro.getProducts();

//Se llamará al método “updateProduct” y se intentará cambiar un campo de algún producto, se evaluará que no se elimine el id y que sí se haya hecho la actualización.
/* let producto1 = {
  title: "producto prueba Update",
  description: "Este es un producto prueba Update",
  price: 400,
  thumbnail: "Sin imagen",
  code: "abc",
  stock: 100,
};

pro.updateProduct(1, producto1); */

//Se llamará al método “deleteProduct”, se evaluará que realmente se elimine el producto o que arroje un error en caso de no existir.
//pro.deleteProduct(3);
