import React from 'react'

const SideBar = ({ categories, genders, onCategoryChange, onGenderChange, onPriceChange }) => {
  return (
    <div className="sidebar">
    <div className="filter-section">
      <h3>Categories</h3>
      {categories.map(category => (
        <div key={category.id}>
          <input
            type="checkbox"
            id={category.id}
            value={category.name}
            onChange={(e) => onCategoryChange(e.target.value)}
          />
          <label htmlFor={category.id}>{category.name}</label>
          {category.children && (
            <div className="sub-categories">
              {category.children.map(sub => (
                <div key={sub.id}>
                  <input
                    type="checkbox"
                    id={sub.id}
                    value={sub.name}
                    onChange={(e) => onCategoryChange(e.target.value)}
                  />
                  <label htmlFor={sub.id}>{sub.name}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    <div className="filter-section">
      <h3>Gender</h3>
      {genders.map(gender => (
        <div key={gender}>
          <input
            type="radio"
            id={gender}
            name="gender"
            value={gender}
            onChange={(e) => onGenderChange(e.target.value)}
          />
          <label htmlFor={gender}>{gender}</label>
        </div>
      ))}
    </div>
    <div className="filter-section">
      <h3>Price Range</h3>
      <input type="range" min="0" max="500" onChange={(e) => onPriceChange(e.target.value)} />
    </div>
  </div>
);
};

export default SideBar;