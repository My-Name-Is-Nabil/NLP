var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const app = express()
const axios = require('axios');
require('dotenv').config();

app.use(express.static('dist'))
app.use(cors());
app.use(express.json());
const API_KEY = process.env.API_KEY;

console.log(API_KEY);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/api', function (req, res) {
    const processor = req.body.processor;
    const article = req.body.article;
    if (processor == 'sentiment-analysis'){
        axios.get('https://api.meaningcloud.com/sentiment-2.1',{
            params:{
                key:API_KEY,
                lang:'en',
                model:'general',
                txt:article,
            }      
        }).then(response=>{
            console.log(response.data);
            res.send(JSON.stringify(response.data));
        }).catch(error=>{
            console.error(error);
            res.send(error);
        })
    }
    else if (processor == 'summarization'){
        axios.get('https://api.meaningcloud.com/summarization-1.0',{
            params:{
                key:API_KEY,
                of:'json',
                txt:article,
                sentences: 2
            }
        }).then(response=>{
            console.log(response.data);
            res.send(JSON.stringify(response.data));
        }).catch(error=>{
            console.error(error);
            res.send(error);
        })
    }
    else if (processor == 'topic-extraction'){
        axios.get('https://api.meaningcloud.com/topics-2.0',{
            params:{
                key:API_KEY,
                lang:'en',
                tt:'a',
                uw:'y',
                txt:article,
            }
        }).then(response=>{
            console.log(response.data);
            res.send(JSON.stringify(response.data));
        }).catch(error=>{
            console.error(error);
            res.send(error);
        })
    }
})
