import React from "react";
import CartItem from "./CartItem";
import "../asset/css/cart.css";
import rightArrow from "../asset/images/rightarrow.svg";
import leftArrow from "../asset/images/leftarrow.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../App"

function Cart() {
  return (
    <Router>
      <div className="wrapper">
        <h1>my cart</h1>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="checkout-container">
        <div className="checkout">
          <h2 className="cart-total">Subtotal: $4000</h2>
          <div className="checkout-btn">
            <Link to="/home">
              <button type="submit" className="btn-left">
                <img src={leftArrow} alt="arrow" />
                continue shopping
              </button>
            </Link>
            <Link to="">
              <button type="submit" className="btn-right">
                proceed to checkout
                <img src={rightArrow} alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Switch>

        <Route exact path = "/home">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default Cart;
