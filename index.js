const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Rota inicial de teste
app.get('/teste', (req, res) => {
    res.send('Rota de teste funcionando!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
