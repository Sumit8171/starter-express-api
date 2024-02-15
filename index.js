// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to set headers for cross-origin requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow any origin (you can set a specific origin)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.static(__dirname));

app.get('/sayHello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
