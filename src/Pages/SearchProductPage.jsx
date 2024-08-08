import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import SecondNavbar from '../Components/SecondNavbar/SecondNavbar';
import { useParams, useNavigate } from 'react-router-dom';
import PaginationRounded from '../Components/Pagination/PaginationRounded';
import { CiSearch } from "react-icons/ci";
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { Link } from 'react-router-dom';

const SearchProductPage = () => {
    const { result: search } = useParams();
    const navigate = useNavigate();
    const { products, loading, error, fetchProductBySearch, paginationData } = useContext(ShopContext);
    const [searchTerm, setSearchTerm] = useState(search || '');
    const [tempSearchTerm, setTempSearchTerm] = useState(search || '');
    const [currentPage, setCurrentPage] = useState(1);
    const [hasError, setHasError] = useState(false);

    // Update searchTerm and tempSearchTerm when search from URL changes
    useEffect(() => {
        if (search !== searchTerm) {
            setSearchTerm(search);
            setTempSearchTerm(search);
        }
    }, [search, searchTerm]);

    // Fetch products based on searchTerm and currentPage
    useEffect(() => {
        if (searchTerm) {
            fetchProductBySearch(searchTerm, currentPage);
        }
    }, [searchTerm, fetchProductBySearch, currentPage]);

    useEffect(() => {
        if (error) {
            setHasError(true);
        } else {
            setHasError(false);
        }
    }, [error]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleInputChange = (e) => {
        setTempSearchTerm(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (tempSearchTerm !== searchTerm) {
                setSearchTerm(tempSearchTerm);
                navigate(`/catalogsearch/result/${tempSearchTerm}`);
            }
        }
    };

    return (
        <div className='shop-category search'>
            <SecondNavbar />
            <div className="shop-category-content" style={{marginTop:'2rem'}}>
                <div className="shop-category-main">
                    <div className="shop-header" style={{ textAlign: "center", marginTop: "3rem" }}>
                        <Link to='/' style={{ textDecoration: 'none', color: "#787878" }}>Trang chủ</Link><span style={{ color: "#787878" }}> / Kết quả tìm kiếm</span>
                    </div>
                    <div className="search" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4rem' }}>
                        <div className="search-bar" style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid black' }}>
                            <CiSearch style={{ fontSize: '1.3rem', color: 'black' }} />
                            <input
                                type="text"
                                placeholder="Tìm kiếm"
                                value={tempSearchTerm}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                style={{ background: 'transparent', outline: 'none', border: 'none' }}
                            />
                        </div>
                    </div>

                    <div className={`shopcategory-products ${hasError ? 'error-layout' : ''}`}>
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <div className="error-container">
                                <p style={{ textAlign: "center", color: "red", fontSize: "20px" }}>Không tìm thấy sản phẩm</p>
                                <RelatedProducts />
                            </div>
                        ) : products.length === 0 ? (
                            <p>Không tìm thấy sản phẩm</p>
                        ) : (
                            products.map((item) => (
                                <Item
                                    key={item.id}
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
            {paginationData.totalPages > 1 && (
                <PaginationRounded
                    count={paginationData.totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default SearchProductPage;
