import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import SearchBar from '../Components/SearchBar/SearchBar';
import Sidebar from '../Components/Sidebar/Sidebar';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    categories: [],
    gender: '',
    price: 500,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(1);

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
    { 
      id: '1', name: '> Thời trang Nam', 
      children: 
        [
          {id: '1-1', name: '+ Áo nam' } , 
          {id: '1-2', name: '+ Quần nam'},
          {id: '1-3', name: '+ Đồ lót nam'},
          {id: '1-4', name: '+ Phụ kiện'},
          {id: '1-5', name: 'Thêm'},
        ] 
    },
    { 
      id: '2', name: '> Thời trang Nữ', 
      children: 
        [
          {id: '2-1', name: '+ Áo nữ' } , 
          {id: '2-2', name: '+ Quần nữ'},
          {id: '2-3', name: '+ Đồ lót nữ'},
          {id: '2-4', name: '+ Phụ kiện'},
          {id: '2-5', name: 'Thêm'},
        ] 
    },
    { 
      id: '3', name: '> Thời trang Trẻ em', 
      children: 
      [
        {id: '3-1', name: '+ Áo trẻ' } , 
        {id: '3-2', name: '+ Quần trẻ'},
        {id: '3-3', name: '+ Đồ lót trẻ'},
        {id: '3-4', name: '+ Phụ kiện'},
        {id: '3-5', name: 'Thêm'},
      ] 
  },
  ];
  const genders = ['Men', 'Women', 'Kids'];

  useEffect(() => {
    const filteredProducts = all_product.filter(item => {
      const categoryMatch = filters.categories.length ? filters.categories.includes(item.category) : true;
      const genderMatch = filters.gender ? item.gender === filters.gender : true;
      const priceMatch = item.new_price <= filters.price;
      const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && genderMatch && priceMatch && searchMatch;
    });

    setTotalPages(Math.ceil(filteredProducts.length / productsPerPage));
  }, [filters, searchTerm, all_product, productsPerPage]);

  const filteredProducts = all_product.filter(item => {
    const categoryMatch = filters.categories.length ? filters.categories.includes(item.category) : true;
    const genderMatch = filters.gender ? item.gender === filters.gender : true;
    const priceMatch = item.new_price <= filters.price;
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && genderMatch && priceMatch && searchMatch;
  });

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className='shop-category'>

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
              <span>Showing { (currentPage - 1) * productsPerPage + 1 }-{ Math.min(currentPage * productsPerPage, filteredProducts.length) }</span> out of {filteredProducts.length} products
            </p>
            <SearchBar onSearch={handleSearch} />
            <div className="shopcategory-sort">
              Sort by <img src={dropdown_icon} alt="" />
            </div>
          </div>
          <div className="shopcategory-products">
            {displayedProducts.map((item, i) => (
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
          <div className="shopcategory-loadmore">
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}> Before </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}> After </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;