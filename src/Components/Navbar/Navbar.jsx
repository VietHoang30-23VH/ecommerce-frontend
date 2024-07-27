import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { RxDividerVertical } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const [ setSearchTerm] = useState('');
    const { getTotalCartItems } = useContext(ShopContext);
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setNavbarScrolled(true);
            } else {
                setNavbarScrolled(false); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="nav-header">
                <p>B̳̿͟͞r̳̿͟͞a̳̿͟͞n̳̿͟͞d̳̿͟͞s̳̿͟͞</p>
            </div>
            <div className={`navbar ${navbarScrolled ? 'scrolled' : ''}`}>
                <ul className='nav-menu'>
                    <li onClick={() => setMenu('shop')}>
                        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>Collections</Link>
                        {menu === 'shop' && <hr />}
                    </li>
                    <RxDividerVertical style={{ fontSize: '2rem' }} />
                    <li onClick={() => setMenu('mens')}>
                        <Link to='/mens' style={{ textDecoration: 'none', color: 'inherit' }}>Man</Link>
                        {menu === 'mens' && <hr />}
                    </li>
                    <RxDividerVertical style={{ fontSize: '2rem' }} />
                    <li onClick={() => setMenu('womens')}>
                        <Link to='/womens' style={{ textDecoration: 'none', color: 'inherit' }}>Women</Link>
                        {menu === 'womens' && <hr />}
                    </li>
                </ul>
                <div className="nav-login-cart">
                    <SearchBar onSearch={handleSearch} />
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
