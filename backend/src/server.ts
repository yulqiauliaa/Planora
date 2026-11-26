import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({ origin: true }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Backend Planora berjalan lancar' });
});

const port = Number(process.env.PORT) || 4000;
const server = app.listen(port, '0.0.0.0');

server.on('error', (err) => {
  console.error(err);
  process.exit(1);
});