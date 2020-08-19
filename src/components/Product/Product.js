import React from 'react';
import "./Product.css";

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <p>{title}</p>
            <p className="product__price">
                <small>R</small>
                <strong>{price}</strong>
            </p>
            {/* Rating Stars */}
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <span>⭐</span>
                    ))
                }
            </div>
            <img src={image} alt="" />
            <button>Add to Basket</button>

        </div>
    )
}

export default Product;
