// import React, { useEffect, useState } from 'react';

// function Thankyou() {
//     const [orderData, setOrderData] = useState(null);

//     useEffect(() => {
//         const storedOrderData = localStorage.getItem('orderData');
//         if (storedOrderData) {
//             setOrderData(JSON.parse(storedOrderData));
//         }
//     }, []);

//     if (!orderData) {
//         return <p>Loading...</p>;
//     }

//     const totalItems = orderData.cartItems.length;
//     const subtotal = orderData.cartItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
//     const totalCost = orderData.totalPrice;

//     return (
//         <>
//             {/* Back To Top Start */}
//             <a href="#main-wrapper" id="backto-top" className="back-to-top">
//                 <i className="fas fa-angle-up" />
//             </a>
//             {/* Main Wrapper Start */}
//             <div id="main-wrapper" className="main-wrapper overflow-hidden">
//                 {/* Page Start Banner Area Start */}
//                 <div className="page-title-banner p-64">
//                     <div className="container">
//                         <div className="content">
//                             <a className="mb-16 cus-btn dark" href="/">
//                                 <i className="fas fa-chevron-left" />
//                                 Back to Home
//                             </a>
//                             <h2 className="mb-16">Thank You</h2>
//                             <p style={{ color: 'white' }}>
//                                 Thank you for trusting and ordering our products! Your order will be delivered to you
//                                 soon!
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Page Start Banner Area End */}
//                 {/* Main Content Start */}
//                 <div className="page-content">
//                     {/* cart Area Start */}
//                     <section className="cart p-40">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-xl-8">
//                                     {/* Desktop View */}
//                                     <div className="d-md-block d-none">
//                                         <div className="d-flex justify-content-between mb-32">
//                                             <h4 className="color-primary">Purchased order</h4>
//                                             <h5 className="color-primary">{totalItems} ITEMS</h5>
//                                         </div>
//                                         <table className="cart-table mb-32">
//                                             <thead>
//                                                 <tr>
//                                                     <th style={{ fontSize: 20 }}>Product Details</th>
//                                                     <th style={{ fontSize: 20 }}>Quantity</th>
//                                                     <th style={{ fontSize: 20 }}>Price</th>
//                                                     <th style={{ fontSize: 20 }}>Total</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {orderData.cartItems.map((item, index) => (
//                                                     <tr key={index}>
//                                                         <td className="pd">
//                                                             <div className="product-detail-box">
//                                                                 <div className="img-block">
//                                                                     <img
//                                                                         src={item.productImage}
//                                                                         // alt={item.productName}
//                                                                     />
//                                                                 </div>
//                                                                 <div>
//                                                                     <h5 className="mb-16">{item.productName}</h5>
//                                                                     <h6 className="color-primary">{item.category}</h6>
//                                                                 </div>
//                                                             </div>
//                                                         </td>
//                                                         <td>
//                                                             <h5 style={{ textAlign: 'center' }}>{item.quantity}</h5>
//                                                         </td>
//                                                         <td>
//                                                             <h6>${item.unitPrice.toFixed(2)}</h6>
//                                                         </td>
//                                                         <td>
//                                                             <h6>${(item.quantity * item.unitPrice).toFixed(2)}</h6>
//                                                         </td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                     </div>

