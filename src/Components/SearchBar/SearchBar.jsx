// SearchBar.js
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const SearchBar = ({ onSearch }) => {
  return (
    <>
    <div className="search-bar" 
      style={{
      margin: "0.5px",
      border: "none",
      borderBottom: "2px solid white",
      outline: "none",
      backgroundColor: "transparent", 
      display:"flex",
      alignItems:'center',
      }}>
      <CiSearch style={{fontSize:"1.3rem",color:'white'}}/>
      <input
        type="text"
        placeholder="Tìm kiếm "
        onChange={(e) => onSearch(e.target.value)}
        style={{background:'transparent', outline:'none',border:'none !important'}}
      />
    </div>
    <div className="user">
      <CiUser onClick={{}} style={{color:'white',fontSize:'2rem',cursor:'pointer'}}/>
    </div>
    <div className="heart">
      <IoIosHeartEmpty onClick={{}} style={{color:'white',fontSize:'2rem',cursor:'pointer'}}/>
    </div>
    <div className="cart">
    <Link to="/cart">
          <IoCartOutline style={{ color: 'white', fontSize: '2rem', cursor: 'pointer' }} />
    </Link>
    </div>
    </>


  );
};

export default SearchBar;