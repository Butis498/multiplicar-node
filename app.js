const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(resolve => console.log(resolve.green)).catch(err => console.log(err.red));
        break;
    case 'crear':

        crearArchivo(argv.base, argv.limite).then(resolve => console.log(resolve))

        .catch(reject => console.log(reject.red));
        break;

    default:

        console.log('comando no reconocido')
        break;
}