const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(' No es numero ');
            return;
        }

        let data = '';

        for (let index = 0; index < limite + 1; index++) {

            data += `${base} * ${index} = ${base * index}\n`;


        }

        resolve(data);

    });

}


let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es numero');
            return;
        }

        let data = '';


        for (let index = 0; index <= limite; index++) {

            data += `${base} * ${index} = ${base * index}\n`;

        }

        fs.writeFile(`../tablas/tablaDel ${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-base${base}.txt`);
        });

        listarTabla(base, limite).then(resolve => console.log(resolve.green)).catch(err => console.log(err.red));



    });
}

module.exports = {

    crearArchivo,
    listarTabla
}