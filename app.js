const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    },

}).argv;
/* console.log(argv);
lugar.getLugarLatLng(argv.direccion)
    .then(console.log); */

/* clima.getClima(40.7143, -74.006)
    .then(console.log)
    .catch(console.log); */


const getInfo = async(direccion) => {
    console.log(direccion);
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temperatura }°`.rainbow;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);