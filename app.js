const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./api/products'); // Import your product routes

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://r7905455:rh9GzGuLyhLsCLME@cluster0.c2ypzfg.mongodb.net/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Use the product routes
app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
