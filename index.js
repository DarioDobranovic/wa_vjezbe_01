const express = require('express');

const app = express();
const PORT = 3000;

let users = [
    { id: 1, ime: 'Mateo', prezime: 'Marić' },
    { id: 2, ime: 'Maksim', prezime: 'Lakoseljac' },
    { id: 3, ime: 'Ivan', prezime: 'Živković' }
];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Poslužitelj radi na http://localhost:${PORT}`);
});
