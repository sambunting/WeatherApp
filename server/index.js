require('dotenv').config();
const fs = require('fs');
const https = require("https");
const http = require("http");
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()

let options = {};

if (process.env.NODE_ENV === "production") {
    const key = fs.readFileSync('/etc/letsencrypt/live/bunting.dev/privkey.pem');
    const cert = fs.readFileSync('/etc/letsencrypt/live/bunting.dev/fullchain.pem');

    options = {
        key: key,
        cert: cert
    }
}

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

if (process.env.NODE_ENV === "production") {
    const httpsServer = https.createServer(options, app);
    
    httpsServer.listen(5000, () => {
        console.log('Application running on HTTPS with port 5000');
    })
} else {
    const httpServer = http.createServer(app);

    httpServer.listen(4000, () => {
        console.log('Application running on HTTP with port 4000');
    })
}