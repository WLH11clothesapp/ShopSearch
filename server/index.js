/// import express massive and .env
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

///import controllers
const authCtrl = require('./authController');
const prodCtrl = require('./productController');
const postCtrl = require('./postController');
const storeCtrl = require('./storageController');

/// invoking express
const app = express();

/// topLevel middleware
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 60 * 60 * 1000
    }
  })
);

///use massive to connect db
massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('The great and powerful DB has been connected');
});

//// authController endpoints
app.post('/api/login', authCtrl.login);
app.post('/api/register', authCtrl.register);
app.post('/api/logout', authCtrl.logout);
app.get('/api/user', authCtrl.getUser);

//// productController endpoints
app.get('/api/products', prodCtrl.getProducts);
app.get('/api/product/:id', prodCtrl.getProduct);
app.post('/api/product', prodCtrl.addProduct);
app.get("/api/brandsandcatagories", prodCtrl.getBrandsAndCatagories);
app.get('/api/post-products/:post_id', prodCtrl.getPostProducts);

//// postController endpoints
app.post('/api/post', postCtrl.addPost);
app.get('/api/posts/:id', postCtrl.getPosts);
app.get('/api/post/:id', postCtrl.getPost);
app.get('/api/product-posts/:prod_id', postCtrl.getProductPosts);

//// storageController endpoints
app.get('/api/signs3', storeCtrl.signs3);

///add listener
app.listen(SERVER_PORT, () => console.log(`Server on ${SERVER_PORT}`));
