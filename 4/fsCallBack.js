const fs = require('fs');

fs.writeFile('4/ejemploCallBack.txt', '¡Hola desde un callback! nuevo', (error) => {
    if (error) {
        console.log("Error al escribir el archivo");
    }
    fs.readFile('4/ejemploCallBack.txt', 'utf-8', (error, resultado) => {
        if (error) {
            console.log("Error al leer el archivo");
        }
        console.log(resultado);
        fs.appendFile('4/ejemploCallBack.txt', ' editando con callbacks', (error) => {
            if (error) {
                console.log("Error al actualizar el archivo");
            }
            fs.readFile('4/ejemploCallBack.txt', 'utf-8', (error, resultado) => {
                if (error) {
                    console.log("Error al leer el archivo");
                }
                console.log(resultado);
                fs.unlink('4/ejemploCallBack.txt', (error) => {
                    if (error) {
                        console.log('No se pudo eliminar el archivo');
                    }
                })
            })
        })
    })
});

console.log("hola");