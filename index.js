const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello from the homepage!')
})

app.get('/about', (req, res) => {
  res.send('This is the about page.')
})

app.listen(process.env.PORT || 3000)
