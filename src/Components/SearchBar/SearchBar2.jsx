import { useState } from "react";
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const SearchBar2 = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Trigger navigation to search results
      navigate(`/catalogsearch/result/${search}`);
      setSearch(''); // Clear the input value after navigation
    }
  };

  return (
    <>
      <div className="search-bar" 
        style={{
        margin: "0.5px",
        border: "none",
        borderBottom: "2px solid black",
        outline: "none",
        backgroundColor: "transparent", 
        display:"flex",
        alignItems:'center',
        }}>
        <CiSearch style={{fontSize:"1.3rem",color:'black'}}/>
        <input
          type="text"
          placeholder="Tìm kiếm "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{background:'transparent', outline:'none',border:'none !important'}}
        />
      </div>
      <div className="user">
        <CiUser style={{color:'black',fontSize:'2rem',cursor:'pointer'}}/>
      </div>
      <div className="heart">
        <IoIosHeartEmpty style={{color:'black',fontSize:'2rem',cursor:'pointer'}}/>
      </div>
      <div className="cart">
        <Link to="/cart">
          <IoCartOutline style={{ color: 'black', fontSize: '2rem', cursor: 'pointer' }} />
        </Link>
      </div>
    </>
  );
};

export default SearchBar2;
