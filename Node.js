const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());

let loginData = {};  // Az adatok tárolása szerver memóriájában (vagy adatbázisban)

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Adatok mentése szerveroldalon
    loginData = { email, password };

    res.json({ success: true });
});

// Adatok lekérése a dashboard számára
app.get('/dashboard-data', (req, res) => {
    res.json(loginData);
});

app.listen(3000, () => {
    console.log('Szerver fut a 3000-es porton');
});
