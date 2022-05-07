const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const expressHbs = require('express-handlebars')

const app = express()

app.set('view engine', 'ejs')


// To Switch back to Handlebars I can use these
// * app.engine('hbs', expressHbs({layoutsDir: '/views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'}))
// * app.set('view engine', 'hbs')

// To Switch back to Pug I can use these
// * app.set('view engine', 'pug')
// Only need this below if template folder is not called views-- (here as a note)
 app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)



app.use((req, res, next) => {
    res.status(404).render('page-not-found', {docTitle: '404'})
})


app.listen(8080, () => {
    console.log('listening')
})