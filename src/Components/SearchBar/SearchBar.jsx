// SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        style={{background:'transparent', outline:'none',border:'none !important'}}
      />
    </div>
  );
};

export default SearchBar;