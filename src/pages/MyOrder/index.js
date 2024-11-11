import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import image1 from '~/assets/media/products/p-1.jpg';
import { toast } from 'react-toastify';
function MyOrder() {
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

    const toggleModal = async (orderId) => {
        if (!isModalOpen) {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/orders/${orderId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data.code === 200) {
                    setOrderDetails(response.data.data.orderDetails);
                    setOrderStatus(response.data.data.status);
                    setSelectedOrderId(orderId);
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
            const fetchOrders = async (page) => {
                try {
                    const response = await axios.post(
                        `http://localhost:8080/api/v1/orders/user/${userId}`,
                        {
                            page: page,
                            limit: 5,
                            status: 0,
                        },
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
            case 'CREATED':
                return { backgroundColor: 'green', color: 'white', padding: 7, borderRadius: 3 };
            case 'PENDING':
                return { backgroundColor: 'orange', color: 'white', padding: 7, borderRadius: 3 };
            case 'COMPLETE':
                return { backgroundColor: 'blue', color: 'white', padding: 7, borderRadius: 3 };
            case 'CANCEL':
                return { backgroundColor: 'red', color: 'white', padding: 7, borderRadius: 3 };
            default:
                return { backgroundColor: 'gray', color: 'white', padding: 7, borderRadius: 3 };
        }
    };

    const cancelOrder = async () => {
        if (selectedOrderId) {
            try {
                const response = await axios.put(
                    `http://localhost:8080/api/v1/orders/changeStatus/${selectedOrderId}?status=CANCEL`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    },
                );

                if (response.data.code === 200) {
                    toast.success('Order has been cancelled successfully.');
                    setIsModalOpen(false); // Đóng modal
                    setOrders((prevOrders) =>
                        prevOrders.map((order) =>
                            order.id === selectedOrderId ? { ...order, status: 'CANCEL' } : order,
                        ),
                    );
                } else {
                    // alert('Failed to cancel the order.');
                    toast.error('Failed to cancel the order.');
                    // console.error('Error:', response.data.message);
                }
            } catch (error) {
                // console.error('Error:', error);
                // alert('There was an error cancelling your order.');
            }
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
                                View and manage your orders easily. Track status, check details and update information
                                anytime, anywhere.
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
                                                                        {/* <div>{time.split('.')[0]}</div> */}
                                                                        <div>{date}</div>
                                                                    </>
                                                                );
                                                            })()}
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <span>${order.totalPrice}</span>
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <span>{order.paymentMethod} </span>
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
                            padding: 30,
                            borderRadius: 8,
                            width: '80%',
                            maxWidth: '800px',
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
                        <h4 style={{ textAlign: 'center', color: '#3cbc1c', marginBottom: 20 }}>Order Details</h4>
                        <table className="cart-table mb-32" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={{ fontSize: 19, textAlign: 'center', color: 'black', fontWeight: 400 }}>
                                        Id
                                    </th>
                                    <th style={{ fontSize: 19, textAlign: 'center', color: 'black', fontWeight: 400 }}>
                                        Products{' '}
                                    </th>
                                    <th style={{ fontSize: 19, textAlign: 'center', color: 'black', fontWeight: 400 }}>
                                        Quantity
                                    </th>
                                    <th style={{ fontSize: 19, textAlign: 'center', color: 'black', fontWeight: 400 }}>
                                        Total
                                    </th>

                                    {orderStatus === 'COMPLETE' && (
                                        <th
                                            style={{
                                                fontSize: 21,
                                                textAlign: 'center',
                                                color: 'black',
                                                fontWeight: 400,
                                            }}
                                        >
                                            Action
                                        </th>
                                    )}
                                </tr>
                                <td colSpan="10" style={{ color: '#999', marginBottom: 20 }}>
                                    <hr style={{ color: '#999', marginBottom: 20 }} />
                                </td>
                            </thead>
                            <tbody>
                                {orderDetails.map((detail, index) => (
                                    <tr key={index} style={{ color: 'black', marginBottom: 50 }}>
                                        <td style={{ textAlign: 'center' }}>
                                            <span style={{ textAlign: 'center' }}>{detail.product.productId}</span>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <img
                                                style={{ width: 100 }}
                                                src={detail.product.images[0].imageUrl}
                                                alt={detail.product.name}
                                            />

                                            <br />
                                            {detail.product.name}
                                        </td>
                                        <td style={{ textAlign: 'center' }}>{detail.quantity}</td>

                                        <td style={{ textAlign: 'center' }}>${detail.unitPrice * detail.quantity}</td>
                                        {orderStatus === 'COMPLETE' && (
                                            <td style={{ textAlign: 'center' }}>
                                                <Link
                                                    to={`/productdetails/${detail.product.productId}?orderId=${selectedOrderId}&detailId=${detail.id}`}
                                                    style={{
                                                        color: 'white',
                                                        fontWeight: 600,
                                                        backgroundColor: '#3cbc1c',
                                                        padding: 5,
                                                        borderRadius: 3,
                                                        width: 100,
                                                    }}
                                                >
                                                    Feedback
                                                </Link>
                                                <br />
                                                <p style={{ margin: '10px 0' }}></p>
                                                <Link
                                                    to={`/return/${detail.product.productId}?detailId=${detail.id}`}
                                                    style={{
                                                        color: 'white',
                                                        fontWeight: 600,
                                                        backgroundColor: 'red',
                                                        padding: 5,
                                                        borderRadius: 3,
                                                        width: 100,
                                                    }}
                                                >
                                                    Return
                                                </Link>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {(orderStatus === 'PENDING' || orderStatus === 'CREATED') && (
                            <button
                                onClick={cancelOrder}
                                style={{
                                    width: 100,
                                    color: 'white',
                                    fontWeight: 600,
                                    backgroundColor: '#ff0000',
                                    padding: 5,
                                    borderRadius: 3,
                                    textAlign: 'center',
                                    display: 'block',
                                    margin: '0 auto',
                                }}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default MyOrder;
