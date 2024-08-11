import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image1 from '~/assets/media/products/p-1.png';
function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const userId = localStorage.getItem('userId');

            // Fetch the order details
            axios
                .get(`http://localhost:8084/api/v1/orders/user/${userId}`)
                .then((response) => {
                    const order = response.data;
                    setTotalCost(order.totalPrice);

                    // For each orderDetail, fetch the corresponding product details
                    const productRequests = order.orderDetails.map((item) =>
                        axios
                            .get(`http://localhost:8082/api/v1/products/${item.id.productId}`)
                            .then((productResponse) => ({
                                ...item,
                                product: productResponse.data,
                            })),
                    );

                    // Wait for all product requests to complete
                    Promise.all(productRequests)
                        .then((fullCartItems) => {
                            setCartItems(fullCartItems);
                            const total = fullCartItems.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
                            setTotalCost(total);
                        })
                        .catch((error) => {
                            console.error('Error fetching product details:', error);
                        });
                })
                .catch((error) => {
                    console.error('Error fetching the cart data:', error);
                });
        }
    }, []);

    return (
        <>
            {/* Back To Top Start */}
            <a href="#main-wrapper" id="backto-top" className="back-to-top">
                <i className="fas fa-angle-up" />
            </a>
            {/* Main Wrapper Start */}
            <div id="main-wrapper" className="main-wrapper overflow-hidden">
                {/* Page Start Banner Area Start */}
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
                {/* Page Start Banner Area End */}
                {/* Main Content Start */}
                <div className="page-content">
                    {/* cart Area Start */}
                    <section className="cart p-40">
                        <div className="container">
                            {cartItems.length === 0 ? (
                                <p>Your cart is empty. Add some products to your cart!</p>
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
                                                                        <img
                                                                            src={image1}
                                                                            // src={item.product.imageUrl}
                                                                            // alt={item.product.name}
                                                                        />
                                                                        <a href="#" className="cross">
                                                                            <i className="fal fa-times" />
                                                                        </a>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="mb-16">{item.product.name}</h5>
                                                                        <h6 className="color-primary">
                                                                            {item.product.category.categoryName}{' '}
                                                                            {/* Sửa chỗ này để render tên danh mục thay vì object */}
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
                                                                        defaultValue={item.quantity}
                                                                        className="number"
                                                                        min="1"
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <h6>${item.unitPrice}</h6>
                                                            </td>
                                                            <td>
                                                                <h6>${item.quantity * item.unitPrice}</h6>
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
                    {/* Shop Area End */}
                </div>
            </div>
        </>
    );
}

export default Cart;
