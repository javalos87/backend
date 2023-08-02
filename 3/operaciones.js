const suma = (numero1, numero2) => {
    return numero1 + numero2;
}
const resta = (numero1, numero2) => {
    return numero1 - numero2;
}
const multiplicacion = (numero1, numero2) => {
    return numero1 * numero2;
}
const division = (numero1, numero2) => {
    return `division ${numero1 / numero2}`;
}

const realizarOperacion = (numero1, numero2, callback) => {
    let resultado = callback(numero1, numero2);
    console.log(`El resultado de la ${resultado}`);
}

realizarOperacion(12, 6, suma);
realizarOperacion(12, 6, resta);
realizarOperacion(12, 6, multiplicacion);
realizarOperacion(12, 6, division);

realizarOperacion(10, 5, resta);