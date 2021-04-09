import React, { Component } from "react";
import ProductItem from "./ProductItem";
import ProductSearch from "./ProductSearch";
import axios from "axios";

class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: true,
            products: []
        };
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8080/api/products")
            .then(res => {
                const data = res.data;
                console.log(res.data)
                this.setState({
                    isLoaded: false,
                    products: data,
                })
            })

    }

    render() {
        const productComponent = this.state.products.map(item => <ProductItem product={item} />)
        return (
            <div className="product-container">
                <ProductSearch />
                <h1 className="title">Products</h1>
                <div className="products">
                    {productComponent}
                </div>
            </div>


        );
    }
}

export default Product;
