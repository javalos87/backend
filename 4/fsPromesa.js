const fs = require('fs');

const operacionesAsincronas = async () => {
    try {
        await fs.promises.writeFile('4/ejemploPromesa.txt', 'Hola desde promesa');

        let resultado = await fs.promises.readFile('4/ejemploPromesa.txt', 'utf-8');
        console.log(resultado);

        await fs.promises.appendFile('4/ejemploPromesa.txt', ' Contenido adicional');

        resultado = await fs.promises.readFile('4/ejemploPromesa.txt', 'utf-8');
        console.log(resultado);

        await fs.promises.unlink('4/ejemploPromesa.txt')
    } catch (error) {
        console.log(error);
    }
}


operacionesAsincronas();

console.log("hola");