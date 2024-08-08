function Checkout() {
    return (
        <>
            <>
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
                                <h2 className="mb-16">Checkout</h2>
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
                        {/* Checkout Area Start */}
                        <section style={{ marginBottom: 100 }} className="checkout p-40">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8 mb-64 mb-xl-0">
                                        <form action="https://uiparadox.co.uk/public/templates/gamerx/v2/checkout.html">
                                            <div className="mb-64">
                                                <h5 className="mb-32">Customer Info</h5>
                                                <div className="row mb-32">
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="first-name"
                                                                name="first-name"
                                                                required=""
                                                                placeholder="First Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="last-name"
                                                                name="last-name"
                                                                required=""
                                                                placeholder="Last Name"
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
                                                                required=""
                                                                placeholder=" Your Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="phne-number"
                                                                name="phne-number"
                                                                required=""
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
                                                                required=""
                                                                placeholder="Country"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="state"
                                                                name="state"
                                                                required=""
                                                                placeholder="State"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="city"
                                                                name="city"
                                                                required=""
                                                                placeholder="City/Town"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-24">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="postal-code"
                                                                name="postal-code"
                                                                required=""
                                                                placeholder="Postal Code"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="mb-16">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="address"
                                                                name="address"
                                                                required=""
                                                                placeholder="Shipping Address"
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
                                                        <div className="payment-option mb-32 mb-lg-0 active">
                                                            <div className="icon">
                                                                <img src="assets/media/icons/cod.png" alt="" />
                                                            </div>
                                                            <h6>Cash on Delivery</h6>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="payment-option mb-32 mb-lg-0">
                                                            <div className="icon">
                                                                <img
                                                                    src="assets/media/icons/bt.png"
                                                                    alt="Bank Transfer Icon"
                                                                />
                                                            </div>
                                                            <h6>Bank Transfer</h6>
                                                            <div className="payment-list">
                                                                <ul>
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                            style={{
                                                                                color: 'white',
                                                                                padding: '0px 90px',
                                                                            }}
                                                                        >
                                                                            PayPal
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                            style={{
                                                                                color: 'white',
                                                                                padding: '0px 90px',
                                                                            }}
                                                                        >
                                                                            MoMo
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                            style={{
                                                                                color: 'white',
                                                                                padding: '0px 90px',
                                                                            }}
                                                                        >
                                                                            VN Pay
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
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
                                                    <h6>3 ITEMS</h6>
                                                    <h6 className="light-gray">$120.00</h6>
                                                </div>
                                                <ul className="unstyled ordered-products mb-32">
                                                    <li className="mb-16">
                                                        <div className="p-detail">
                                                            <img src="assets/media/products/ps-1.png" alt="" />
                                                            <div>
                                                                <h6>Gaming Headphone</h6>
                                                                <h6 className="medium-gray">Quantity: 1</h6>
                                                            </div>
                                                        </div>
                                                        <h6 className="light-gray">$20.00</h6>
                                                    </li>
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
                                                            required=""
                                                            placeholder="Enter Your Code"
                                                        />
                                                        <button type="submit">APPLY</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="block mb-32">
                                                <div className="block-row mb-24">
                                                    <h6>SUBTOTAL</h6>
                                                    <h6 className="light-gray">$120.00</h6>
                                                </div>
                                                <div className="block-row mb-32">
                                                    <h6>PROMO CODE</h6>
                                                    <h6 className="light-gray">$5.00</h6>
                                                </div>
                                            </div>
                                            <div className="block-row mb-32">
                                                <h5>TOTAL COST</h5>
                                                <h5 className="color-primary">$115.00</h5>
                                            </div>
                                            <a href="/thankyou" className="cus-btn primary w-100">
                                                Place Order
                                            </a>
                                        </div>
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

export default Checkout;
