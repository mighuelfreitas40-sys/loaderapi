const express = require('express');
const app = express();

const PORT = process.env.PORT || 10000;

// Loader real embutido no codigo (nao exibido em site, nao retorna em JSON)
const LOADER_OCULTO = `loadstring(game:HttpGet("https://raw.githubusercontent.com/mighuelfreitas40-sys/Loader/refs/heads/main/NovoAprendiz"))()`;

// Rota principal: retorna o loader oculto como Lua puro
app.get('/api/script', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-store');
    res.send(LOADER_OCULTO);
});

// Rota raiz: apenas status, nao revela nada
app.get('/', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
