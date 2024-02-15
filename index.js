const express = require('express');
const app = express();

// Middleware to log request details
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next(); // Move to the next middleware or route handler
});

app.all('/', (req, res) => {
    console.log("Just got a request!");
    res.send('Yo!');
});

// Custom route
app.get('/hello', (req, res) => {
    res.send('Hello from Express!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
