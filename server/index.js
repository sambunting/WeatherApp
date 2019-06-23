require('dotenv').config();
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

function getIPData(ip) {
    return new Promise((resolve, reject) => {
        axios.get(`http://ip-api.com/json/${ip}`)
        .then(response => {
            resolve(response.data)
        }).catch(response => {
            reject(response);
        });
    })
}

function getLatLong(string) {
    return new Promise((resolve, reject) => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${string}&key=${process.env.GOOGLE_GEOCODE_API}`)
        .then(response => {
            const summary = {};
            const blacklist = ['route', 'street_number'];

            response.data.results[0].address_components.forEach(element => {
                if (!blacklist.includes(element.types[0])) {
                    summary[element.types[0]] = element.long_name;
                }
            });

            response.data.summary = summary;

            resolve(response.data)
        }).catch(response => {
            reject(response);
        });
    })
}

function makeWeatherRequest(lat, long) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_API}/${lat},${long}?units=uk2`)
        .then(response => {
            resolve(response.data)
        }).catch(response => {
            reject(response);
        });
    })
}

app.set('trust proxy', true);
app.use(cors())

app.get('/api/weatherData/:lat/:long', async function (req, res) {
    console.log('/api/weatherData/:lat/:long')
    const data = await makeWeatherRequest(req.params.lat, req.params.long)

    res.send(data)
})

app.get('/api/location/:string', async function (req, res) {
    console.log('/api/location/:string')

    const address = await getLatLong(req.params.string);
    res.send(address)
})

app.get('/api/ipaddress/', async function (req, res) {
    console.log('/api/ipaddress/')

    const ipData = await getIPData(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
    res.send(ipData);
});

console.log('Application running on port 5000');
app.listen(5000)