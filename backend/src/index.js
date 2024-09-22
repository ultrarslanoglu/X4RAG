// backend/src/index.js
const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
