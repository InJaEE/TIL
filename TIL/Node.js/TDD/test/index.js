const express = require('express');
const app = express();
const morgan = require('morgan');
let users = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'bek'},
    {id: 3, name: 'chris'},
];

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/users', (req, res) => {
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit, 10);
    if(Number.isNaN(limit)){
        return res.status(400).end();
    }
    res.json(users.slice(0, limit));
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(Number.isNaN(id)) return res.status(400).end();
    const user = users.filter(user => user.id === id)[0];
    if(!user) return res.status(404).end();
    
    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    if(Number.isNaN(id)) return res.status(400).end();

    users = users.filter(user => user.id !== id);
    res.status(204).end();
})

app.post('/users', (req, res) => {
    const name = req.body.name;
    if(!name) res.status(400).end();

    const isConflict = users.filter(user => user.name === name).length;
    if(isConflict) res.status(409).end();
    
    const id = Date.now();
    const user = {name, id};
    users.push(user);
    res.status(201).json(user);
});

app.listen(3000, () => {
    console.log(`http://127.0.0.1:3000`);
});

module.exports = app;