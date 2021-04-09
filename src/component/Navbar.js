import React from "react";
import appLogo from "../asset/images/AvidBikers.png";
import cartIcon from "../asset/images/carticon.png";
import "../asset/css/nav.css";
import Cart from "./Cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <nav className="container">
        <div className="nav-center">
          <div className="left-nav">
            <img src={appLogo} alt="Logo" />

            <p className="link active">home</p>
            <p className="link">what's new</p>
            <button className="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="right-nav">
            <button href="/asset/pages/login.html" className="auth-btn">
              login
            </button>
            <button
              href="/asset/pages/signup.html"
              className="auth-btn"
              id="btn"
            >
              register
            </button>

            <div className="cart">
              <Link to="/cart">
                <p className="cart-size">0</p>
                <img src={cartIcon} alt="cart-logo" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path = "/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navbar;
