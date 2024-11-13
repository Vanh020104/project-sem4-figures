import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function Shop() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(900);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const productsPerPage = 9;
    const userId = localStorage.getItem('userId');
    const [favoriteProductId, setFavoriteProductId] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const navigate = useNavigate();
    const handleCompareClick = (product) => {
        setSelectedProducts((prevSelected) => {
            const updatedSelected = prevSelected.find((p) => p.productId === product.productId)
                ? prevSelected.filter((p) => p.productId !== product.productId) // Xóa sản phẩm
                : [...prevSelected, product]; // Thêm sản phẩm

            // Lưu vào localStorage
            localStorage.setItem('selectedProducts', JSON.stringify(updatedSelected));
            return updatedSelected;
        });
    };

    const handleNavigateToCompare = () => {
        navigate('/compareProducts', { state: { selectedProducts } }); // Điều hướng đến trang so sánh
    };
    useEffect(() => {
        // Fetch products
        const fetchProducts = async () => {
            try {
                const response = selectedCategory
                    ? await fetch(`http://localhost:8080/api/v1/products/category/${selectedCategory}`)
                    : await fetch('http://localhost:8080/api/v1/products/getAll?page=1&limit=10');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setProducts(data.data.content);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedCategory]);

    useEffect(() => {
        // Fetch categories
        fetch('http://localhost:8080/api/v1/categories/getAll?page=1&limit=15')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setCategory(data.data.content);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error.message);
            });
    }, []);

    const handleAddToCart = async (productId) => {
        try {
            const token = localStorage.getItem('accessToken');
            console.log('token:', token);
            const response = await axios.post(
                'http://localhost:8080/api/v1/cart',
                {
                    id: {
                        userId: userId,
                        productId: productId,
                    },
                    quantity: 1,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            toast.success('The product has been added to the cart!');
        } catch (error) {
            console.error('error:', error.response?.data || error.message);
            toast.error('Failed to add the product to the cart!');
        }
    };

    const handlePriceRangeChange = (event) => {
        const { name, value } = event.target;
        if (name === 'minPrice') {
            setMinPrice(value);
        } else if (name === 'maxPrice') {
            setMaxPrice(value);
        }
    };

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1);
    };
    const filteredProducts = products.filter((product) => {
        const inPriceRange = product.price >= minPrice && product.price <= maxPrice;
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return inPriceRange && matchesSearchTerm;
    });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    const handleFavoriteClick = async (productId) => {
        const token = localStorage.getItem('accessToken');
        try {
            const response = await fetch('http://localhost:8080/api/v1/white_list', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userId: userId,
                    productId: productId,
                }),
            });

            if (response.ok) {
                setFavoriteProductId(productId);
                toast.success('Added to favorites list!');
            } else {
                console.error('Failed to add to white list');
                toast.error('Failed to add to white list');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <a href="#main-wrapper" id="backto-top" className="back-to-top">
                <i className="fas fa-angle-up" />
            </a>
            {/* Main Wrapper Start */}
            <div id="main-wrapper" className="main-wrapper overflow-hidden">
                {/* Header Area Start */}

                {/* Header Area end */}
                {/* Page Start Banner Area Start */}
                <div className="page-title-banner p-64">
                    <div className="container">
                        <div className="content">
                            <a className="mb-16 cus-btn dark" href="/">
                                <i className="fas fa-chevron-left" />
                                Back to Home
                            </a>
                            <h1 className="mb-16">Shop</h1>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ color: 'white', margin: 0 }}>
                                    Explore our diverse product collection with options to suit every need. Shop easily
                                    and quickly <br /> with quality products and attractive offers.
                                </p>
                                <div style={{ position: 'relative', width: '26%' }}>
                                    <input
                                        type="text"
                                        placeholder="Search for products"
                                        style={{
                                            backgroundColor: '#e3e4e6',
                                            padding: '10px 40px 10px 10px',
                                            width: '100%',
                                            borderRadius: 5,
                                            border: 'none',
                                            margin: '10px 0',
                                        }}
                                        onChange={(event) => setSearchTerm(event.target.value)}
                                    />
                                    <i
                                        className="fas fa-search"
                                        style={{
                                            position: 'absolute',
                                            right: 15,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: '#444',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Start Banner Area End */}
                {/* Main Content Start */}
                <div className="page-content">
                    {/* Shop Area Start */}
                    <section className="p-40">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-8">
                                    <div className="sidebar mb-48 mb-lg-0">
                                        <div className="sidebar-block">
                                            <div className="filters">
                                                <h3 className="mb-32">Filters</h3>
                                                <form>
                                                    <div className="filter-block">
                                                        <h4 className="color-primary mb-32">PRICE</h4>
                                                        <div className="slider-track">
                                                            <div className="d-flex justify-content-between mb-4p">
                                                                <h5 style={{ color: 'white' }}>{minPrice}</h5>
                                                                <h5 style={{ color: 'white' }}>{maxPrice}</h5>
                                                            </div>
                                                            <input
                                                                type="range"
                                                                name="minPrice"
                                                                min="0"
                                                                max="900"
                                                                value={minPrice}
                                                                onChange={handlePriceRangeChange}
                                                                style={{
                                                                    width: '100%',
                                                                    background: 'rgb(60, 188, 28)',
                                                                    cursor: 'pointer',
                                                                }}
                                                            />
                                                            <input
                                                                type="range"
                                                                name="maxPrice"
                                                                min="0"
                                                                max="900"
                                                                value={maxPrice}
                                                                onChange={handlePriceRangeChange}
                                                                style={{
                                                                    width: '100%',
                                                                    color: 'rgb(60, 188, 28)',
                                                                    cursor: 'pointer',
                                                                }}
                                                            />
                                                            <div className="d-flex justify-content-between mt-2">
                                                                <span style={{ color: 'rgb(60, 188, 28)' }}>MIN</span>
                                                                <span style={{ color: 'rgb(60, 188, 28)' }}>MAX</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="filter-block">
                                                        <h4 className="color-primary mb-32">CATEGORY</h4>
                                                        {category.map((category) => (
                                                            <ul className="unstyled list">
                                                                <li className="mb-16" key={category.categoryId}>
                                                                    <div>
                                                                        <input
                                                                            style={{
                                                                                color: 'white',
                                                                                width: 40,
                                                                                height: 20,
                                                                                cursor: 'pointer',
                                                                            }}
                                                                            type="checkbox"
                                                                            id={category.categoryId}
                                                                            onChange={() =>
                                                                                handleCategoryChange(
                                                                                    category.categoryId,
                                                                                )
                                                                            }
                                                                        />
                                                                        <span
                                                                            style={{
                                                                                cursor: 'pointer',
                                                                                fontWeight: 600,
                                                                            }}
                                                                            htmlFor="Headsets"
                                                                        >
                                                                            {category.categoryName}
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        ))}
                                                    </div>

                                                    <div className="text-center">
                                                        <button className="b-unstyle cus-btn primary w-100 text-center">
                                                            Apply Filter
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* products */}

                                <div
                                    className="col-xl-9 col-lg-8"
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Arial, sans-serif',
                                    }}
                                >
                                    <div className="row">
                                        {currentProducts.map((product) => (
                                            <div
                                                key={product.productId}
                                                className="col-xxl-4 col-sm-4"
                                                style={{ padding: 5 }}
                                            >
                                                <div
                                                    className="product-card mb-30"
                                                    style={{
                                                        padding: 15,
                                                        borderRadius: 10,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    <div
                                                        className="top-row"
                                                        style={{
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                        }}
                                                    >
                                                        <h6
                                                            className="tag"
                                                            style={{
                                                                fontSize: 16,
                                                                padding: '2px 8px',
                                                                borderRadius: 5,
                                                            }}
                                                        >
                                                            SALE
                                                        </h6>
                                                        <div className="wishlist-icon">
                                                            <i
                                                                className="fal fa-heart"
                                                                style={{
                                                                    color:
                                                                        favoriteProductId === product.productId
                                                                            ? 'red'
                                                                            : '#fff',
                                                                    fontSize: 20,
                                                                }}
                                                                onClick={() => handleFavoriteClick(product.productId)}
                                                            />
                                                            <i
                                                                onClick={() => handleCompareClick(product)}
                                                                className={`fas ${
                                                                    selectedProducts.find(
                                                                        (p) => p.productId === product.productId,
                                                                    )
                                                                        ? 'fa-minus-circle'
                                                                        : 'fa-plus-circle'
                                                                }  secondary`}
                                                                style={{
                                                                    cursor: 'pointer',
                                                                    color: '#3cbc1c',
                                                                    fontSize: 20,
                                                                    marginLeft: 7,
                                                                }}
                                                            ></i>
                                                        </div>
                                                    </div>
                                                    <h5 className="mb-12" style={{ color: '#fff' }}>
                                                        <Link
                                                            to={`/productdetails/${product.productId}`}
                                                            style={{
                                                                textDecoration: 'none',
                                                                fontSize: 19,
                                                            }}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                    </h5>
                                                    {product.images.length > 0 ? (
                                                        <img
                                                            src={product.images[0].imageUrl}
                                                            alt={product.name}
                                                            style={{ width: 200 }}
                                                        />
                                                    ) : (
                                                        'No Image'
                                                    )}
                                                    <div className="bottom-row">
                                                        <div className="price">
                                                            <h4
                                                                style={{
                                                                    color: 'white',
                                                                    margin: '10px 0',
                                                                    fontSize: 20,
                                                                }}
                                                            >
                                                                ${product.price}
                                                            </h4>
                                                        </div>
                                                        <button
                                                            onClick={() => handleAddToCart(product.productId)}
                                                            className="cus-btn primary"
                                                            disabled={product.stockQuantity <= 0}
                                                            style={{
                                                                padding: 7,
                                                                borderRadius: 5,
                                                                textDecoration: 'none',
                                                                display: 'inline-block',
                                                                marginTop: 10,
                                                            }}
                                                        >
                                                            Add to cart
                                                            <i
                                                                className="fal fa-shopping-cart"
                                                                style={{ marginLeft: 5 }}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <ul
                                        className="pagination"
                                        style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
                                    >
                                        <li className="page-item">
                                            <button
                                                onClick={() => setCurrentPage(currentPage - 1)}
                                                className="page-link arrow"
                                                aria-label="previous"
                                                style={{
                                                    color: '#fff',
                                                    backgroundColor: '#444',
                                                    border: 'none',
                                                    padding: '10px 15px',
                                                    margin: '0 5px',
                                                    borderRadius: 5,
                                                    textDecoration: 'none',
                                                }}
                                                disabled={currentPage === 1}
                                            >
                                                <i className="fas fa-chevron-left" style={{ fontSize: 25 }} />
                                            </button>
                                        </li>
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <li key={index} className="page-item">
                                                <button
                                                    onClick={() => setCurrentPage(index + 1)}
                                                    className={`page-link ${
                                                        currentPage === index + 1 ? 'current' : ''
                                                    }`}
                                                    style={{
                                                        color: currentPage === index + 1 ? '#666' : '#fff',
                                                        backgroundColor: currentPage === index + 1 ? '#00ff00' : '#444',
                                                        border: 'none',
                                                        padding: '11px 20px',
                                                        margin: '0 5px',
                                                        borderRadius: 5,
                                                        textDecoration: 'none',
                                                        fontSize: 16,
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {index + 1}
                                                </button>
                                            </li>
                                        ))}
                                        <li className="page-item">
                                            <button
                                                onClick={() => setCurrentPage(currentPage + 1)}
                                                className="page-link arrow"
                                                aria-label="next"
                                                style={{
                                                    color: '#fff',
                                                    backgroundColor: '#444',
                                                    border: 'none',
                                                    padding: '10px 15px',
                                                    margin: '0 5px',
                                                    borderRadius: 5,
                                                    textDecoration: 'none',
                                                }}
                                                disabled={currentPage === totalPages}
                                            >
                                                <i className="fas fa-chevron-right" style={{ fontSize: 25 }} />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Shop Area End */}
                </div>
                {/* Main Content End */}
            </div>
        </>
    );
}

export default Shop;
