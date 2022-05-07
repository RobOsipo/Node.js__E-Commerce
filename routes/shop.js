const express = require('express');
const path = require('path')

const router = express.Router(); 

const rootDir = require('../util/path')
const adminData = require('./admin.js')

router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products)
    const {products} = adminData


    res.render('shop', {prods: products, docTitle: 'Shop', path: '/'})
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
} )

module.exports = router