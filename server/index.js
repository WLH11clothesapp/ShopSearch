/// import express massive and .env
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

///import controllers
const authCtrl = require("./authController");
const prodCtrl = require("./productController");
const postCtrl = require("./postController");

/// invoking express
const app = express();

/// topLevel middleware
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 3600000
    }
  })
);

///use massive to connect db
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("The great and powerful DB has been connected");
});

//// authController endpoints
app.post("/api/login", authCtrl.login);
app.post("/api/register",  authCtrl.register);
// app.post("/api/logout", authCtrl.logout);
// app.get("/api/user", authCtrl.getUser);

//// productController endpoints
app.get("/api/products", prodCtrl.getProducts);
// app.get("/api/search/", prodCtrl.searchProducts); // use queary
// app.get("/api/product/:id", prodCtrl.getProduct);
// app.post("/api/product", prodCtrl.addProduct);
// app.post("/api/brands", prodCtrl.getBrands);
app.get("/api/post-products/:post_id", prodCtrl.getPostProducts);

//// postController endpoints
// app.post("/api/post", postCtrl.addPost);
app.get("/api/post/:id", postCtrl.getPost);
// app.get("/api/product-posts/:prod_id", postCtrl.getProductPosts);

///add listener
app.listen(SERVER_PORT, () => console.log(`Server on ${SERVER_PORT}`));
