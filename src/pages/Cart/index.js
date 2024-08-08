function Cart() {
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
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="d-md-block d-none">
                                        <div className="d-flex justify-content-between mb-32">
                                            <h5 className="color-primary">SHOPPING CART</h5>
                                            <h6 className="color-primary">3 ITEMS</h6>
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
                                                        <div className="quantity quantity-wrap">
                                                            <input
                                                                style={{ fontSize: 18 }}
                                                                className="decrement"
                                                                type="button"
                                                                defaultValue="-"
                                                            />
                                                            <input
                                                                style={{ fontSize: 18 }}
                                                                type="text"
                                                                name="quantity"
                                                                defaultValue={2}
                                                                maxLength={2}
                                                                size={1}
                                                                className="number"
                                                            />
                                                            <input
                                                                style={{ fontSize: 18 }}
                                                                className="increment"
                                                                type="button"
                                                                defaultValue="+"
                                                            />
                                                        </div>
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

                                    <h5 className="mb-64 mb-xl-0">
                                        <a
                                            href="/shop"
                                            className="continue-shopping color-primary"
                                            style={{ fontSize: 17 }}
                                        >
                                            <i className="fas fa-chevron-left" />
                                            Continue Shopping{' '}
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
                                                <h6>1 ITEMS</h6>
                                                <h6 className="light-gray">$120.00</h6>
                                            </div>
                                        </div>
                                        <div className="block mb-32">
                                            <div className="block-row mb-24">
                                                <h6>SUBTOTAL</h6>
                                                <h5 className="light-gray">$120.00</h5>
                                            </div>
                                            <div className="block-row mb-32">
                                                <h6>PROMO CODE</h6>
                                                <h5 className="light-gray">$5.00</h5>
                                            </div>
                                        </div>
                                        <div className="block-row mb-32">
                                            <h6>TOTAL COST</h6>
                                            <h5 className="color-primary">$115.00</h5>
                                        </div>
                                        <a href="/checkout" className="cus-btn primary w-100">
                                            Checkout
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

export default Cart;
