import express from 'express';
import dotenv from 'dotenv';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/v1/login', (req, res) => {});

app.get('/api/v1/login', (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
