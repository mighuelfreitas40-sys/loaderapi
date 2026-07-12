const express = require('express');
const app = express();

const PORT = process.env.PORT || 10000;

const LOADER_OCULTO = `loadstring(game:HttpGet("https://raw.githubusercontent.com/mighuelfreitas40-sys/Loader/refs/heads/main/NovoAprendiz"))()`;

app.get('/api/script', (req, res) => {
    const userAgent = (req.headers['user-agent'] || '').toLowerCase();

    // Executores Lua geralmente nao tem User-Agent padrao de navegador
    // ou tem algo muito generico. Bloqueia navegadores conhecidos.
    const navegadores = ['chrome', 'firefox', 'safari', 'edge', 'opera', 'curl', 'wget', 'postman', 'insomnia', 'python', 'java', 'node'];

    const isNavegador = navegadores.some(n => userAgent.includes(n));

    if (isNavegador) {
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
