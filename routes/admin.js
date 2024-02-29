const express = require('express');
const path = require('path');
const router = express.Router();
//const rootDir = require('../utils/path');
const adminController = require('../controllers/admin');




//  /admin/add-product => GET
router.get('/admin/addProduct', adminController.getAddProduct);

//  /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
// router.post('/admin/add-product', adminController.postAddProduct);
   


// router.get('/404', (req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, '../', 'views', '404.html'));
// })

module.exports = router;












