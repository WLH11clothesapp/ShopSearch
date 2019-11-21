import React from "react";
import { Switch, Route } from "react-router-dom";
// component imports
import Landing from "./Components/Landing/Landing";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Search from "./Components/Search/Search";
import ProductPage from "./Components/ProductPage/ProductPage";
import PostPage from "./Components/PostPage/PostPage";
import NewPost from "./Components/NewPost/NewPost";
import UserProfile from "./Components/UserProfile/UserProfile";
import About from './Components/About/About'

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="/userprofile" component={UserProfile} />
    <Route path="/search" component={Search} />
    <Route path="/product/:id" component={ProductPage} />
    <Route path="/post/:id" component={PostPage} />
    <Route path="/newpost" component={NewPost} />
    {/* //? dont know if we need this one? */}
    <Route path='/about' component={About}/>
  </Switch>
);
