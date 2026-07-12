// API
const crypto = require('crypto');
const CHAVE = 'sua-chave-secreta-aqui';

function criptografar(texto) {
    const cipher = crypto.createCipher('aes-256-cbc', CHAVE);
    let cripto = cipher.update(texto, 'utf8', 'hex');
    cripto += cipher.final('hex');
    return cripto;
}

app.get('/api/script', (req, res) => {
    const auth = req.headers['x-lua-auth'];
    if (auth !== 'valor-secreto') return res.status(403).send('Negado');

    const loaderCripto = criptografar(LOADER_OCULTO);
    res.setHeader('Content-Type', 'text/plain');
    res.send(loaderCripto);
});
