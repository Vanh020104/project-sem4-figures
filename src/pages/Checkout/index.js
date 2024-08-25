import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import cod from '../../assets/media/icons/cod.png';
import VNPAY from '../../assets/media/icons/vnpay.png';
function Checkout() {
    const [cartItems, setCartItems] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        country: '',
        postalCode: '',
        note: '',
        email: '',
        payment_method: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLoggedIn(false);
            return;
        }

        const userId = localStorage.getItem('userId');

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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handlePaymentMethodChange = (e) => {
        setFormData({ ...formData, payment_method: e.target.value });
    };

    const handleSubmit = () => {
        const { firstName, lastName, address, phone, country, postalCode, email, payment_method } = formData;

        if (!firstName || !lastName || !address || !phone || !country || !postalCode || !email || !payment_method) {
            toast.error('Please enter complete information and select a payment method!');
            return;
        }

        const userId = localStorage.getItem('userId');
        const orderData = {
            userId,
            ...formData,
            totalPrice: totalCost,
            cartItems: cartItems.map((item) => ({
                userId: userId,
                productId: item.id.productId,
                quantity: item.quantity,
                unitPrice: item.productPrice,
                productImage: `http://localhost:8082/api/v1/product-images/images/${item.productImages[0]}`,
                productName: item.productName,
            })),
        };

        fetch('http://localhost:8084/api/v1/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((errorData) => {
                        throw new Error(errorData.message || 'Order failed!');
                    });
                }
                return response.json();
            })
            .then((data) => {
                toast.success('Order successful!');
                localStorage.setItem('orderData', JSON.stringify(orderData));
                console.log('Success:', orderData);
                if (data.data) {
                    window.location.href = data.data;
                    // console.log('Success:', data.data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error(error.message || 'Order failed!');
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
                            <h2 className="mb-16">Checkout</h2>
                            <p style={{ color: 'white' }}>
                                Lorem ipsum dolor sit amet consectetur. Adipiscing elementum <br /> condimentum tellus
                                quis eros ridiculus quisque. Viverra non etiam in.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <section style={{ marginBottom: 100 }} className="checkout p-40">
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
                                    Please login to checkout!
                                </p>
                            ) : (
                                <div className="row">
                                    <div className="col-xl-8 mb-64 mb-xl-0">
                                        <form>
                                            <div className="mb-64">
                                                <h5 className="mb-32">Customer Info</h5>
                                                <div className="row mb-32">
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="firstName"
                                                                name="firstName"
                                                                value={formData.firstName}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="First Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                id="lastName"
                                                                name="lastName"
                                                                value={formData.lastName}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="Last Name"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="Your Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="phone"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="Phone Number"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="mb-32">Shipping Info</h5>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="country"
                                                                name="country"
                                                                value={formData.country}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="Country"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                id="postalCode"
                                                                name="postalCode"
                                                                value={formData.postalCode}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="Postal Code"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="address"
                                                                name="address"
                                                                value={formData.address}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder="Address"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="mb-16">
                                                            <textarea
                                                                type="text"
                                                                className="form-control"
                                                                id="note"
                                                                name="note"
                                                                value={formData.note}
                                                                onChange={handleChange}
                                                                placeholder="Note"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="billing-checkbox">
                                                    <input type="checkbox" defaultChecked="" id="bill-address" />
                                                    <label htmlFor="bill-address" style={{ color: 'white' }}>
                                                        Billing address same as shipping address
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="">
                                                <h5 className="mb-32">Payment Selection</h5>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="payment-option mb-32 mb-md-0">
                                                            <input
                                                                type="checkbox"
                                                                name="payment_method"
                                                                id="COD"
                                                                checked={formData.payment_method === 'COD'}
                                                                value="COD"
                                                                onChange={handlePaymentMethodChange}
                                                            />
                                                            <label htmlFor="COD">
                                                                <span>Cash On Delivery</span>
                                                            </label>
                                                            <img
                                                                style={{ width: 40, marginLeft: 30 }}
                                                                src={cod}
                                                                alt="COD"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="payment-option mb-32 mb-lg-0">
                                                            <input
                                                                type="checkbox"
                                                                name="payment_method"
                                                                id="VNPAY"
                                                                checked={formData.payment_method === 'VNPAY'}
                                                                value="VNPAY"
                                                                onChange={handlePaymentMethodChange}
                                                            />
                                                            <label htmlFor="VNPAY">
                                                                <span>VNPay</span>
                                                            </label>
                                                            <img
                                                                style={{ width: 35, marginLeft: 80 }}
                                                                src={VNPAY}
                                                                alt="VNPAY"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
                                                <ul className="unstyled ordered-products mb-32">
                                                    {cartItems.map((item, index) => (
                                                        <li className="mb-16" key={index}>
                                                            <div className="p-detail">
                                                                <img
                                                                    style={{ width: 80 }}
                                                                    src={`http://localhost:8082/api/v1/product-images/images/${item.productImages[0]}`}
                                                                    alt="Product"
                                                                />
                                                                <div>
                                                                    <h6>{item.productName}</h6>
                                                                    <h6 className="medium-gray">
                                                                        Quantity: {item.quantity}
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                            <h6 className="light-gray">
                                                                ${item.quantity * item.productPrice}
                                                            </h6>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="block mb-32">
                                                <h7 className="mb-16">PROMO CODE</h7>
                                                <form
                                                    action="https://uiparadox.co.uk/public/templates/gamerx/v2/checkout.html"
                                                    className="promo-code mb-32"
                                                >
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="p-code"
                                                            name="p-code"
                                                            required
                                                            placeholder="Enter Your Code"
                                                        />
                                                        <button type="submit">APPLY</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="block mb-32">
                                                <div className="block-row mb-24">
                                                    <h6>SUBTOTAL</h6>
                                                    <h6 className="light-gray">${totalCost}</h6>
                                                </div>
                                                <div className="block-row mb-32">
                                                    <h6>PROMO CODE</h6>
                                                    <h6 className="light-gray">$5.00</h6>
                                                </div>
                                            </div>
                                            <div className="block-row mb-32">
                                                <h5>TOTAL COST</h5>
                                                <h5 className="color-primary">${totalCost}</h5>
                                            </div>
                                            <button onClick={handleSubmit} className="cus-btn primary w-100">
                                                Place Order
                                            </button>
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

export default Checkout;
