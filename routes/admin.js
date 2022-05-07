const express = require('express');
const path = require('path');

const router = express.Router(); 

const rootDir = require('../util/path') 

const products = []


router.get('/add-product', (req, res, next) => {
    res.render('add-product', { docTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productsCSS: true, activeAddProduct: true})
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    
})

router.post('/add-product', (req, res) => {
    const {title} = req.body
    products.push({ title: title })
    res.redirect('/')
})


exports.routes = router
exports.products = products