const suma = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) {
            reject(`Operacion innecesaria`)
        }
        if ((numero1 + numero2) < 0) {
            reject(`La calculadora solo debe devolver valores positivos`)
        }
        resolve(numero1 + numero2);
    })
}

const resta = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) {
            reject(`Operacion innecesaria`)
        }
        if ((numero1 - numero2) < 0) {
            reject(`La calculadora solo debe devolver valores positivos`)
        }
        resolve(numero1 - numero2);
    })
}

const multiplicacion = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 < 0 || numero2 < 0) {
            reject(`La calculadora solo debe tener valores positivos`)
        }
        resolve(numero1 * numero2);
    })
}

const division = (numero1, numero2) => {
    return new Promise((resolve, reject) => {
        if (numero1 < 0 || numero2 < 0) {
            reject(`La calculadora solo debe tener valores positivos`)
        }
        resolve(numero1 / numero2);
    })
}

const calculos = async () => {
    try {
        const numero1 = 10;
        const numero2 = 5;

        const resultSuma = await suma(numero1, numero2);
        console.log(resultSuma);

        const resultResta = await resta(numero1, numero2);
        console.log(resultResta);

        const resultMultiplicacion = await multiplicacion(numero1, numero2);
        console.log(resultMultiplicacion);

        const resultDivision = await division(numero1, numero2);
        console.log(resultDivision);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

calculos();




