// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));  // Serve files from the current directory

app.get('/sayHello', (req, res) => {
    // Respond with a JSON object containing the hello message
    res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
