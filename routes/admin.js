const express = require('express');
const path = require('path');
const router = express.Router();
//const rootDir = require('../utils/path');
const productsController = require('../controllers/products');


let products = [];

//  /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);


// router.get('/add-product', (req, res, next) => {
//     console.log("Server app started");
//     res.render('add-product', {pageTitle: "Add Product", path: "/admin/add-product", activeAddProduct: true, productCSS: true});
//     //next(); // allows the request to continue to the next middleware in line
// });

router.post('/add-product', productsController.postAddProduct);
   


// router.get('/404', (req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
// })

module.exports = router;












