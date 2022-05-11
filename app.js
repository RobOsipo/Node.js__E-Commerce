const path = require('path');
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/database')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// getting data from mysql is as easy as this
// db.execute('SELECT * FROM products')
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {console.log('.catch block', err)})

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(5000, () => {
    console.log('listening on 5000')
});
