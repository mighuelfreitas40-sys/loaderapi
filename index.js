const express = require('express');
const app = express();

const PORT = process.env.PORT || 10000;
const SECRET_HEADER = 'X-Lua-Auth';
const SECRET_VALUE = 'nao_abre_no_navegador_2026';

const LOADER_OCULTO = `loadstring(game:HttpGet("https://raw.githubusercontent.com/mighuelfreitas40-sys/Loader/refs/heads/main/NovoAprendiz"))()`;

app.get('/api/script', (req, res) => {
    const auth = req.headers[SECRET_HEADER.toLowerCase()];

    if (auth !== SECRET_VALUE) {
        return res.status(403).send('Acesso negado.');
    }

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-store');
    res.send(LOADER_OCULTO);
});

app.get('/', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
