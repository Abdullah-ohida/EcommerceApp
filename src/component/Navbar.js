import React from "react";
import appLogo from "../asset/images/AvidBikers.png";
import cartIcon from "../asset/images/carticon.png";
import "../asset/css/nav.css";

function Navbar() {
  return (

    <nav className="container">
      <div className="nav-center">
        <div className="left-nav">
          <img src={appLogo} alt="Logo" />

          <p href="" className="link active">
            home
            </p>
          <p href="" className="link">
            what's new
            </p>
          <button className="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="right-nav">
          <button href="/asset/pages/login.html" className="auth-btn">
            login
            </button>
          <button href="/asset/pages/signup.html" className="auth-btn" id="btn">
            register
            </button>

          <div className="cart">
            <p className="cart-size">0</p>
            <img src={cartIcon} alt="cart-logo" />

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
