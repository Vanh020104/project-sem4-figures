import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import image1 from '~/assets/media/products/p-1.png';
import image2 from '~/assets/media/products/p-2.png';
import image3 from '~/assets/media/products/p-3.png';

function ProductDetails() {
    const { id } = useParams(); // Get the productId from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8082/api/v1/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                setError('Failed to fetch product details');
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div id="main-wrapper" className="main-wrapper overflow-hidden">
            <div className="page-title-banner p-64">
                <div className="container">
                    <div className="content">
                        <a className="mb-16 cus-btn dark" href="/">
                            <i className="fas fa-chevron-left" /> Back to Home
                        </a>
                        <h3 className="mb-16">Product Detail</h3>
                        <p style={{ color: 'white' }}>
                            Lorem ipsum dolor sit amet consectetur. Adipiscing elementum <br /> condimentum tellus quis
                            eros ridiculus quisque. Viverra non etiam in.
                        </p>
                    </div>
                </div>
            </div>
            <div className="page-content">
                {product && (
                    <div className="container">
                        <div className="product-detail p-40">
                            <div className="row">
                                <div className="col-lg-6 mb-48 mb-lg-0">
                                    <div className="preview-slider mb-30" style={{ display: 'grid' }}>
                                        <div className="detail-img-block">
                                            <img style={{ height: 450 }} src={image1} alt="" />
                                        </div>
                                        <div style={{ display: 'flex', marginTop: 10 }}>
                                            <div className="detail-img-block">
                                                <img src={image2} alt="" />
                                            </div>
                                            <div className="detail-img-block" style={{ margin: '0 10px' }}>
                                                <img src={image3} alt="" />
                                            </div>
                                            <div className="detail-img-block">
                                                <img src={image1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="detail">
                                        <div className="rating mb-16">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <h4 className="mb-32">{product.name}</h4>
                                        <h5 className="color-primary mb-32">${(product.price / 100).toFixed(2)}</h5>
                                        <p className="medium-gray product-description mb-32">{product.description}</p>
                                        <ul className="unstyled list">
                                            <li className="mb-24">
                                                <h6 className="title">Manufacturer:</h6>
                                                <h6 className="light-gray">{product.manufacturer}</h6>
                                            </li>
                                            <li className="mb-24">
                                                <h6 className="title">Size:</h6>
                                                <h6 className="light-gray">{product.size}</h6>
                                            </li>
                                            <li className="mb-24">
                                                <h6 className="title">Weight:</h6>
                                                <h6 className="light-gray">{product.weight}</h6>
                                            </li>
                                            <li className="mb-24">
                                                <h6 className="title">Category:</h6>
                                                <h6 className="light-gray">{product.category?.categoryName}</h6>
                                            </li>
                                            <li className="mb-24">
                                                <h6 className="title">Availability:</h6>
                                                <h6 className="color-primary">
                                                    {product.stockQuantity > 0 ? 'In Stock' : 'Out of Stock'}
                                                </h6>
                                            </li>
                                        </ul>
                                        <div className="bottom-row">
                                            <h6 style={{ color: 'white' }}>Quantity</h6>
                                            <div className="quantity quantity-wrap">
                                                <input
                                                    style={{ width: 100, height: 40 }}
                                                    type="number"
                                                    name="quantity"
                                                    defaultValue={1}
                                                    className="number"
                                                />
                                            </div>
                                            <a href="cart.html" className="cus-btn primary">
                                                Add to Cart <i className="fal fa-shopping-cart" />
                                            </a>
                                            <a href="cart.html" className="cus-btn primary">
                                                Buy it Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="description p-40">
                            <h4 className="mb-32">Description</h4>
                            <p className="mb-24 medium-gray">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDetails;
