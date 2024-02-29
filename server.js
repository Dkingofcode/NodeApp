//const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
//const routes = require('./routes');
const exHandlebars = require('express-handlebars');
const path = require('path');
const errorController = require('./controllers/404');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.getError);
// const server = http.createServer(app);

// server.listen(2000);

app.listen(2000);

















