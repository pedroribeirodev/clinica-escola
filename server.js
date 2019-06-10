const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bcrypt = require('bcrypt');

//Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o Banco de Dados
mongoose.connect(
    'mongodb://192.168.99.100:27017/clinica', 
    { useNewUrlParser: true }
);
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));


app.listen(3001);