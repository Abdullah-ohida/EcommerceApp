import React from "react";
import bike from "../asset/images/bikecart.png";
import "../asset/css/cartItem.css";

function CartItem() {
  return (
    <div className="cart-item">
      <div className="bike-content">
        <img src={bike} alt="bike" />
        <div>
          <h4 className="bike-name">Specialized magic</h4>
          <p>
            <span className="category">Standard / </span>
            <spa className="color">white</spa>
          </p>
        </div>
      </div>

      <div className="cart-section">
        <div className="cart-quantity">
          <button type="submit" className="add">
            <i class="fas fa-plus"></i>
          </button>
          <div className="value">
            <p>1</p>
          </div>
          <button type="submit" className="remove">
            <i class="fas fa-minus"></i>
          </button>
        </div>

        <div className="cart-item-price">$2000</div>
      </div>

      <button type="submit" className="clear-cart-item">
        <i class="fas fa-times"></i>
      </button>
    </div>
  );
}

export default CartItem;
