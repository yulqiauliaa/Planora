import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';

dotenv.config();

const app = Fastify({ logger: true });

app.register(cors, { origin: true });

app.get('/api/health', async () => {
  return { status: 'ok', message: 'Backend Planora berjalan lancar' };
});

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 4000;
    await app.listen({ port, host: '0.0.0.0' });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();