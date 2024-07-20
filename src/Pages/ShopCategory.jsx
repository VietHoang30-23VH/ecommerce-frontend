import React, { useContext , useState } from 'react';
import './CSS/ShopCatebpgory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import SearchBar from '../Components/SearchBar/SearchBar';
import Sidebar from '../Components/Sidebar/Sidebar';



const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); // đảm bảo rằng tên biến khớp với tên biến trong ShopContext
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    categories: [],
    gender: '',
    price: 500,
  });

  const handleCategoryChange = (category) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      categories: prevFilters.categories.includes(category)
        ? prevFilters.categories.filter(cat => cat !== category)
        : [...prevFilters.categories, category]
    }));
  };

  const handleGenderChange = (gender) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      gender
    }));
  };

  const handlePriceChange = (price) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      price
    }));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const categories = [
    { id: '1', name: 'Jackets', children: [{ id: '1-1', name: 'Winter Jackets' }] },
    { id: '2', name: 'Shirts', children: [{ id: '2-1', name: 'Casual Shirts' }] }
  ];
  const genders = ['Men', 'Women', 'Kids'];

  const filteredProducts = all_product.filter(item => {
    const categoryMatch = filters.categories.length ? filters.categories.includes(item.category) : true;
    const genderMatch = filters.gender ? item.gender === filters.gender : true;
    const priceMatch = item.new_price <= filters.price;
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && genderMatch && priceMatch && searchMatch;
  });

  return (
    <div className='shop-category'>
      <SearchBar onSearch={handleSearch} />
      <div className="shop-category-content">
        <Sidebar
          categories={categories}
          genders={genders}
          onCategoryChange={handleCategoryChange}
          onGenderChange={handleGenderChange}
          onPriceChange={handlePriceChange}
        />
        <div className="shop-category-main">
          <img className='shopcategory-banner' src={props.banner} alt="" />
          <div className="shopcategory-indexSort">
            <p>
              <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
              Sort by <img src={dropdown_icon} alt="" />
            </div>
          </div>
          <div className="shopcategory-products">
            {filteredProducts.map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
                image={item.image}
              />
            ))}
          </div>
          <div className="shopcategory-loadmore">Explore more</div>
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;