import express from 'express';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3000;

const USER_SERVICE_URL = 'http://user-service:3001';
const PRODUCT_SERVICE_URL = 'http://product-service:3002';

app.get('/users', async (req, res) => {
  const response = await axios.get(`${USER_SERVICE_URL}/users`);
  res.json(response.data);
});

app.get('/products', async (req, res) => {
  const response = await axios.get(`${PRODUCT_SERVICE_URL}/products`);
  res.json(response.data);
});

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
