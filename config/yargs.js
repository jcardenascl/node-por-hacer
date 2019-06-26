const descripcion = {
    demand: true,
    alias: 'd'
};
const completado = {
    default: true,
    alias: 'c'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    // .command('listar', 'Actualiza el estado completado de una tarea', {
    //     descripcion
    // })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Actualiza el estado completado de una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}