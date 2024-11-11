import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import image1 from '~/assets/media/products/p-1.jpg';
import image2 from '~/assets/media/products/p-2.jpg';
import image3 from '~/assets/media/products/p-3.jpg';
import image6 from '~/assets/media/users/cu-1.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails() {
    const { id } = useParams();
    const location = useLocation();
    const params = new URLSearchParams(location.search.replace('?', '&'));
    const orderId = params.get('orderId');
    const detailId = params.get('detailId');
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const userId = localStorage.getItem('userId');
    const [feedback, setFeedback] = useState([]);
    const [rateStar, setRateStar] = useState(5);
    const [comment, setComment] = useState('');
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/products/id/${id}`);
                setProduct(response.data.data);
                fetchFeedback(response.data.data.productId);
            } catch (error) {
                setError('Failed to fetch product details');
            } finally {
                setLoading(false);
            }
        };
        const fetchFeedback = async (productId, page, size) => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/feedback/product/${productId}`, {
                    params: {
                        page: page,
                        size: size,
                    },
                });
                const feedbackData = response.data.data.content;
                setFeedback(Array.isArray(feedbackData) ? feedbackData : []);
            } catch (error) {
                console.error('Failed to fetch feedback:', error);
            }
        };

        fetchProduct();
    }, [id]);

    const handleFeedbackSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                'http://localhost:8080/api/v1/feedback',
                {
                    rateStar: rateStar,
                    comment: comment,
                    orderDetail: {
                        id: detailId,
                        order: {
                            id: orderId,
                        },
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            toast.success('Feedback submitted successfully!');
        } catch (error) {
            console.error('Failed to submit feedback:', error);
            toast.error('Failed to submit feedback');
        }
    };

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
                const token = localStorage.getItem('token');
                const response = await axios.post(
                    'http://localhost:8080/api/v1/cart',
                    {
                        id: {
                            userId: userId,
                            productId: product.productId,
                        },
                        quantity: quantity,
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
        }
    };
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(<i key={i} className={`fas fa-star ${i <= rating ? 'filled' : ''}`} />);
        }
        return stars;
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
                                                    src={product.images[0].imageUrl}
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
                                    <h3 className="mb-32">{feedback.length} Comments</h3>
                                    {feedback.map((item) => (
                                        <div className="review-box mb-32" key={item.id}>
                                            <img src={image6} alt="" />
                                            <div className="block">
                                                <div className="top-row mb-16">
                                                    <div className="info">
                                                        <h5>{renderStars(item.rateStar)}</h5>
                                                    </div>
                                                </div>
                                                <p className="mb-24">{item.comment}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="leave-review-sec m-40">
                                    <h3 className="mb-16">Write a Review</h3>
                                    <form onSubmit={handleFeedbackSubmit}>
                                        <div className="form-group">
                                            <fieldset>
                                                <span className="star-cb-group">
                                                    <input
                                                        type="radio"
                                                        id="rating-5"
                                                        name="rating"
                                                        value={5}
                                                        checked={rateStar === 5}
                                                        onChange={() => setRateStar(5)}
                                                    />
                                                    <label htmlFor="rating-5">5</label>
                                                    <input
                                                        type="radio"
                                                        id="rating-4"
                                                        name="rating"
                                                        value={4}
                                                        checked={rateStar === 4}
                                                        onChange={() => setRateStar(4)}
                                                    />
                                                    <label htmlFor="rating-4">4</label>
                                                    <input
                                                        type="radio"
                                                        id="rating-3"
                                                        name="rating"
                                                        value={3}
                                                        checked={rateStar === 3}
                                                        onChange={() => setRateStar(3)}
                                                    />
                                                    <label htmlFor="rating-3">3</label>
                                                    <input
                                                        type="radio"
                                                        id="rating-2"
                                                        name="rating"
                                                        value={2}
                                                        checked={rateStar === 2}
                                                        onChange={() => setRateStar(2)}
                                                    />
                                                    <label htmlFor="rating-2">2</label>
                                                    <input
                                                        type="radio"
                                                        id="rating-1"
                                                        name="rating"
                                                        value={1}
                                                        checked={rateStar === 1}
                                                        onChange={() => setRateStar(1)}
                                                    />
                                                    <label htmlFor="rating-1">1</label>
                                                </span>
                                            </fieldset>
                                        </div>
                                        <div className="mb-32">
                                            <textarea
                                                className="form-control"
                                                name="comment"
                                                rows={4}
                                                placeholder="Write your review here"
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
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
