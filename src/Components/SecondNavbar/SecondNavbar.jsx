import React, { useContext, useState } from 'react';
import './SecondNavbar.css';
import { RxDividerVertical } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import SearchBar2 from '../SearchBar/SearchBar2';

const SecondNavbar = () => {
    const [menu, setMenu] = useState('shop');
    const [setSearchTerm] = useState('');
    const {getTotalCartItems} = useContext(ShopContext);
    const handleSearch = (term) => {
        setSearchTerm(term);
      };
    return (
        <>
        <div className="navbar1">
            <ul className='nav-menu1'>
                <li onClick={() => {setMenu('shop')}}><Link style={{textDecoration: 'none', color:'black'}} to= '/'>Collections</Link> {menu === 'shop' && <hr/>}</li>
                <RxDividerVertical style={{fontSize:'2rem'}}/>
                <li onClick={() => {setMenu('mens')}}><Link style={{textDecoration: 'none',color:'black'}} to= '/mens'>Man</Link>{menu === 'mens' && <hr/>}</li>
                <RxDividerVertical style={{fontSize:'2rem'}}/>
                <li onClick={() => {setMenu('womens')}}><Link style={{textDecoration: 'none',color:'black'}} to= '/womens'>Women</Link>{menu === 'womens' && <hr/>}</li>
            </ul>
            <div className="nav-login-cart">
                <SearchBar2 onSearch={handleSearch} />
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            <div className="nav-header1">
        <p>B̳̿͟͞r̳̿͟͞a̳̿͟͞n̳̿͟͞d̳̿͟͞s̳̿͟͞</p>
        </div>
        </div>

        </>
    );
};
export default SecondNavbar;