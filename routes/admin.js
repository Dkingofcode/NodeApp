const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/path');

let products = []

router.get('/add-product', (req, res, next) => {
    console.log("Server app started");
    res.render('add-product', {pageTitle: "Add Product"});
    //next(); // allows the request to continue to the next middleware in line
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    console.log(req.body);
    res.redirect('/');
})

// router.get('/404', (req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
// })

exports.router = router;
exports.products = products;











