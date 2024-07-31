import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { RxDividerVertical } from "react-icons/rx";
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

import { CartContext } from '../../Context/CartContext';

const Navbar = () => {
    const { getTotalQuantityInCart, quantity } = useContext(CartContext);
    const [menu, setMenu] = useState('shop');
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    // Fetch cart data function
    const fetchCart = async () => {
        try {
            await getTotalQuantityInCart();
        } catch (error) {
            console.error('Failed to fetch cart. Please try again later.');
        }
    };

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setNavbarScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="nav-header">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p>XUN_DON</p>
                </Link>
            </div>
            <div className={`navbar ${navbarScrolled ? 'scrolled' : ''}`}>
                <ul className='nav-menu'>
                    <li onClick={() => setMenu('shop')}>
                        <Link to={`/product/gender/nam`} style={{ textDecoration: 'none', color: 'inherit' }}>NAM</Link>
                        {menu === 'shop' && <hr />}
                    </li>
                    <RxDividerVertical style={{ fontSize: '2rem' }} />
                    <li onClick={() => setMenu('womens')}>
                        <Link to={`/product/gender/nữ`} style={{ textDecoration: 'none', color: 'inherit' }}>NỮ</Link>
                        {menu === 'womens' && <hr />}
                    </li>
                    <RxDividerVertical style={{ fontSize: '2rem' }} />
                    <li onClick={() => setMenu('kids')}>
                        <Link to={`/product/gender/trẻ em`} style={{ textDecoration: 'none', color: 'inherit' }}>TRẺ EM</Link>
                        {menu === 'kids' && <hr />}
                    </li>
                </ul>
                <div className="nav-login-cart" onClick={fetchCart}>
                    <SearchBar />
                    <div className="nav-cart-count">{quantity === undefined ? 0 : quantity}</div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
