import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'initiated' });
});

app.listen(3333, () => {
  console.log('Iniciado');
});
