const express = require('express');
const router = require('./rotes/rotas');  // Corrigir o caminho do arquivo

const app = express();

const port = 8000;

app.use('/', router);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});