const path = require('path')

const express = require('express')

const app = express()

// Enabling .env variables
const dotenv = require('dotenv');
dotenv.config();

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.listen(process.env.PORT)

app.use((req, res, next) => {
    res.render('firstWorkshop')
})