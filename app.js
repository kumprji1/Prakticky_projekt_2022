const path = require('path')

const express = require('express')

// Routes
const sharedRoutes = require('./routes/sharedRoutes')

// Enabling .env variables
const dotenv = require('dotenv');
dotenv.config();

const app = express()


app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT)

app.use(sharedRoutes)

app.use((req, res, next) => {
    res.redirect('/prvni-workshop')
})
