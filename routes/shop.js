const express = require('express');

const path = require('path');

const router = express.Router(); 

//const rootDir = require('../utils/path');

//const adminData = require('./admin');

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/product', shopController.getAddProduct);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);


 module.exports = router;