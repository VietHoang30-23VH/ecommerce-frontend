import React, { useContext, useEffect, useState } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';
import { formatPrice } from '../Item/Item';
import SecondNavbar from '../SecondNavbar/SecondNavbar';
import PaginationRounded from '../Pagination/PaginationRounded';
import { getTotalQuantityInCart, updateQuantityInDetailCart } from '../../API/ApiDetailCart';
import { CartContext } from '../../Context/CartContext';

const CartItems = () => {
    const { getTotalQuantityInCart } = useContext(CartContext);

    const { products = [], fetchDetailProductInCart, paginationData } = useContext(ShopContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false); // State to handle loading

    useEffect(() => {
        fetchDetailProductInCart(currentPage);
    }, [currentPage]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleQuantityChange = async (productName, quantity, size) => {
        setLoading(true); // Set loading to true before starting API call
        try {
            await updateQuantityInDetailCart(productName, quantity, size); // thay đổi số lượng
            await fetchDetailProductInCart(currentPage); // lấy ra lại sản phẩm trong detailCart
            await getTotalQuantityInCart(); // update quantity trong cart
        } catch (error) {
            console.error('Error updating quantity:', error);
        } finally {
            setLoading(false); // Set loading to false after API call completes
        }
    }

    return (
        <>
            <SecondNavbar />
            <div className='cartitems'>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                // checked={selectedProducts.has(product.name)}
                                // onChange={() => handleSelectChange(product.name)}
                                /></th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? products.map((product, i) => (
                            <tr key={i}>
                                <td>
                                    <input
                                        type="checkbox"
                                    // checked={selectedProducts.has(product.name)}
                                    // onChange={() => handleSelectChange(product.name)}
                                    />
                                </td>
                                <td><img src={product.pathImage} alt="" className='carticon-product-icon' /></td>
                                <td>{product.name}</td>
                                <td style={{ textTransform: 'uppercase' }}>{(product.size)}</td>
                                <td>{formatPrice(product.price)}</td>
                                <td>
                                    <div className="buy-amount">
                                        <button onClick={() => handleQuantityChange(product.name, product.quantity - 1, product.size)} disabled={loading}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>
                                        </button>
                                        <input type="text" name="amount" id="amount" value={product.quantity} readOnly />
                                        <button onClick={() => handleQuantityChange(product.name, product.quantity + 1, product.size)} disabled={loading}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td>{formatPrice(product.price * product.quantity)}</td>
                                <td><img className='cartitems-remove-icon' src={remove_icon} alt="" /></td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="7">No products in cart</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal</p>
                                <p>$</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>Shipping free</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>$</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cartitems-promobox">
                            <input type="text" name="" id="" placeholder='promocode' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            {paginationData.totalPages > 1 && (
                <PaginationRounded
                    count={paginationData.totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            )}
        </>
    );
};

export default CartItems;
