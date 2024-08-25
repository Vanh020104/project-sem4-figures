// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function MyOrder() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [orders, setOrders] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//     const userId = localStorage.getItem('userId');

//     const toggleModal = () => {
//         setIsModalOpen(!isModalOpen);
//     };

//     useEffect(() => {
//         const fetchOrders = async (page) => {
//             try {
//                 const response = await axios.post(`http://localhost:8084/api/v1/orders/user/${userId}`, {
//                     page: page,
//                     limit: 5,
//                     status: 0,
//                 });

//                 if (response.data.code === 200) {
//                     setOrders(response.data.data.content);
//                     setTotalPages(response.data.data.totalPages);
//                 } else {
//                     console.error('Failed:', response.data.message);
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         fetchOrders(currentPage);
//     }, [currentPage, userId]);

//     const getStatusStyle = (status) => {
//         switch (status) {
//             case 'CREATED':
//                 return { backgroundColor: 'green', color: 'white', padding: 7, borderRadius: 3 };
//             case 'PENDING':
//                 return { backgroundColor: 'orange', color: 'white', padding: 7, borderRadius: 3 };
//             case 'COMPLETE':
//                 return { backgroundColor: 'blue', color: 'white', padding: 7, borderRadius: 3 };
//             case 'CANCELLED':
//                 return { backgroundColor: 'red', color: 'white', padding: 7, borderRadius: 3 };
//             default:
//                 return { backgroundColor: 'gray', color: 'white', padding: 7, borderRadius: 3 };
//         }
//     };

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     return (
//         <>
//             <a href="#main-wrapper" id="backto-top" className="back-to-top">
//                 <i className="fas fa-angle-up" />
//             </a>
//             <div id="main-wrapper" className="main-wrapper overflow-hidden">
//                 <div className="page-title-banner p-64">
//                     <div className="container">
//                         <div className="content">
//                             <a className="mb-16 cus-btn dark" href="/">
//                                 <i className="fas fa-chevron-left" />
//                                 Back to Home
//                             </a>
//                             <h2 className="mb-16">My Order</h2>
//                             <p style={{ color: 'white' }}>
//                                 Lorem ipsum dolor sit amet consectetur. Adipiscing elementum <br /> condimentum tellus
//                                 quis eros ridiculus quisque. Viverra non etiam in.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="page-content">
//                     <section className="cart p-40">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-xl-12">
//                                     <div className="d-md-block d-none">
//                                         <div className="d-flex justify-content-between mb-32">
//                                             <h5 className="color-primary">MY ORDER</h5>
//                                             <h6 className="color-primary">{orders.length} ITEMS</h6>
//                                         </div>
//                                         <table className="cart-table mb-32" style={{ width: '100%' }}>
//                                             <thead>
//                                                 <tr>
//                                                     <th style={{ fontSize: 21, textAlign: 'center' }}>OrderId</th>
//                                                     <th style={{ fontSize: 21, textAlign: 'center' }}>Full Name</th>
//                                                     <th style={{ fontSize: 21, textAlign: 'center' }}>Order</th>
//                                                     <th style={{ fontSize: 21, textAlign: 'center' }}>Total</th>
//                                                     <th style={{ fontSize: 21, textAlign: 'center' }}>
//                                                         Payment method
//                                                     </th>
//                                                     <th style={{ fontSize: 21, textAlign: 'center' }}>Status</th>
//                                                     <th style={{ fontSize: 21, textAlign: 'center' }}>Action</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {orders.map((order) => (
//                                                     <tr key={order.id}>
//                                                         <td style={{ textAlign: 'center' }}>
//                                                             {order.id.substring(0, 15)}
//                                                         </td>
//                                                         <td className="pd" style={{ textAlign: 'center' }}>
//                                                             {order.firstName} {order.lastName}
//                                                         </td>
//                                                         <td style={{ textAlign: 'center' }}>
//                                                             {(() => {
//                                                                 const [date, time] = order.createdAt.split('T');
//                                                                 return (
//                                                                     <>
//                                                                         <div>{time.split('.')[0]}</div>
//                                                                         <div>{date}</div>
//                                                                     </>
//                                                                 );
//                                                             })()}
//                                                         </td>
//                                                         <td style={{ textAlign: 'center' }}>
//                                                             <span>${order.totalPrice}</span>
//                                                         </td>
//                                                         <td style={{ textAlign: 'center' }}>
//                                                             <span>VNPay</span>
//                                                         </td>
//                                                         <td style={{ textAlign: 'center' }}>
//                                                             <span style={getStatusStyle(order.status)}>
//                                                                 {order.status}
//                                                             </span>
//                                                         </td>
//                                                         <td style={{ textAlign: 'center' }}>
//                                                             <a
//                                                                 href="#"
//                                                                 style={{ color: '#3cbc1c' }}
//                                                                 onClick={toggleModal}
//                                                             >
//                                                                 <i
//                                                                     style={{ fontSize: 20 }}
//                                                                     className="fa-solid fa-calendar-week"
//                                                                 ></i>
//                                                             </a>
//                                                         </td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                         {/* <div className="pagination">
//                                             {Array.from({ length: totalPages }, (_, i) => (
//                                                 <button
//                                                     key={i + 1}
//                                                     onClick={() => handlePageChange(i + 1)}
//                                                     style={{
//                                                         margin: '0 5px',
//                                                         padding: '8px 15px',
//                                                         backgroundColor: i + 1 === currentPage ? '#3cbc1c' : '#ccc',
//                                                         color: 'white',
//                                                         border: 'none',
//                                                         borderRadius: 5,
//                                                         cursor: 'pointer',
//                                                     }}
//                                                 >
//                                                     {i + 1}
//                                                 </button>
//                                             ))}
//                                         </div> */}
//                                         <div className="pagination">
//                                             <button
//                                                 onClick={() => handlePageChange(currentPage - 1)}
//                                                 disabled={currentPage === 1}
//                                                 style={{
//                                                     margin: '0 5px',
//                                                     padding: '8px 15px',
//                                                     backgroundColor: '#3cbc1c',
//                                                     color: 'white',
//                                                     border: 'none',
//                                                     borderRadius: 5,
//                                                     cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
//                                                 }}
//                                             >
//                                                 &lt;
//                                             </button>
//                                             {Array.from({ length: totalPages }, (_, i) => {
//                                                 const page = i + 1;
//                                                 const isNearCurrentPage = Math.abs(currentPage - page) <= 1;
//                                                 if (isNearCurrentPage) {
//                                                     return (
//                                                         <button
//                                                             key={page}
//                                                             onClick={() => handlePageChange(page)}
//                                                             style={{
//                                                                 margin: '0 5px',
//                                                                 padding: '8px 15px',
//                                                                 backgroundColor:
//                                                                     page === currentPage ? '#3cbc1c' : '#ccc',
//                                                                 color: 'white',
//                                                                 border: 'none',
//                                                                 borderRadius: 5,
//                                                                 cursor: 'pointer',
//                                                             }}
//                                                         >
//                                                             {page}
//                                                         </button>
//                                                     );
//                                                 }
//                                                 return null;
//                                             })}
//                                             <button
//                                                 onClick={() => handlePageChange(currentPage + 1)}
//                                                 disabled={currentPage === totalPages}
//                                                 style={{
//                                                     margin: '0 5px',
//                                                     padding: '8px 15px',
//                                                     backgroundColor: '#3cbc1c',
//                                                     color: 'white',
//                                                     border: 'none',
//                                                     borderRadius: 5,
//                                                     cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
//                                                 }}
//                                             >
//                                                 &gt;
//                                             </button>
//                                         </div>
//                                     </div>

//                                     <h5 className="mb-64 mb-xl-0">
//                                         <a
//                                             href="/shop"
//                                             className="continue-shopping color-primary"
//                                             style={{ fontSize: 17 }}
//                                         >
//                                             <i className="fas fa-chevron-left" />
//                                             Continue Shopping
//                                         </a>
//                                     </h5>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//             {/* Modal */}
//             {isModalOpen && (
//                 <div
//                     style={{
//                         position: 'fixed',
//                         top: 0,
//                         left: 0,
//                         width: '100%',
//                         height: '100%',
//                         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <div
//                         style={{
//                             width: '80%',
//                             backgroundColor: '#333',
//                             borderRadius: 10,
//                             padding: 20,
//                         }}
//                     >
//                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                             <h2>Order Details</h2>
//                             <button onClick={toggleModal} style={{ fontSize: 20, cursor: 'pointer' }}>
//                                 X
//                             </button>
//                         </div>
//                         <table className="cart-table mb-32" style={{ width: '100%' }}>
//                             <thead>
//                                 <tr>
//                                     <th style={{ fontSize: 21, textAlign: 'center' }}>Product</th>
//                                     <th style={{ fontSize: 21, textAlign: 'center' }}>Quantity</th>
//                                     <th style={{ fontSize: 21, textAlign: 'center' }}>Price</th>
//                                     <th style={{ fontSize: 21, textAlign: 'center' }}>Total</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td style={{ textAlign: 'center' }}>Product 1</td>
//                                     <td style={{ textAlign: 'center' }}>2</td>
//                                     <td style={{ textAlign: 'center' }}>$50</td>
//                                     <td style={{ textAlign: 'center' }}>$100</td>
//                                 </tr>
//                                 {/* Thêm các hàng khác nếu cần */}
//                             </tbody>
//                         </table>
//                         <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
//                             <button
//                                 onClick={toggleModal}
//                                 style={{
//                                     padding: '10px 20px',

//                                     backgroundColor: '#3cbc1c',
//                                     color: 'white',
//                                     border: 'none',
//                                     borderRadius: 5,
//                                     cursor: 'pointer',
//                                 }}
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default MyOrder;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MyOrder() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        if (!token) {
            navigate('/login'); // Redirect to login page if not logged in
        } else {
            const fetchOrders = async (page) => {
                try {
                    const response = await axios.post(
                        `http://localhost:8084/api/v1/orders/user/${userId}`,
                        {
                            page: page,
                            limit: 5,
                            status: 0,
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`, // Include the token in the request header
                            },
                        },
                    );

                    if (response.data.code === 200) {
                        setOrders(response.data.data.content);
                        setTotalPages(response.data.data.totalPages);
                    } else {
                        console.error('Failed:', response.data.message);
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            };

            fetchOrders(currentPage);
        }
    }, [currentPage, userId, token, navigate]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'CREATED':
                return { backgroundColor: 'green', color: 'white', padding: 7, borderRadius: 3 };
            case 'PENDING':
                return { backgroundColor: 'orange', color: 'white', padding: 7, borderRadius: 3 };
            case 'COMPLETE':
                return { backgroundColor: 'blue', color: 'white', padding: 7, borderRadius: 3 };
            case 'CANCELLED':
                return { backgroundColor: 'red', color: 'white', padding: 7, borderRadius: 3 };
            default:
                return { backgroundColor: 'gray', color: 'white', padding: 7, borderRadius: 3 };
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            {/* Page content remains the same */}
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
                            <h2 className="mb-16">My Order</h2>
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
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="d-md-block d-none">
                                        <div className="d-flex justify-content-between mb-32">
                                            <h5 className="color-primary">MY ORDER</h5>
                                            <h6 className="color-primary">{orders.length} ITEMS</h6>
                                        </div>
                                        <table className="cart-table mb-32" style={{ width: '100%' }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>OrderId</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Full Name</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Order</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Total</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>
                                                        Payment method
                                                    </th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Status</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map((order) => (
                                                    <tr key={order.id}>
                                                        <td style={{ textAlign: 'center' }}>
                                                            {order.id.substring(0, 15)}
                                                        </td>
                                                        <td className="pd" style={{ textAlign: 'center' }}>
                                                            {order.firstName} {order.lastName}
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            {(() => {
                                                                const [date, time] = order.createdAt.split('T');
                                                                return (
                                                                    <>
                                                                        <div>{time.split('.')[0]}</div>
                                                                        <div>{date}</div>
                                                                    </>
                                                                );
                                                            })()}
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <span>${order.totalPrice}</span>
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <span>VNPay</span>
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <span style={getStatusStyle(order.status)}>
                                                                {order.status}
                                                            </span>
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <a
                                                                href="#"
                                                                style={{ color: '#3cbc1c' }}
                                                                onClick={toggleModal}
                                                            >
                                                                <i
                                                                    style={{ fontSize: 20 }}
                                                                    className="fa-solid fa-calendar-week"
                                                                ></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <div className="pagination">
                                            <button
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                style={{
                                                    margin: '0 5px',
                                                    padding: '8px 15px',
                                                    backgroundColor: '#3cbc1c',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: 5,
                                                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                                }}
                                            >
                                                &lt;
                                            </button>
                                            {Array.from({ length: totalPages }, (_, i) => {
                                                const page = i + 1;
                                                const isNearCurrentPage = Math.abs(currentPage - page) <= 1;
                                                if (isNearCurrentPage) {
                                                    return (
                                                        <button
                                                            key={page}
                                                            onClick={() => handlePageChange(page)}
                                                            style={{
                                                                margin: '0 5px',
                                                                padding: '8px 15px',
                                                                backgroundColor:
                                                                    page === currentPage ? '#3cbc1c' : '#ccc',
                                                                color: 'white',
                                                                border: 'none',
                                                                borderRadius: 5,
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            {page}
                                                        </button>
                                                    );
                                                }
                                                return null;
                                            })}
                                            <button
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                style={{
                                                    margin: '0 5px',
                                                    padding: '8px 15px',
                                                    backgroundColor: '#3cbc1c',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: 5,
                                                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                                }}
                                            >
                                                &gt;
                                            </button>
                                        </div>
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
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={toggleModal}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 5,
                            width: '100%',
                            zIndex: 1000,
                            margin: 200,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>Modal Title</h3>
                        <p>Modal content goes here...</p>
                        <button onClick={toggleModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default MyOrder;
