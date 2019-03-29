const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')

.command('listar', 'imprime ', opts)
    .command('crear', 'genera ', opts)
    .help()
    .argv;


module.exports = {
    argv
}