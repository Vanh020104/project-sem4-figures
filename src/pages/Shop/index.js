import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Gọi API khi component được mount
        fetch('http://localhost:8082/api/v1/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data.content);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>
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
                                <p style={{ color: 'white' }}>
                                    Lorem ipsum dolor sit amet consectetur. Adipiscing elementum <br /> condimentum
                                    tellus quis eros ridiculus quisque. Viverra non etiam in.
                                </p>
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
                                                    <form action="https://uiparadox.co.uk/public/templates/gamerx/v2/shop.html">
                                                        <div className="filter-block">
                                                            <h4 className="color-primary mb-32">AVAILABILITY</h4>
                                                            <ul className="unstyled list">
                                                                <li className="mb-16">
                                                                    <div className="filter-checkbox">
                                                                        <input type="checkbox" id="in-stock" />
                                                                        <label htmlFor="in-stock">In stock</label>
                                                                    </div>
                                                                    <h5 className="medium-gray">(120)</h5>
                                                                </li>
                                                                <li>
                                                                    <div className="filter-checkbox">
                                                                        <input type="checkbox" id="out-of-stock" />
                                                                        <label
                                                                            htmlFor="out-of-stock"
                                                                            style={{ color: 'white' }}
                                                                        >
                                                                            Out of stock
                                                                        </label>
                                                                    </div>
                                                                    <h5 className="medium-gray">(10)</h5>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="filter-block">
                                                            <h4 className="color-primary mb-32">PRICE</h4>
                                                            <div className="slider-track">
                                                                <div className="d-flex justify-content-between mb-4p">
                                                                    <h5 style={{ color: 'white' }}>$110</h5>
                                                                    <h5 style={{ color: 'white' }}>$799</h5>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="js-slider form-control"
                                                                    defaultValue={0}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="filter-block">
                                                            <h4 className="color-primary mb-32">categoty</h4>
                                                            <ul className="unstyled list">
                                                                <li className="mb-16">
                                                                    <div className="filter-checkbox">
                                                                        <input type="checkbox" id="Headsets" />
                                                                        <label htmlFor="Headsets">categoty 1</label>
                                                                    </div>
                                                                    <h5 className="medium-gray">(9)</h5>
                                                                </li>
                                                                <li className="mb-16">
                                                                    <div className="filter-checkbox">
                                                                        <input type="checkbox" id="Keyboards" />
                                                                        <label htmlFor="Keyboards">categoty 2 </label>
                                                                    </div>
                                                                    <h5 className="medium-gray">(8)</h5>
                                                                </li>
                                                                <li className="mb-16">
                                                                    <div className="filter-checkbox">
                                                                        <input type="checkbox" id="Monitors" />
                                                                        <label htmlFor="Monitors">categoty 3</label>
                                                                    </div>
                                                                    <h5 className="medium-gray">(5)</h5>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        {/* color */}
                                                        <div className="filter-block">
                                                            <h4 className="color-primary mb-32">BRANDS</h4>
                                                            <ul className="unstyled list colors">
                                                                <li className="mb-16">
                                                                    <label className="colors-selection">
                                                                        <input
                                                                            type="radio"
                                                                            name="color"
                                                                            defaultValue="black"
                                                                        />
                                                                        <span className="color non-selected bg-black" />{' '}
                                                                        Black
                                                                    </label>
                                                                    <h5 className="medium-gray">(15)</h5>
                                                                </li>
                                                                <li className="mb-16">
                                                                    <label className="colors-selection">
                                                                        <input
                                                                            type="radio"
                                                                            name="color"
                                                                            defaultValue="red"
                                                                        />
                                                                        <span className="color non-selected bg-red" />{' '}
                                                                        Red{' '}
                                                                    </label>
                                                                    <h5 className="medium-gray">(6)</h5>
                                                                </li>
                                                                <li className="mb-16">
                                                                    <label className="colors-selection">
                                                                        <input
                                                                            type="radio"
                                                                            name="color"
                                                                            defaultValue="grey"
                                                                        />
                                                                        <span className="color non-selected bg-medium-gray" />{' '}
                                                                        Grey{' '}
                                                                    </label>
                                                                    <h5 className="medium-gray">(7)</h5>
                                                                </li>
                                                                <li className="mb-16">
                                                                    <label className="colors-selection">
                                                                        <input
                                                                            type="radio"
                                                                            name="color"
                                                                            defaultValue="blue"
                                                                        />
                                                                        <span className="color non-selected bg-primary" />{' '}
                                                                        Green{' '}
                                                                    </label>
                                                                    <h5 className="medium-gray">(11)</h5>
                                                                </li>
                                                                <li className="mb-16">
                                                                    <label className="colors-selection">
                                                                        <input
                                                                            type="radio"
                                                                            name="color"
                                                                            defaultValue="white"
                                                                        />
                                                                        <span className="color non-selected bg-white" />{' '}
                                                                        White{' '}
                                                                    </label>
                                                                    <h5 className="medium-gray">(0)</h5>
                                                                </li>
                                                                <li>
                                                                    <label className="colors-selection">
                                                                        <input
                                                                            type="radio"
                                                                            name="color"
                                                                            defaultValue="yellow"
                                                                        />
                                                                        <span
                                                                            style={{ color: 'white' }}
                                                                            className="color non-selected bg-warning"
                                                                        />{' '}
                                                                        Yellow{' '}
                                                                    </label>
                                                                    <h5 className="medium-gray">(5)</h5>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        {/* size  */}

                                                        <div className="filter-block border-0">
                                                            <h4 className="color-primary mb-32">Sizes</h4>
                                                            <ul className="unstyled list">
                                                                <li className="mb-16">
                                                                    <div className="filter-checkbox">
                                                                        <input type="checkbox" id="S" />
                                                                        <label htmlFor="S">S</label>
                                                                    </div>
                                                                    <h5 className="medium-gray">(9)</h5>
                                                                </li>
                                                                <li className="mb-16">
                                                                    <div className="filter-checkbox">
                                                                        <input type="checkbox" id="M" />
                                                                        <label htmlFor="M">M</label>
                                                                    </div>
                                                                    <h5 className="medium-gray">(8)</h5>
                                                                </li>
                                                                <li>
                                                                    <div className="filter-checkbox">
                                                                        <input type="checkbox" id="L" />
                                                                        <label htmlFor="L" style={{ color: 'white' }}>
                                                                            L
                                                                        </label>
                                                                    </div>
                                                                    <h5 className="medium-gray">(5)</h5>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="text-center">
                                                            <button
                                                                type="submit"
                                                                className="b-unstyle cus-btn primary w-100 text-center"
                                                            >
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
                                            {products.map((product, index) => (
                                                <div key={index} className="col-xxl-4 col-sm-4" style={{ padding: 5 }}>
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
                                                                    style={{ color: '#fff', fontSize: 20 }}
                                                                />
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
                                                        <img
                                                            src="assets/media/products/p-1.png"
                                                            // src={product.images.imageUrl}
                                                            alt=""
                                                            style={{ width: 220 }}
                                                        />
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
                                                            <a
                                                                href="cart.html"
                                                                className="cus-btn primary"
                                                                style={{
                                                                    padding: 10,
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
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* end products */}

                                        <ul
                                            className="pagination"
                                            style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
                                        >
                                            <li className="page-item">
                                                <a
                                                    href="#"
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
                                                >
                                                    <i className="far fa-chevron-left" style={{ fontSize: 18 }} />
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link current"
                                                    href="#"
                                                    style={{
                                                        color: '#000',
                                                        backgroundColor: '#00ff00',
                                                        padding: '10px 15px',
                                                        margin: '0 5px',
                                                        borderRadius: 5,
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                    style={{
                                                        color: '#fff',
                                                        backgroundColor: '#444',
                                                        border: 'none',
                                                        padding: '10px 15px',
                                                        margin: '0 5px',
                                                        borderRadius: 5,
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                    style={{
                                                        color: '#fff',
                                                        backgroundColor: '#444',
                                                        border: 'none',
                                                        padding: '10px 15px',
                                                        margin: '0 5px',
                                                        borderRadius: 5,
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a
                                                    href="#"
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
                                                >
                                                    <i className="far fa-chevron-right" style={{ fontSize: 18 }} />
                                                </a>
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
        </>
    );
}

export default Shop;
