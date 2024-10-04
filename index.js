const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors()); // Enable CORS for all origins
// Middleware to parse JSON bodies
app.use(express.json());

// Example route: Get all cart items
app.get('/api/cart', (req, res) => {
    res.json({ message: 'Here are your cart items' });
});

// Example route: Add an item to the cart
app.post('/api/cart', (req, res) => {
    const cartItem = req.body;
    // Here, you would typically add the item to your database
    res.json({ message: 'Item added to cart', item: cartItem });
});

// Start the server
app.listen(port, () => {
    console.log(`API server is running on http://localhost:${port}`);
});
