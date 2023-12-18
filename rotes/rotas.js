const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

router.get('/a', (req, res) => {
    res.send('Olá A');
});

router.post('/', (req, res) => {
    res.send('Você fez uma requisição do tipo POST');
});

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH');
});

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE');
});

module.exports = router;
