const Product = require('../models/product');


exports.getProducts =  (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/productlist', {
            prods: products, 
            pageTitle: 'All products', 
            path: "/products", 
            hasProducts: products.length > 0, 
            activeShop: true,   
        }) 
    });
        
    };


exports.getIndex =  (req, res, next) => {
        Product.fetchAll(products => {
            res.render('shop/index', {
                prods: products, 
                pageTitle: 'Shop', 
                path: "/", 
            }) 
          });    
        }


        exports.getCheckout =  (req, res, next) => {
                res.render('shop/checkout', { 
                    pageTitle: 'Checkout', 
                    path: "/checkout",  
                    activeShop: true,   
                }) 
            }


            exports.getCart =  (req, res, next) => {
                    res.render('shop/cart', { 
                        pageTitle: 'Your Cart', 
                        path: "/cart",  
                    })          
                }            

                exports.getOrders =  (req, res, next) => {            
                    res.render('shop/orders', { 
                        pageTitle: 'Your Orders', 
                        path: "/orders",  
                    })          
                }            


exports.getError = (req, res, next) => {
    res.status(404).render('404', {pageTitle: "page Not Found"});
};



exports.getAddProduct =  (req, res, next) => {
    res.render('shop/product', 
    {pageTitle: "Add Product", 
    path: "/shop/product", 
    activeAddProduct: true, 
    productCSS: true
  }); 

}












