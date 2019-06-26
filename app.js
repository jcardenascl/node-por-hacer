const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        porHacer.crear(argv.descripcion).then((result) => {
            console.log(result);

        }).catch((err) => {
            console.log('Error', err);

        });
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log(colors.green('========Por Hacer========='));
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log(colors.green('=========================='));
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);

        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);

        break;

    default:
        console.log('Comando no reconocido');

        break;
}