import React from "react";
import Navbar from "./Components/Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Posts from "./Components/Posts";
import DashBoard from "./Components/admin/DashBoard";
import ProductsDetails from "./Components/ProductsDetails";
import Products from "./Components/Products";
import NotFound from "./Components/NotFound";
import Login from "./Components/Forms/Login";
import LoginSuccess from "./Components/Forms/LoginSuccess";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="content">
        {/* <Switch>
          <Route path="/products/:id" component={ProductsDetails} />
          <Route path="/products" component={Products} />
          <Route path="/posts/:year?/:month?" component={Posts} />
          <Redirect from="/messages" to="/not-found" />
          <Route path="/admin" component={DashBoard} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch> */}
        <Redirect from="/" to="/login" />
        <Route path="/login" component={Login} />
        <Route path="/login-success" component={LoginSuccess} />
      </div>
    </div>
  );
};

export default App;
