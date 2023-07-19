// Realizar una clase ProductManager que gestione un conjunto de productos

class ProductManager {
  // Debe crearse desde su constructor con el elemento products, el cual sera un arreglo vacio
  constructor() {
    this.products = [];
  }
  // Cada Producto que gestione debe contar con las propiedades
  // title, description, price, thumbnail, code, stock

  // Debe contar con un metodo addProduct en el cual agregara un producto al arreglo de productos incial
  // Validar que no se repita el campo code y que todos los campos sean obligatorios
  // Al agregarlo, debe crearse con un id autoincrementable
  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    // Validacion que el code exista
    const productindex = this.products.findIndex((e) => e.code === code);
    if (productindex !== -1) {
      console.log("*********************************************************");
      return console.log("El code ya existe");
    }
    // Validacion que los valores del arreglo esten definidos
    const isEmpty = Object.values(product).some((x) => x === undefined);
    if (isEmpty) {
      console.log("*********************************************************");
      return console.log("Todos los campos son obligatorios");
    }
    // Verifica la longuitud del producto, si es 0 el id es 1 sino a la longuitud del arreglo le suma 1
    this.products.length === 0
      ? (product.id = 1)
      : (product.id = this.products[this.products.length - 1].id + 1);

    this.products.push(product);
    console.log("*********************************************************");
    console.log("Se ha agregado el producto: ");
    return console.log(product);
  };
  // Debe contar con un metodo getProducts en cual debe devolver el arreglo con todos los productos creados hasta el momento.
  getProducts = () => {
    if (this.products.length === 0) {
      console.log("*********************************************************");
      return console.log("No existen productos");
    }
    console.log("*********************************************************");
    console.log("Los productos son: ");
    return console.log(this.products);
  };
  // Debe contar con un metodo getProductById el cual debe buscar en el arreglo el producto que coincida con el id
  // En caso de no coincidir ningun id mostrar en consola un error "Not found"
  getProductById = (id) => {
    console.log("*********************************************************");
    console.log("Buscar producto por el id: ", id);
    const productindex = this.products.findIndex((e) => e.id == id);

    if (productindex === -1) {
      return console.log("Not found");
    } else {
      return console.log(this.products[productindex]);
    }
  };
}

// Proceso de testing

//Se creará una instancia de la clase “ProductManager”
const adminProducts = new ProductManager();
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
adminProducts.getProducts();
//Se llamará al método “addProduct” con los campos:
//title: “producto prueba”
//description:”Este es un producto prueba”
//price:200,
//thumbnail:”Sin imagen”
//code:”abc123”,
//stock:25
//El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
adminProducts.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
adminProducts.getProducts();
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
adminProducts.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
adminProducts.getProductById("1");
adminProducts.getProductById("5");
