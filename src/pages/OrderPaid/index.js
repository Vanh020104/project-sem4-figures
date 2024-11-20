import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function OrderPaid() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orders, setOrders] = useState([]);
    const [orderDetails, setOrderDetails] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const [orderStatus, setOrderStatus] = useState('');
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [cancelReason, setCancelReason] = useState('');

    const toggleModal = async (id) => {
        console.log('toggleModal được gọi với id:', id);
        if (!isModalOpen) {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/return_item/id/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data.code === 200) {
                    setOrderDetails(response.data.data);
                    setOrderStatus(response.data.data.status);
                    setSelectedOrderId(id);
                } else {
                    console.error('Failed:', response.data.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        if (!token) {
            navigate('/login');
        } else {
            const fetchOrders = async () => {
                try {
                    const response = await axios.get(
                        `http://localhost:8080/api/v1/return_item/user/${userId}`,

                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
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
            case 'APPROVED':
                return { backgroundColor: 'green', color: 'white', padding: 7, borderRadius: 3 };
            case 'PENDING':
                return { backgroundColor: 'orange', color: 'white', padding: 7, borderRadius: 3 };
            case 'COMPLETED':
                return { backgroundColor: 'blue', color: 'white', padding: 7, borderRadius: 3 };
            case 'REJECTED':
                return { backgroundColor: 'red', color: 'white', padding: 7, borderRadius: 3 };
            case 'REPLACEMENT_SHIPPED':
                return { backgroundColor: 'yellow', color: 'white', padding: 7, borderRadius: 3 };
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
                            <h2 className="mb-16">Order Paid</h2>
                            <p style={{ color: 'white' }}>
                                View your returned orders easily. Track status, check refund details and update
                                information anytime, anywhere.
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
                                            <h5 className="color-primary">Order Paid</h5>
                                            <h6 className="color-primary">{orders.length} ITEMS</h6>
                                        </div>
                                        <table className="cart-table mb-32" style={{ width: '100%' }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>No</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>
                                                        Quantity Returned
                                                    </th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Reason</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Status</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map((order) => (
                                                    <tr key={order.id}>
                                                        <td style={{ textAlign: 'center' }}>
                                                            {order.orderDetail.id.substring(0, 15)}
                                                        </td>
                                                        <td className="pd" style={{ textAlign: 'center' }}>
                                                            {order.quantityReturned}
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>{order.reason}</td>

                                                        <td style={{ textAlign: 'center' }}>
                                                            <span style={getStatusStyle(order.status)}>
                                                                {order.status}
                                                            </span>
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <a
                                                                href="#"
                                                                style={{ color: '#3cbc1c' }}
                                                                onClick={() => toggleModal(order.id)}
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
            {isModalOpen && orderDetails && (
                <div
                    className="modal"
                    style={{
                        position: 'fixed',

                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                >
                    <div
                        className="modal-content"
                        style={{
                            backgroundColor: '#f3f2f2',
                            padding: 40,
                            borderRadius: 8,
                            width: '90%',
                            maxWidth: '900px',
                            boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                        }}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                backgroundColor: 'transparent',
                                border: 'none',
                                fontSize: 30,
                                cursor: 'pointer',
                            }}
                        >
                            &times;
                        </button>

                        <div className="card">
                            <div className="card-body">
                                <h5 style={{ textAlign: 'center', color: 'green' }} className="card-title mb-4">
                                    Order paid Details
                                </h5>
                                <table className="table table-bordered table-striped">
                                    <tbody>
                                        <tr>
                                            <th style={{ textAlign: 'center' }}>Order Details</th>
                                            <td>{orderDetails.orderDetail.id}</td>
                                        </tr>
                                        <tr>
                                            <th style={{ textAlign: 'center' }}>Quantity Returned</th>
                                            <td>{orderDetails.quantityReturned} Quantity</td>
                                        </tr>
                                        <tr>
                                            <th style={{ textAlign: 'center' }}>Reason</th>
                                            <td>{orderDetails.reason}</td>
                                        </tr>
                                        <tr>
                                            <th style={{ textAlign: 'center' }}>Description</th>
                                            <td>{orderDetails.reasonNote}</td>
                                        </tr>
                                        <tr>
                                            <th style={{ textAlign: 'center' }}>Status</th>
                                            <td>{orderDetails.status}</td>
                                        </tr>
                                        {/* <tr>
                                            <th>Size</th>
                                            <td>a</td>
                                        </tr>
                                        <tr>
                                            <th>Weight</th>
                                            <td>1</td>
                                        </tr> */}

                                        <tr>
                                            <th style={{ textAlign: 'center' }}>Images</th>
                                            <td
                                                style={{
                                                    display: 'flex',
                                                    gap: '10px',
                                                }}
                                            >
                                                {orderDetails.images && orderDetails.images.length > 0 ? (
                                                    orderDetails.images.map((imageUrl, index) => (
                                                        <div key={index} style={{ width: '30%' }}>
                                                            <img
                                                                style={{ width: '130px' }}
                                                                src={imageUrl}
                                                                alt={`Product Image ${index + 1}`}
                                                            />
                                                        </div>
                                                    ))
                                                ) : (
                                                    <span>No images available</span>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default OrderPaid;
