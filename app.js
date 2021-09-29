const express = require('express');
const path = require('path');
const color = require('colors');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    const pathFile = path.join(__dirname,'./views/index.html');
    res.sendFile(pathFile);
});

app.get('/babbage', (req, res) => {
    const pathFile = path.join(__dirname,'./views/babbage.html');
    res.sendFile(pathFile);
});

app.get('/berners-lee', (req, res) => {
    const pathFile = path.join(__dirname,'./views/berners-lee.html');
    res.sendFile(pathFile);
});

app.get('/clarke', (req, res) => {
    const pathFile = path.join(__dirname,'./views/clarke.html');
    res.sendFile(pathFile);
});

app.get('/hamilton', (req, res) => {
    const pathFile = path.join(__dirname,'./views/hamilton.html');
    res.sendFile(pathFile);
});

app.get('/hopper', (req, res) => {
    const pathFile = path.join(__dirname,'./views/hopper.html');
    res.sendFile(pathFile);
});

app.get('/lovelace', (req, res) => {
    const pathFile = path.join(__dirname,'./views/lovelace.html');
    res.sendFile(pathFile);
});

app.get('/turing', (req, res) => {
    const pathFile = path.join(__dirname,'./views/turing.html');
    res.sendFile(pathFile);
});

app.listen(3030, () => console.log('Servidor el puerto 3030'.bold.magenta));