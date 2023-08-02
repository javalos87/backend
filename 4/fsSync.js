const fs = require('fs');

fs.writeFileSync('4/ejemplo.txt', '¡Hola Coders, estoy en un archivo!');


if (fs.existsSync('4/ejemplo.txt')) {
    let contenido = fs.readFileSync('4/ejemplo.txt', 'utf-8')
    console.log(contenido);

    fs.appendFileSync('4/ejemplo.txt', ' estoy editando el archivo')
    contenido = fs.readFileSync('4/ejemplo.txt', 'utf-8')
    console.log(contenido);

    fs.unlinkSync('4/ejemplo.txt');
}

console.log("hola");
