import React, { Component } from 'react'
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Review from "./component/Review";
import Footer from "./component/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Product />
        <Review />
        <Footer />
      </div>
    )
  }
}

export default App

