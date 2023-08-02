const fs = require('fs')
const Blob = require('buffer').Blob;

const manejoJson = async () => {
    try {
        const data = await fs.promises.readFile('4/desafios/package.json', 'utf-8');
        const info = {
            contenidoStr: data,
            contenidoObj: JSON.parse(data),
            size: new Blob([data]).size,
        }
        console.log(JSON.parse(info.contenidoStr));
        await fs.promises.writeFile('./info.json', JSON.stringify(info));
    } catch (error) {
        throw new Error(error);
    }
}

manejoJson();