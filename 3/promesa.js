const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject('No se puede dividir entre 0')
        } else {
            resolve(dividendo / divisor)
        }
    })
}

const funcionAsync = async () => {
    try {
        let result = await dividir(10,0)
        console.log(result);
    } catch (error) {
        console.log("error", error);
    }
}

funcionAsync();