import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import image1 from '~/assets/media/products/p-1.jpg';
import image2 from '~/assets/media/products/p-2.jpg';
import image3 from '~/assets/media/products/p-3.jpg';
import image6 from '~/assets/media/users/cu-1.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails() {
    const { id } = useParams(); // Get the productId from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const orderId = Math.floor(Math.random() * 1000000).toString();
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8082/api/v1/products/${id}`);
                setProduct(response.data.data);
            } catch (error) {
                setError('Failed to fetch product details');
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleQuantityChange = (e) => {
        const newQuantity = Number(e.target.value);

        if (newQuantity > product.stockQuantity) {
            toast.error('The quantity exceeds the available stock!');
            setQuantity(product.stockQuantity); // Reset to max available quantity
        } else {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = async () => {
        if (product.stockQuantity <= 0) {
            toast.error('The product is out of stock!');
        } else if (quantity > product.stockQuantity) {
            toast.error('The quantity exceeds the available stock!');
        } else {
            try {
                const response = await axios.post('http://localhost:8081/api/v1/cart', {
                    id: {
                        userId: userId,
                        productId: product.productId,
                    },
                    quantity: quantity,
                });
                toast.success('The product has been added to the cart!');
            } catch (error) {
                console.error('error:', error.response?.data || error.message);
                toast.error('Failed to add the product to the cart!');
            }
        }
    };

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
                                            {product.images.length > 0 ? (
                                                <img
                                                    src={`http://localhost:8082/api/v1/product-images/images/${product.images[0].imageUrl}`}
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            ) : (
                                                'No Image'
                                            )}
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
                                                    value={quantity}
                                                    onChange={handleQuantityChange}
                                                    max={product.stockQuantity}
                                                />
                                            </div>
                                            <button
                                                onClick={handleAddToCart}
                                                disabled={product.stockQuantity <= 0}
                                                className="cus-btn primary"
                                            >
                                                Add to Cart <i className="fal fa-shopping-cart" />
                                            </button>

                                            <a href="#" className="cus-btn primary">
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

                        {/* feedback */}
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="reviews-sec m-40">
                                    <h3 className="mb-32">3 Comments</h3>
                                    <div className="review-box mb-32">
                                        <img src={image6} alt="" />
                                        <div className="block">
                                            <div className="top-row mb-16">
                                                <div className="info">
                                                    <h6 className="dark-gray mb-8">23, July 2023</h6>
                                                    <h5>Isabella Garcia</h5>
                                                </div>
                                            </div>
                                            <p className="mb-24">
                                                Lorem ipsum dolor sit amet consectetur. Pharetra luctus in dignissim
                                                amet. Dignissim adipiscing amet praesent nec libero ultrices ac
                                                ullamcorper. Enim mattis faucibus viverra integer vestibulum in proin.
                                                Imperdiet pellentesque nisl cursus arcu nulla massa pharetra. Tristique.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="leave-review-sec m-40">
                                    <h3 className="mb-16">Write a Review</h3>
                                    <form
                                        action="https://uiparadox.co.uk/public/templates/gamerx/v2/product-detail.html"
                                        className="form-validator"
                                    >
                                        <div className="form-group">
                                            <fieldset>
                                                <span className="star-cb-group">
                                                    <input type="radio" id="rating-5" name="rating" defaultValue={5} />
                                                    <label htmlFor="rating-5">5</label>
                                                    <input type="radio" id="rating-4" name="rating" defaultValue={4} />
                                                    <label htmlFor="rating-4">4</label>
                                                    <input type="radio" id="rating-3" name="rating" defaultValue={3} />
                                                    <label htmlFor="rating-3">3</label>
                                                    <input type="radio" id="rating-2" name="rating" defaultValue={2} />
                                                    <label htmlFor="rating-2">2</label>
                                                    <input
                                                        type="radio"
                                                        id="rating-1"
                                                        name="rating"
                                                        defaultValue={1}
                                                        defaultChecked="checked"
                                                    />
                                                    <label htmlFor="rating-1">1</label>
                                                    <input
                                                        type="radio"
                                                        id="rating-0"
                                                        name="rating"
                                                        defaultValue={0}
                                                        className="star-cb-clear"
                                                    />
                                                    <label htmlFor="rating-0">0</label>
                                                </span>
                                            </fieldset>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-30">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                        required=""
                                                        placeholder="Enter Your Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-30">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="review-email"
                                                        name="review-email"
                                                        required=""
                                                        placeholder="Enter Your Email"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-32">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="web"
                                                name="web"
                                                required=""
                                                placeholder="Give your review a title"
                                            />
                                        </div>
                                        <div className="mb-30">
                                            <textarea
                                                className="form-control"
                                                name="reply"
                                                id="reply"
                                                rows={4}
                                                placeholder="Write your review here"
                                                defaultValue={''}
                                            />
                                        </div>
                                        <button type="submit" className="b-unstyle cus-btn primary">
                                            Add a Review
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDetails;
