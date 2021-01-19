    const axios = require('axios');


    const getClima = async(lat, lng) => {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3081e2f992103f08790f3aebc608b633&units=metric`)

        return resp.data.main.temp;
    }


    module.exports = {
        getClima
    }