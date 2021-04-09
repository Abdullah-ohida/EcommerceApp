import React from "react";
import "../asset/css/product.css";
import bike from '../asset/images/bike.svg'

function ProductSearch(props) {
  return (
    <section className="page-content">
      <main className="page">
        <h1>search for bicycle</h1>
        <p>
          Find an eco-friendly bicycle and save the planet while improving your
          fitness and health.
        </p>
        <div className="search">
          <input type="text" placeholder = "Search for bike"/>
          <button type="submit">search</button>
        </div> 
      </main>
      <div className="bike-slider">
        <img src={bike} alt="logo"/>
      </div>
    </section>
  );
}

export default ProductSearch;
