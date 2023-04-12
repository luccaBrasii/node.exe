const express = require('express')
const app = express()

const { exec } = require('child_process');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})


app.listen(3000, () => {
    console.log('Running meu-app: http://localhost:3000/')

})

app.get('/css.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(__dirname + '/public/css.css');
});

app.get('/style.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(__dirname + '/public/style.css');
});

app.get('/script.js', function (req, res) {
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/public/script.js');
});

exec('start http://localhost:3000/');