//                                     {/* Mobile View */}
//                                     <div className="d-md-none d-block">
//                                         <div className="row">
//                                             {orderData.cartItems.map((item, index) => (
//                                                 <div className="col-sm-6" key={index}>
//                                                     <div className="cart-item-block mb-32">
//                                                         <div className="img-block">
//                                                             <img src={item.productImage} alt={item.productName} />
//                                                             <a href="#" className="cross">
//                                                                 <i className="fal fa-times" />
//                                                             </a>
//                                                         </div>
//                                                         <h4 className="mb-16">
//                                                             <a href="product-detail.html">{item.productName}</a>
//                                                         </h4>
//                                                         <h6 className="color-primary mb-32">{item.category}</h6>
//                                                         <ul className="unstyled detail">
//                                                             <li>
//                                                                 <h5>Price</h5>
//                                                                 <h5 className="medium-gray">
//                                                                     ${item.unitPrice.toFixed(2)}
//                                                                 </h5>
//                                                             </li>
//                                                             <li>
//                                                                 <h5>Quantity</h5>
//                                                                 <div className="quantity quantity-wrap">
//                                                                     <input
//                                                                         className="decrement"
//                                                                         type="button"
//                                                                         defaultValue="-"
//                                                                     />
//                                                                     <input
//                                                                         type="text"
//                                                                         name="quantity"
//                                                                         defaultValue={item.quantity}
//                                                                         maxLength={2}
//                                                                         size={1}
//                                                                         className="number"
//                                                                     />
//                                                                     <input
//                                                                         className="increment"
//                                                                         type="button"
//                                                                         defaultValue="+"
//                                                                     />
//                                                                 </div>
//                                                             </li>
//                                                             <li>
//                                                                 <h4>Total</h4>
//                                                                 <h4 className="color-primary">
//                                                                     ${(item.quantity * item.unitPrice).toFixed(2)}
//                                                                 </h4>
//                                                             </li>
//                                                         </ul>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-xl-4">
//                                     <div className="order-summary-block">
//                                         <div className="block mb-32">
//                                             <h5 className="color-primary mb-32">Order Summary</h5>
//                                         </div>
//                                         <div className="block mb-32">
//                                             <div className="block-row mb-32">
//                                                 <h7>{totalItems} ITEMS</h7>
//                                                 <h7 className="light-gray">${subtotal.toFixed(2)}</h7>
//                                             </div>
//                                         </div>
//                                         <div className="block mb-32">
//                                             <div className="block-row mb-24">
//                                                 <h7>Payment Method</h7>
//                                                 <h6 className="light-gray">${subtotal.toFixed(2)}</h6>
//                                             </div>
//                                         </div>
//                                         <div className="block-row mb-32">
//                                             <h7>TOTAL COST</h7>
//                                             <h6 className="color-primary">${totalCost.toFixed(2)}</h6>
//                                         </div>
//                                         <a href="/myorders" className="cus-btn primary w-100">
//                                             Complete
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                     {/* Shop Area End */}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Thankyou;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Thankyou() {
    const [orderData, setOrderData] = useState(null);
    const [retry, setRetry] = useState(false);
    const location = useLocation(); // Lấy URL tham số

    useEffect(() => {
        // Trích xuất tham số từ URL
        const query = new URLSearchParams(location.search);
        const vnp_ResponseCode = query.get('vnp_ResponseCode');

        // Lấy dữ liệu đơn hàng từ localStorage
        const storedOrderData = localStorage.getItem('orderData');
        if (storedOrderData) {
            setOrderData(JSON.parse(storedOrderData));
        }

        // Kiểm tra mã phản hồi và thiết lập trạng thái retry nếu cần
        if (vnp_ResponseCode) {
            if (vnp_ResponseCode !== '00') {
                setRetry(true);
            }
        } else {
            // Nếu không có vnp_ResponseCode trong URL, thiết lập retry thành false
            setRetry(false);
        }
        console.log('vnp_ResponseCode', vnp_ResponseCode);
    }, [location.search]);

    if (!orderData) {
        return <p>Loading...</p>;
    }

    const totalItems = orderData.cartItems.length;
    const subtotal = orderData.cartItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    const totalCost = orderData.totalPrice;

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
                                    {/* Desktop View */}
                                    <div className="d-md-block d-none">
                                        <div className="d-flex justify-content-between mb-32">
                                            <h4 className="color-primary">Purchased order</h4>
                                            <h5 className="color-primary">{totalItems} ITEMS</h5>
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
                                                {orderData.cartItems.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="pd">
                                                            <div className="product-detail-box">
                                                                <div className="img-block">
                                                                    <img
                                                                        src={item.productImage}
                                                                        // alt={item.productName}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <h5 className="mb-16">{item.productName}</h5>
                                                                    <h6 className="color-primary">{item.category}</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <h5 style={{ textAlign: 'center' }}>{item.quantity}</h5>
                                                        </td>
                                                        <td>
                                                            <h6>${item.unitPrice.toFixed(2)}</h6>
                                                        </td>
                                                        <td>
                                                            <h6>${(item.quantity * item.unitPrice).toFixed(2)}</h6>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Mobile View */}
                                    <div className="d-md-none d-block">
                                        <div className="row">
                                            {orderData.cartItems.map((item, index) => (
                                                <div className="col-sm-6" key={index}>
                                                    <div className="cart-item-block mb-32">
                                                        <div className="img-block">
                                                            <img src={item.productImage} alt={item.productName} />
                                                            <a href="#" className="cross">
                                                                <i className="fal fa-times" />
                                                            </a>
                                                        </div>
                                                        <h4 className="mb-16">
                                                            <a href="product-detail.html">{item.productName}</a>
                                                        </h4>
                                                        <h6 className="color-primary mb-32">{item.category}</h6>
                                                        <ul className="unstyled detail">
                                                            <li>
                                                                <h5>Price</h5>
                                                                <h5 className="medium-gray">
                                                                    ${item.unitPrice.toFixed(2)}
                                                                </h5>
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
                                                                        defaultValue={item.quantity}
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
                                                                <h4 className="color-primary">
                                                                    ${(item.quantity * item.unitPrice).toFixed(2)}
                                                                </h4>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
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
                                                <h7>{totalItems} ITEMS</h7>
                                                <h7 className="light-gray">${subtotal.toFixed(2)}</h7>
                                            </div>
                                        </div>
                                        <div className="block mb-32">
                                            <div className="block-row mb-24">
                                                <h7>Payment Method</h7>
                                                <h6 className="light-gray">${subtotal.toFixed(2)}</h6>
                                            </div>
                                        </div>
                                        <div className="block-row mb-32">
                                            <h7>TOTAL COST</h7>
                                            <h6 className="color-primary">${totalCost.toFixed(2)}</h6>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <a
                                                href="/myorders"
                                                style={{ margin: '0 10px 0 0' }}
                                                className="cus-btn primary w-100"
                                            >
                                                Complete
                                            </a>
                                            {retry && (
                                                <a
                                                    style={{
                                                        margin: '0 0 0 10px',
                                                        backgroundColor: '#e04040',
                                                    }}
                                                    href="#"
                                                    className="cus-btn primary w-100"
                                                >
                                                    Retry Payment
                                                </a>
                                            )}
                                        </div>
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
