var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const app = express()


require('dotenv').config();
app.use(express.static('dist'))
app.use(cors());
const API_KEY = process.env.API_KEY;

console.log(API_KEY);
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/api', function (req, res) {
    res.send(mockAPIResponse)
})
