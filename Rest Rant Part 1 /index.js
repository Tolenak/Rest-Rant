
// requiring express & dotenv
require('dotenv').config ()
const express = require ('express')
const app = express ()

app.set('view engine','jsx')
app.engine ('jsx',require('express-react-views').createengine())

app.use('/places',require('./controllers/places'))

app.get('/', (req, res) => {
    res.sender('home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

// pulling PORT variable from the .env file 
app.listen(process.env.PORT)



