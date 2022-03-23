const path = require('path')

const express = require('express')

const app = express()

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)

app.use((req, res, next) => {
    res.render('firstWorkshop')
})