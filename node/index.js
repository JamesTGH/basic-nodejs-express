import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Docker NodeJS App');
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});