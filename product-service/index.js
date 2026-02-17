import express from 'express';

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Motorcycle' }
  ]);
});

app.listen(PORT, () => console.log(`Product service running on port ${PORT}`));
