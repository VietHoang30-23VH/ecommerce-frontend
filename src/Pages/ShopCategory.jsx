import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import Sidebar from '../Components/Sidebar/Sidebar';
import SecondNavbar from '../Components/SecondNavbar/SecondNavbar';
import { useParams } from 'react-router-dom';
import PaginationRounded from '../Components/Pagination/PaginationRounded';


const ShopCategory = (props) => {
    const { id,gender } = useParams();
    const { products, loading, error, fetchProductsBySubCategory, fetchProductsByGender, paginationData } = useContext(ShopContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    
   

    useEffect(() => {
        // Khi component mount hoặc currentPage thay đổi, fetch dữ liệu
        if (id) {
            fetchProductsBySubCategory(id, currentPage);
        } else {
            // Nếu bạn sử dụng fetchProductsByGender, hãy đảm bảo truyền tham số đúng
            fetchProductsByGender(gender, currentPage);
        }
    }, [id, fetchProductsBySubCategory, fetchProductsByGender, gender, currentPage]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredProducts = (products || []).filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='shop-category'>
            <SecondNavbar />
            <div className="shop-category-content">
                {/* <Sidebar /> */}
                <div className="shop-category-main">
                    <img className='shopcategory-banner' src={props.banner} alt="" />
                    <div className="shopcategory-indexSort">
                        <div className="shopcategory-sort">
                            Sort by <img src={dropdown_icon} alt="" />
                        </div>
                    </div>
                    <div className="shopcategory-products">
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error: {error.message}</p>
                        ) : filteredProducts.length === 0 ? (
                            <p>No products found</p>
                        ) : (
                            filteredProducts.map((item, i) => (
                                <Item
                                    key={i}
                                    id={item.id}
                                    name={item.name}
                                    new_price={item.price}
                                    image={item.pathImage}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
           { paginationData.totalPages > 1 && <PaginationRounded
                count={paginationData.totalPages}
                page={currentPage}
                onChange={handlePageChange}
            />} 
        </div>
    );
}

export default ShopCategory;
