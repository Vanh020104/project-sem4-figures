import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from '~/assets/media/products/p-1.jpg';
function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLoggedIn(false);
            return;
        }

        const userId = localStorage.getItem('userId');

        // Fetch the cart details
        axios
            .get(`http://localhost:8081/api/v1/cart/user/${userId}`)
            .then((response) => {
                const cartData = response.data.data;
                setCartItems(cartData);
                const total = cartData.reduce((acc, item) => acc + item.quantity * item.productPrice, 0);
                setTotalCost(total);
            })
            .catch((error) => {
                console.error('Error fetching the cart data:', error);
            });
    }, []);

    const handleDeleteItem = (productId) => {
        const userId = localStorage.getItem('userId');

        axios
            .delete('http://localhost:8081/api/v1/cart', {
                data: {
                    userId: userId,
                    productId: productId,
                },
            })
            .then((response) => {
                toast.success('Product removed from cart');
                const updatedCartItems = cartItems.filter((item) => item.id.productId !== productId);
                setCartItems(updatedCartItems);
                const total = updatedCartItems.reduce((acc, item) => acc + item.quantity * item.productPrice, 0);
                setTotalCost(total);
            })
            .catch((error) => {
                console.error('Error removing item from cart:', error);
                toast.error('Failed to remove item from cart');
            });
    };

    const handleUpdateQuantity = (userId, productId, newQuantity) => {
        axios
            .put(
                `http://localhost:8081/api/v1/cart/updateQuantity?quantity=${newQuantity}`,
                {
                    userId: userId,
                    productId: productId,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            )
            .then((response) => {
                toast.success('Quantity updated successfully');
                const updatedCartItems = cartItems.map((item) => {
                    if (item.id.productId === productId) {
                        return { ...item, quantity: newQuantity };
                    }
                    return item;
                });
                setCartItems(updatedCartItems);
                const total = updatedCartItems.reduce((acc, item) => acc + item.quantity * item.productPrice, 0);
                setTotalCost(total);
            })
            .catch((error) => {
                console.error('Error updating quantity:', error);
                toast.error('Failed to update quantity');
            });
    };

    return (
        <>
            <a href="#main-wrapper" id="backto-top" className="back-to-top">
                <i className="fas fa-angle-up" />
            </a>
            <div id="main-wrapper" className="main-wrapper overflow-hidden">
                <div className="page-title-banner p-64">
                    <div className="container">
                        <div className="content">
                            <a className="mb-16 cus-btn dark" href="/">
                                <i className="fas fa-chevron-left" />
                                Back to Home
                            </a>
                            <h2 className="mb-16">Cart</h2>
                            <p style={{ color: 'white' }}>
                                Lorem ipsum dolor sit amet consectetur. Adipiscing elementum <br /> condimentum tellus
                                quis eros ridiculus quisque. Viverra non etiam in.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <section className="cart p-40">
                        <div className="container">
                            {!isLoggedIn ? (
                                <p
                                    style={{
                                        textAlign: 'center',
                                        fontSize: '20px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'white',
                                        backgroundColor: '#3cbc1c',
                                        width: 500,
                                        margin: '0 auto',
                                        padding: 20,
                                    }}
                                >
                                    Please log in to view your cart.
                                </p>
                            ) : cartItems.length === 0 ? (
                                <p
                                    style={{
                                        textAlign: 'center',
                                        fontSize: '20px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'white',
                                        backgroundColor: '#3cbc1c',
                                        width: 600,
                                        margin: '0 auto',
                                        padding: 20,
                                    }}
                                >
                                    Your cart is empty. Add some products to your cart!
                                </p>
                            ) : (
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="d-md-block d-none">
                                            <div className="d-flex justify-content-between mb-32">
                                                <h5 className="color-primary">SHOPPING CART</h5>
                                                <h6 className="color-primary">{cartItems.length} ITEMS</h6>
                                            </div>
                                            <table className="cart-table mb-32">
                                                <thead>
                                                    <tr>
                                                        <th style={{ fontSize: 21 }}>Product Details</th>
                                                        <th style={{ fontSize: 21 }}>Quantity</th>
                                                        <th style={{ fontSize: 21 }}>Price</th>
                                                        <th style={{ fontSize: 21 }}>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartItems.map((item, index) => (
                                                        <tr key={index}>
                                                            <td className="pd">
                                                                <div className="product-detail-box">
                                                                    <div className="img-block">
                                                                        {item.productImages &&
                                                                        item.productImages.length > 0 ? (
                                                                            <img
                                                                                src={`http://localhost:8082/api/v1/product-images/images/${item.productImages[0]}`}
                                                                                // alt={item.productName}
                                                                            />
                                                                        ) : (
                                                                            <p>No image</p>
                                                                        )}
                                                                        <a
                                                                            className="cross"
                                                                            onClick={() =>
                                                                                handleDeleteItem(item.id.productId)
                                                                            }
                                                                        >
                                                                            <i className="fal fa-times" />
                                                                        </a>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="mb-16">{item.productName}</h5>
                                                                        <h6 className="color-primary">
                                                                            ${item.productPrice}
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="quantity quantity-wrap">
                                                                    <input
                                                                        style={{ width: 90, height: 35, fontSize: 19 }}
                                                                        type="number"
                                                                        name="quantity"
                                                                        value={item.quantity}
                                                                        className="number"
                                                                        min="1"
                                                                        onChange={(e) =>
                                                                            handleUpdateQuantity(
                                                                                localStorage.getItem('userId'),
                                                                                item.id.productId,
                                                                                e.target.value,
                                                                            )
                                                                        }
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <h6>${item.productPrice}</h6>
                                                            </td>
                                                            <td>
                                                                <h6>${item.quantity * item.productPrice}</h6>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        <h5 className="mb-64 mb-xl-0">
                                            <a
                                                href="/shop"
                                                className="continue-shopping color-primary"
                                                style={{ fontSize: 17 }}
                                            >
                                                <i className="fas fa-chevron-left" />
                                                Continue Shopping
                                            </a>
                                        </h5>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="order-summary-block">
                                            <div className="block mb-32">
                                                <h4 className="color-primary mb-32">Order Summary</h4>
                                            </div>
                                            <div className="block mb-32">
                                                <div className="block-row mb-32">
                                                    <h6>{cartItems.length} ITEMS</h6>
                                                    <h6 className="light-gray">${totalCost}</h6>
                                                </div>
                                            </div>
                                            <div className="block-row mb-32">
                                                <h6>TOTAL COST</h6>
                                                <h5 className="color-primary">${totalCost}</h5>
                                            </div>
                                            <a href="/checkout" className="cus-btn primary w-100">
                                                Checkout
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Cart;
