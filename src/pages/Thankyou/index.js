function Thankyou() {
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
                            <h2 className="mb-16">Thank You</h2>
                            <p style={{ color: 'white' }}>
                                Thank you for trusting and ordering our products! Your order will be delivered to you
                                soon!
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
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="d-md-block d-none">
                                        <div className="d-flex justify-content-between mb-32">
                                            <h4 className="color-primary">Thank you</h4>
                                            <h5 className="color-primary">1 ITEMS</h5>
                                        </div>
                                        <table className="cart-table mb-32">
                                            <thead>
                                                <tr>
                                                    <th style={{ fontSize: 20 }}>Product Details</th>
                                                    <th style={{ fontSize: 20 }}>Quantity</th>
                                                    <th style={{ fontSize: 20 }}>Price</th>
                                                    <th style={{ fontSize: 20 }}>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="pd">
                                                        <div className="product-detail-box">
                                                            <div className="img-block">
                                                                <img src="assets/media/products/cp-1.png" alt="" />
                                                                <a href="#" className="cross">
                                                                    <i className="fal fa-times" />
                                                                </a>
                                                            </div>
                                                            <div>
                                                                <h5 className="mb-16">
                                                                    Best Gaming
                                                                    <br /> RGB Keyboard
                                                                </h5>
                                                                <h6 className="color-primary">Gaming Accessories</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5 style={{ textAlign: 'center' }}>2</h5>
                                                    </td>
                                                    <td>
                                                        <h6>$20.00</h6>
                                                    </td>
                                                    <td>
                                                        <h6>$40.00</h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="d-md-none d-block">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="cart-item-block mb-32">
                                                    <div className="img-block">
                                                        <img src="assets/media/products/cp-1.png" alt="" />
                                                        <a href="#" className="cross">
                                                            <i className="fal fa-times" />
                                                        </a>
                                                    </div>
                                                    <h4 className="mb-16">
                                                        <a href="product-detail.html">
                                                            Best Gaming <br /> RGB Headphone
                                                        </a>
                                                    </h4>
                                                    <h6 className="color-primary mb-32">Gaming Accessories</h6>
                                                    <ul className="unstyled detail">
                                                        <li>
                                                            <h5>Price</h5>
                                                            <h5 className="medium-gray">$20.00</h5>
                                                        </li>
                                                        <li>
                                                            <h5>Quantity</h5>
                                                            <div className="quantity quantity-wrap">
                                                                <input
                                                                    className="decrement"
                                                                    type="button"
                                                                    defaultValue="-"
                                                                />
                                                                <input
                                                                    type="text"
                                                                    name="quantity"
                                                                    defaultValue={3}
                                                                    maxLength={2}
                                                                    size={1}
                                                                    className="number"
                                                                />
                                                                <input
                                                                    className="increment"
                                                                    type="button"
                                                                    defaultValue="+"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <h4>Total</h4>
                                                            <h4 className="color-primary">$60.00</h4>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="cart-item-block mb-32">
                                                    <div className="img-block">
                                                        <img src="assets/media/products/cp-3.png" alt="" />
                                                        <a href="#" className="cross">
                                                            <i className="fal fa-times" />
                                                        </a>
                                                    </div>
                                                    <h4 className="mb-16">
                                                        <a href="product-detail.html">
                                                            Best Gaming <br /> RGB Keyboard
                                                        </a>
                                                    </h4>
                                                    <h6 className="color-primary mb-32">Gaming Accessories</h6>
                                                    <ul className="unstyled detail">
                                                        <li>
                                                            <h5>Price</h5>
                                                            <h5 className="medium-gray">$20.00</h5>
                                                        </li>
                                                        <li>
                                                            <h5>Quantity</h5>
                                                            <div className="quantity quantity-wrap">
                                                                <input
                                                                    className="decrement"
                                                                    type="button"
                                                                    defaultValue="-"
                                                                />
                                                                <input
                                                                    type="text"
                                                                    name="quantity"
                                                                    defaultValue={2}
                                                                    maxLength={2}
                                                                    size={1}
                                                                    className="number"
                                                                />
                                                                <input
                                                                    className="increment"
                                                                    type="button"
                                                                    defaultValue="+"
                                                                />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <h4>Total</h4>
                                                            <h4 className="color-primary">$40.00</h4>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="order-summary-block">
                                        <div className="block mb-32">
                                            <h5 className="color-primary mb-32">Order Summary</h5>
                                        </div>
                                        <div className="block mb-32">
                                            <div className="block-row mb-32">
                                                <h7>1 ITEMS</h7>
                                                <h7 className="light-gray">$120.00</h7>
                                            </div>
                                        </div>
                                        <div className="block mb-32">
                                            <div className="block-row mb-24">
                                                <h7>SUBTOTAL</h7>
                                                <h6 className="light-gray">$120.00</h6>
                                            </div>
                                        </div>
                                        <div className="block-row mb-32">
                                            <h7>TOTAL COST</h7>
                                            <h6 className="color-primary">$115.00</h6>
                                        </div>
                                        <a href="/myorder" className="cus-btn primary w-100">
                                            Complete
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Shop Area End */}
                </div>
            </div>
        </>
    );
}

export default Thankyou;
