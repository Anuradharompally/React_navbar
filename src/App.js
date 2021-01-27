import React from "react";
import './App.css';
import Home from "./Components/Home";
import Products from "./Components/Products";
import SignIn from "./Components/SignIn";
import Navbar from "./Components/Navbar";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import ProductsSpecs from "./Components/ProductsSpecs";
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
          <Navbar />
          <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route path="/signIn" component={SignIn}></Route>
          <Route path="/products/item" component={ProductsSpecs}></Route>
          </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
