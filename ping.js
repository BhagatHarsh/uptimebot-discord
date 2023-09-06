const express = require('express');
const axios = require('axios');

const app = express();

// Function to ping the endpoint
const pingEndpoint = () => {
    axios.get('https://cpbot.onrender.com')
        .then(response => {
            console.log('Ping success:', response.status);
        })
        .catch(error => {
            console.error('Ping error:', error.message);
        });
};

// Route to ping the endpoint every 5 seconds
app.get('/', (req, res) => {
    pingEndpoint(); // Initial ping

    // Schedule pinging every 5 seconds
    setInterval(() => {
        pingEndpoint();
    }, 5000);

    res.send('Pinging endpoint every 5 seconds.');
});

// Start the server
module.exports = app;