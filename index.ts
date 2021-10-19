import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/.env` });

const server = express();
const port: number = process.env.PORT;

server.get('/', (request, response) => {
    response.send('Initial project setup')
});

server.listen(port, () => {
    const date: Date = new Date();
    console.log(`[${date.toISOString()}] Server listening on port ${port}`)
});