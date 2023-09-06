const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
    axios.get('https://cpbot.onrender.com')
    .then(response => {
        console.log('Ping success:', response.status);
    })
    .catch(error => {
        console.error('Ping error:', error.message);
    });
    res.send('Pinging....');
});

// Start the server
module.exports = app;