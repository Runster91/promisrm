function validarNumeroParImpar(numero) {
    return new Promise((resolve, reject) => {
        if (typeof numero !== 'number') {
            reject('El valor proporcionado no es un número.');
        } else if (Number(numero) % 2 === 0) {
            resolve(`${numero} es un número par.`);
        } else {
            reject(`${numero} es un número impar.`);
        }
    });
}

const numero = 7;

validarNumeroParImpar(Number(numero))
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.log(error);
    });

