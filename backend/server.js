import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';



const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/v1/auth', authRoutes);

app.listen(port, () => console.log(`Listening on port ${port}!`));
