// Axios trabaja en base a promesas
const axios = require('axios');


const getLugarLatLng = async(dir) => {
    // Debemos de preparar la dirección antes de mostrarla
    const encodedURL = encodeURI(dir); // País
    const keyService = '3081e2f992103f08790f3aebc608b633';

    // headers
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${ encodedURL }&appid=${ keyService }`
    });

    const resp = await instance.get();

    if (resp.data.cod == 404) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}