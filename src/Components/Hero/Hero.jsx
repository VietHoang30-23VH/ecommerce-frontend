import React from 'react';
import './Hero.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
const Hero = () => {
    return (
        <div className='hero'>
            <Navbar/>
            <div className="hero-content">
                <div className="hero-left">
                    <div>
                        <p>ÁO NAM +</p>
                        <p>QUẦN NAM +</p>
                        <p>ĐỒ LÓT NAM +</p>
                        <p>PHỤ KIỆN +</p>
                        <p>NEW ARRIVALS</p>
                        <p>BEST SELLERS</p>
                        <p>SIÊU SALE GIÁ TỐT +</p>
                        <p>POLO PREMIUM</p>
                        <p>COFFEE LOVERS</p>
                        <p>ACTIVE WEAR</p>
                        <p>TIN THỜI TRANG</p>
                    </div>
                    <div className="hero-latest-btn">
                            <div><Link style={{color:'white'}} to= '/login'>𝗫𝗘𝗠 𝗡𝗚𝗔𝗬</Link></div>
                        </div>
                    <div className="hero-left-image">
                    {/* <img src={hero_image} alt="Hero" /> */}
                    </div>
                </div>
                <div className="hero-right">
                    {/* <img src={hero_image} alt="Hero" /> */}
                    <div className="header-right">
                        <h1>SPORTS</h1>
                        <h2>PREMIUM SS24</h2>
                    </div>
                    <div className='hero-right-content'>
                    <RiDoubleQuotesL style={{fontSize:"2rem"}}/>
                    <ul>SANG TRỌNG,THỂ THAO,NĂNG ĐỘNG</ul>
                    <ul>TIÊU CHUẨN THỜI TRANG HIỆN ĐẠI</ul>   
                    <RiDoubleQuotesR style={{fontSize:'2rem',marginLeft:"22rem"}}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero;
