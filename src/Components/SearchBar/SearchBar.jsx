// SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
        style = {{
          margin:"0.5px"
        }}
      />
    </div>
  );
};

export default SearchBar;
