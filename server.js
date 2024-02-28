//const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
//const routes = require('./routes');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "404"});
});
// const server = http.createServer(app);

// server.listen(2000);

app.listen(2000);

















