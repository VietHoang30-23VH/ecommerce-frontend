import React from 'react';
import './ProductDisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';

const ProductDisplay = (props) => {
    const { product } = props;
    console.log(product);

    if (!product) {
        return <div>No product data available</div>;
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {/* Assuming product.pathImage is the URL for the image */}
                    <img src={product.pathImage} alt="product" />
                    <img src={product.pathImage} alt="product" />
                    <img src={product.pathImage} alt="product" />
                    <img src={product.pathImage} alt="product" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.pathImage} alt="product" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_icon} alt="star icon" />
                    <img src={star_dull_icon} alt="dull star icon" />
                    <p>122</p>
                </div>
                <div className="productdisplay-right-prices">
                    {/* <div className="productdisplay-right-price-old">${product.price}</div> */}
                    <div className="productdisplay-right-price-new">${product.price}</div>
                </div>
                <div className="productdisplay-right-description">
                    {product.longDescription}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category: <span>Women, T-Shirt, Crop Top</span></span></p>
                <p className='productdisplay-right-category'><span>Tags: <span>Modern, Latest</span></span></p>
            </div>
        </div>
    );
}

export default ProductDisplay;
