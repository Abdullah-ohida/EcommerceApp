import React from "react";
import "../asset/css/product_item.css";
import bike from "../asset/images/bike.svg";
import cartIcon from "../asset/images/carticon.png";

function ProductItem(props) {
    const { id, name, price, category } = props.product;
    return (
        <div className="product" key={id}>
            <div className="img-container">
                <img src={bike} alt="product" className="image" />
            </div>
            <div className="name-wrapper">
                <h4 className="name">{name}</h4>
                <small>{category}</small>
            </div>
            <div className="flex">
                <p className="price">${price}</p>
                <button className="cart-btn">
                    <img src={cartIcon} alt="cart-icon" className="cart-icon" />
                    <p>Add to Cart</p>
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
