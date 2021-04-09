import React from 'react'
import "../asset/css/review.css";
import bike from "../asset/images/bike.svg";

function Review() {
    return (
        <div className="review-section">
            <div className="img-carousel">
                <button className="left">
                    <i className="fas fa-chevron-left"></i>                </button>
                <img src={bike} alt="logo" />
                <button className="right">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            <div class="review-quest">
                <h1>why middleend</h1>
                <p><i class="fas fa-arrow-right"></i>its a place to find home </p>
                <p><i class="fas fa-arrow-right"></i>my everyday need</p>
                <p><i class="fas fa-arrow-right"></i>its saves time and long queue</p>
                <p><i class="fas fa-arrow-right"></i>manage your expenses</p>
                <p><i class="fas fa-arrow-right"></i>It reduces  stress</p>
                <p><i class="fas fa-arrow-right"></i>quick delivery</p>
            </div>
        </div>
    )
}

export default Review
