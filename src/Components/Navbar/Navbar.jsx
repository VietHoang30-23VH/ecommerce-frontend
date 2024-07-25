import React, { useContext, useState } from 'react';
import './Navbar.css';
import { RxDividerVertical } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const [setSearchTerm] = useState('');
    const {getTotalCartItems} = useContext(ShopContext);
    const handleSearch = (term) => {
        setSearchTerm(term);
      };
    return (
        <>
        <div className="navbar">
            <ul className='nav-menu'>
                <li onClick={() => {setMenu('shop')}}><Link style={{textDecoration: 'none', color:'white'}} to= '/'>Collections</Link> {menu === 'shop' && <hr/>}</li>
                <RxDividerVertical style={{fontSize:'2rem'}}/>
                <li onClick={() => {setMenu('mens')}}><Link style={{textDecoration: 'none',color:'white'}} to= '/mens'>Man</Link>{menu === 'mens' && <hr/>}</li>
                <RxDividerVertical style={{fontSize:'2rem'}}/>
                <li onClick={() => {setMenu('womens')}}><Link style={{textDecoration: 'none',color:'white'}} to= '/womens'>Women</Link>{menu === 'womens' && <hr/>}</li>
            </ul>
            <div className="nav-login-cart">
                <SearchBar onSearch={handleSearch} />
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
        <div className="nav-header">
        <p>B̳̿͟͞r̳̿͟͞a̳̿͟͞n̳̿͟͞d̳̿͟͞s̳̿͟͞</p>
        </div>
        </>
    );
};

export default Navbar;  