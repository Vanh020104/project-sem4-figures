// import React, { useState, useEffect } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import image1 from '~/assets/media/products/p-1.jpg';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';

// function Return() {
//     const [orderDetail, setOrderDetail] = useState(null);
//     const token = localStorage.getItem('token');

//     const [selectedFiles, setSelectedFiles] = useState([]);
//     const [quantityReturned, setQuantityReturned] = useState(1);
//     const [reason, setReason] = useState('SIZE_OR_SCALE_ISSUE');
//     const [reasonNote, setReasonNote] = useState('');
//     useEffect(() => {
//         const urlParams = new URLSearchParams(window.location.search);
//         const detailId = urlParams.get('detailId');

//         if (detailId) {
//             axios
//                 .get(`http://localhost:8080/api/v1/orderDetail/id/${detailId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 })
//                 .then((response) => {
//                     if (response.data.code === 200) {
//                         setOrderDetail(response.data.data);
//                     }
//                 })
//                 .catch((error) => {
//                     console.error('Có lỗi xảy ra khi lấy chi tiết đơn hàng!', error);
//                 });
//         }
//     }, [token]);

//     const handleFileChange = (event) => {
//         setSelectedFiles(event.target.files);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (!orderDetail || !orderDetail.id) {
//             console.error('orderDetail hoặc orderDetail.id chưa được tải.');
//             return;
//         }

//         const formData = new FormData();
//         const returnItemRequest = {
//             orderDetailId: orderDetail.id,
//             quantityReturned: quantityReturned,
//             reason: reason,
//             reasonNote: reasonNote,
//         };

//         formData.append('returnItemRequest', JSON.stringify(returnItemRequest));
//         for (let i = 0; i < selectedFiles.length; i++) {
//             formData.append('files', selectedFiles[i]);
//         }
//         const token = localStorage.getItem('token');

//         axios
//             .post('http://localhost:8080/api/v1/return_item', formData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // Sử dụng backtick thay vì dấu ngoặc kép
//                     // 'Content-Type': 'multipart/form-data', // Bỏ dòng này
//                 },
//             })
//             .then((response) => {
//                 console.log(response.data);
//                 console.log(formData);
//                 toast.success('Yêu cầu trả hàng đã được gửi đi. Chúng tôi sẽ xử lý yêu cầu của bạn sớm nhất có thể.');
//             })
//             .catch((error) => {
//                 console.error('Đã xảy ra lỗi!', error);
//                 toast.error('Đã xảy ra lỗi! Vui lòng thử lại sau.');
//             });
//     };

//     if (!orderDetail || !orderDetail.product) {
//         return <div>Loading...</div>;
//     }

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
//                             <h2 className="mb-16">Return & Refund Policy</h2>
//                             <p style={{ color: 'white' }}>
//                                 Learn about our hassle-free return and refund policy. Easily return items within 30 days
//                                 for a full refund or exchange.
//                                 <br /> We're here to make your shopping experience smooth and satisfying!
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="page-content">
//                     <section style={{ marginBottom: 100 }} className="checkout p-40">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-xl-8 mb-64 mb-xl-0">
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="mb-64">
//                                             <h5 className="mb-32">Order Info</h5>
//                                             <div className="row mb-32">
//                                                 <div className="col-sm-6">
//                                                     <div className="mb-24">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control"
//                                                             id="OrderId"
//                                                             name="OrderId"
//                                                             placeholder="Order Id"
//                                                             value={orderDetail.id}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-sm-6">
//                                                     <div className="mb-24">
//                                                         <input
//                                                             type="number"
//                                                             id="quantity"
//                                                             name="quantity"
//                                                             required
//                                                             value={quantityReturned}
//                                                             onChange={(e) => setQuantityReturned(e.target.value)}
//                                                             placeholder="Quantity"
//                                                             className="form-control"
//                                                             min="1"
//                                                             max={orderDetail.returnableQuantity}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-sm-12">
//                                                     <div className="mb-24">
//                                                         <select
//                                                             className="form-control"
//                                                             id="returnReason"
//                                                             name="returnReason"
//                                                             required
//                                                         >
//                                                             <option value="" disabled selected>
//                                                                 Select a return reason
//                                                             </option>
//                                                             <option value="damaged">Damaged item</option>
//                                                             <option value="not_as_described">Not as described</option>
//                                                             <option value="wrong_item">Wrong item sent</option>
//                                                             <option value="other">Other</option>
//                                                         </select>
//                                                     </div>
//                                                 </div>

//                                                 <div className="col-sm-12">
//                                                     <div className="mb-24">
//                                                         <textarea
//                                                             value={reasonNote}
//                                                             onChange={(e) => setReasonNote(e.target.value)}
//                                                             style={{ height: 150 }}
//                                                             type="text"
//                                                             className="form-control"
//                                                             required
//                                                             placeholder="Why do you want to return the item?"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-sm-12">
//                                                     <div className="mb-24">
//                                                         <input
//                                                             type="file"
//                                                             required
//                                                             placeholder="image"
//                                                             className="form-control"
//                                                             multiple
//                                                             onChange={handleFileChange}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <button type="submit">Submit</button>
//                                     </form>
//                                 </div>
//                                 <div className="col-xl-4">
//                                     <div className="order-summary-block">
//                                         <div className="block mb-32">
//                                             <h5 className="color-primary mb-32">Product wants to return</h5>
//                                         </div>
//                                         <div className="block mb-32">
//                                             <ul className="unstyled ordered-products mb-32">
//                                                 <li className="mb-16">
//                                                     <div className="p-detail">
//                                                         {/* <img
//                                                             src={orderDetail.product.images[0].imageUrl}
//                                                             style={{ width: '80px' }}
//                                                             alt={orderDetail.product.name}
//                                                         /> */}
//                                                         {orderDetail.product.images &&
//                                                         orderDetail.product.images.length > 0 ? (
//                                                             <img
//                                                                 src={orderDetail.product.images[0].imageUrl}
//                                                                 style={{ width: '80px' }}
//                                                                 alt={orderDetail.product.name}
//                                                             />
//                                                         ) : (
//                                                             <span>Ảnh null</span> // Hiển thị "Ảnh null" khi không có ảnh
//                                                         )}

//                                                         <div>
//                                                             <h6>{orderDetail.product.name}</h6>
//                                                             <h6 className="medium-gray">
//                                                                 Quantity: {orderDetail.quantity}
//                                                             </h6>
//                                                         </div>
//                                                     </div>
//                                                     <h6 className="light-gray">${orderDetail.unitPrice}</h6>
//                                                 </li>
//                                             </ul>
//                                             <p style={{ marginBottom: 20 }}>
//                                                 Number of products that can be returned:{' '}
//                                                 {orderDetail.returnableQuantity}
//                                             </p>
//                                         </div>

//                                         <div className="block mb-32">
//                                             <div className="block-row mb-24">
//                                                 <h6>Refund amount</h6>
//                                                 <h6 className="light-gray">{orderDetail.unitPrice}$</h6>
//                                             </div>
//                                             <div className="block-row mb-32">
//                                                 <h6>Refund fee</h6>
//                                                 <h6 className="light-gray">$2.00</h6>
//                                             </div>
//                                         </div>
//                                         <div className="block-row mb-32">
//                                             <h5>Total money received</h5>
//                                             <h5 className="color-primary">${orderDetail.unitPrice - 2}.00</h5>
//                                         </div>
//                                         <button className="cus-btn primary w-100">Refund</button>
//                                     </div>
//                                 </div>
//                                 <div style={{ color: 'white' }} className="p-4 mt-4 rounded shadow-sm">
//                                     <h4 style={{ margin: '30px 0' }}>Return and Exchange Policy</h4>
//                                     <p>
//                                         We are committed to ensuring customer satisfaction with our products and
//                                         services. If you need to exchange or return an item, please read the terms below
//                                         carefully:
//                                     </p>
//                                     <ul>
//                                         <li>
//                                             Products can be exchanged or returned within 30 days from the date of
//                                             receipt.
//                                         </li>
//                                         <li>
//                                             Products must be intact, unused, and include all accessories and packaging.
//                                         </li>
//                                         <li>
//                                             Shipping costs during the return process will be borne by the customer,
//                                             unless the product is defective due to manufacturing errors.
//                                         </li>
//                                         <li>Please keep the invoice or receipt when sending the returned item.</li>
//                                     </ul>
//                                     <p>
//                                         If you have any questions, please contact us via email or hotline for timely
//                                         assistance.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Return;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Return() {
//     const [orderDetail, setOrderDetail] = useState(null);
//     const token = localStorage.getItem('token');
//     const [selectedFiles, setSelectedFiles] = useState([]);
//     const [quantityReturned, setQuantityReturned] = useState(1);
//     const [reason, setReason] = useState('SIZE_OR_SCALE_ISSUE');
//     const [reasonNote, setReasonNote] = useState('');

//     useEffect(() => {
//         const urlParams = new URLSearchParams(window.location.search);
//         const detailId = urlParams.get('detailId');

//         if (detailId) {
//             axios
//                 .get(`http://localhost:8080/api/v1/orderDetail/id/${detailId}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 })
//                 .then((response) => {
//                     if (response.data.code === 200) {
//                         setOrderDetail(response.data.data);
//                     }
//                 })
//                 .catch((error) => {
//                     console.error('Có lỗi xảy ra khi lấy chi tiết đơn hàng!', error);
//                 });
//         }
//     }, [token]);

//     const handleFileChange = (event) => {
//         setSelectedFiles(event.target.files);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         if (!orderDetail || !orderDetail.id) {
//             console.error('orderDetail hoặc orderDetail.id chưa được tải.');
//             return;
//         }

//         const formData = new FormData();
//         const returnItemRequest = {
//             orderDetailId: orderDetail.id,
//             quantityReturned,
//             reason,
//             reasonNote,
//         };
//         formData.append(
//             'returnItemRequest',
//             new Blob([JSON.stringify(returnItemRequest)], { type: 'application/json' }),
//         );

//         for (let i = 0; i < selectedFiles.length; i++) {
//             formData.append('files', selectedFiles[i]);
//         }

//         axios
//             .post('http://localhost:8080/api/v1/return_item', formData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             })
//             .then((response) => {
//                 console.log(response.data);
//                 toast.success('Yêu cầu trả hàng đã được gửi đi. Chúng tôi sẽ xử lý yêu cầu của bạn sớm nhất có thể.');
//             })
//             .catch((error) => {
//                 console.error('Đã xảy ra lỗi!', error);
//                 toast.error('Đã xảy ra lỗi! Vui lòng thử lại sau.');
//             });
//     };

//     if (!orderDetail || !orderDetail.product) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <>
//             <div id="main-wrapper" className="main-wrapper overflow-hidden">
//                 <div className="page-title-banner p-64">
//                     <div className="container">
//                         <div className="content">
//                             <h2 className="mb-16">Return & Refund Policy</h2>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="page-content">
//                     <section style={{ marginBottom: 100 }} className="checkout p-40">
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-xl-8 mb-64 mb-xl-0">
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="mb-64">
//                                             <h5 className="mb-32">Order Info</h5>
//                                             <div className="row mb-32">
//                                                 <div className="col-sm-6">
//                                                     <div className="mb-24">
//                                                         <input
//                                                             type="text"
//                                                             className="form-control"
//                                                             id="OrderId"
//                                                             name="OrderId"
//                                                             placeholder="Order Id"
//                                                             value={orderDetail.id}
//                                                             readOnly
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-sm-6">
//                                                     <div className="mb-24">
//                                                         <input
//                                                             type="number"
//                                                             id="quantity"
//                                                             name="quantity"
//                                                             required
//                                                             value={quantityReturned}
//                                                             onChange={(e) => setQuantityReturned(e.target.value)}
//                                                             placeholder="Quantity"
//                                                             className="form-control"
//                                                             min="1"
//                                                             max={orderDetail.returnableQuantity}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-sm-12">
//                                                     <div className="mb-24">
//                                                         <select
//                                                             className="form-control"
//                                                             id="returnReason"
//                                                             name="returnReason"
//                                                             required
//                                                             value={reason}
//                                                             onChange={(e) => setReason(e.target.value)}
//                                                         >
//                                                             <option value="" disabled>
//                                                                 Select a return reason
//                                                             </option>
//                                                             <option value="SIZE_OR_SCALE_ISSUE">
//                                                                 Size or scale issue
//                                                             </option>
//                                                             <option value="DAMAGED_DURING_SHIPPING">
//                                                                 Damaged during shipping
//                                                             </option>
//                                                             <option value="MISSING_PARTS_OR_ACCESSORIES">
//                                                                 Missing parts or accessories
//                                                             </option>
//                                                             <option value="INCORRECT_MODEL_OR_ITEM_SENT">
//                                                                 Incorrect model or item sent
//                                                             </option>
//                                                             <option value="PAINT_DEFECTS_OR_IMPERFECTIONS">
//                                                                 Paint defects or imperfections
//                                                             </option>
//                                                             <option value="QUALITY_NOT_AS_EXPECTED">
//                                                                 Quality not as expected
//                                                             </option>
//                                                             <option value="INCOMPLETE_SET_OR_LIMITED_EDITION_ERROR">
//                                                                 Incomplete set or limited edition error
//                                                             </option>
//                                                             <option value="RECEIVED_COUNTERFEIT_OR_KNOCKOFF">
//                                                                 Received counterfeit or knockoff
//                                                             </option>
//                                                             <option value="CHANGED_MIND">Changed mind</option>
//                                                             <option value="BETTER_DEAL_FOUND">
//                                                                 Found a better deal
//                                                             </option>
//                                                             <option value="OTHER">Other</option>
//                                                         </select>
//                                                     </div>
//                                                 </div>

//                                                 <div className="col-sm-12">
//                                                     <div className="mb-24">
//                                                         <textarea
//                                                             value={reasonNote}
//                                                             onChange={(e) => setReasonNote(e.target.value)}
//                                                             style={{ height: 150 }}
//                                                             className="form-control"
//                                                             required
//                                                             placeholder="Why do you want to return the item?"
//                                                         />
//                                                     </div>
//                                                 </div>
//                                                 <div className="col-sm-12">
//                                                     <div className="mb-24">
//                                                         <input
//                                                             type="file"
//                                                             required
//                                                             className="form-control"
//                                                             multiple
//                                                             onChange={handleFileChange}
//                                                         />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <button
//                                             style={{ width: 200, marginLeft: '37%' }}
//                                             type="submit"
//                                             className="cus-btn primary"
//                                         >
//                                             Submit
//                                         </button>
//                                     </form>
//                                 </div>
//                                 <div className="col-xl-4">
//                                     <div className="order-summary-block">
//                                         <div className="block mb-32">
//                                             <h5 className="color-primary mb-32">Product wants to return</h5>
//                                         </div>
//                                         <div className="block mb-32">
//                                             <ul className="unstyled ordered-products mb-32">
//                                                 <li className="mb-16">
//                                                     <div className="p-detail">
//                                                         {/* <img
//                                                             src={orderDetail.product.images[0].imageUrl}
//                                                             style={{ width: '80px' }}
//                                                             alt={orderDetail.product.name}
//                                                         /> */}
//                                                         {orderDetail.product.images &&
//                                                         orderDetail.product.images.length > 0 ? (
//                                                             <img
//                                                                 src={orderDetail.product.images[0].imageUrl}
//                                                                 style={{ width: '80px' }}
//                                                                 alt={orderDetail.product.name}
//                                                             />
//                                                         ) : (
//                                                             <span>Ảnh null</span> // Hiển thị "Ảnh null" khi không có ảnh
//                                                         )}

//                                                         <div>
//                                                             <h6>{orderDetail.product.name}</h6>
//                                                             <h6 className="medium-gray">
//                                                                 Quantity: {orderDetail.quantity}
//                                                             </h6>
//                                                         </div>
//                                                     </div>
//                                                     <h6 className="light-gray">${orderDetail.unitPrice}</h6>
//                                                 </li>
//                                             </ul>
//                                             <p style={{ marginBottom: 20 }}>
//                                                 Number of products that can be returned:{' '}
//                                                 {orderDetail.returnableQuantity}
//                                             </p>
//                                         </div>

//                                         <div className="block mb-32">
//                                             <div className="block-row mb-24">
//                                                 <h6>Refund amount</h6>
//                                                 <h6 className="light-gray">{orderDetail.unitPrice}$</h6>
//                                             </div>
//                                             <div className="block-row mb-32">
//                                                 <h6>Refund fee</h6>
//                                                 <h6 className="light-gray">$2.00</h6>
//                                             </div>
//                                         </div>
//                                         <div className="block-row mb-32">
//                                             <h5>Total money received</h5>
//                                             <h5 className="color-primary">${orderDetail.unitPrice - 2}.00</h5>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Return;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Return() {
    const [orderDetail, setOrderDetail] = useState(null);
    const token = localStorage.getItem('token');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [quantityReturned, setQuantityReturned] = useState(1);
    const [reason, setReason] = useState('SIZE_OR_SCALE_ISSUE');
    const [reasonNote, setReasonNote] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const detailId = urlParams.get('detailId');

        if (detailId) {
            axios
                .get(`http://localhost:8080/api/v1/orderDetail/id/${detailId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    if (response.data.code === 200) {
                        setOrderDetail(response.data.data);
                    }
                })
                .catch((error) => {
                    console.error('Có lỗi xảy ra khi lấy chi tiết đơn hàng!', error);
                });
        }
    }, [token]);

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if all fields are filled
        if (
            !orderDetail ||
            !orderDetail.id ||
            !quantityReturned ||
            !reason ||
            !reasonNote ||
            selectedFiles.length === 0
        ) {
            toast.error('Please fill out all required fields.');
            return;
        }

        const formData = new FormData();
        const returnItemRequest = {
            orderDetailId: orderDetail.id,
            quantityReturned,
            reason,
            reasonNote,
        };
        formData.append(
            'returnItemRequest',
            new Blob([JSON.stringify(returnItemRequest)], { type: 'application/json' }),
        );

        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
        }

        axios
            .post('http://localhost:8080/api/v1/return_item', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                toast.success('Return request submitted successfully. Redirecting to home...');

                // Navigate to home page after 2 seconds
                setTimeout(() => {
                    navigate('/orderPaid');
                }, 2000);
            })
            .catch((error) => {
                console.error('An error occurred!', error);
                toast.error('An error occurred! Please try again later.');
            });
    };

    if (!orderDetail || !orderDetail.product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div id="main-wrapper" className="main-wrapper overflow-hidden">
                <div className="page-title-banner p-64">
                    <div className="container">
                        <div className="content">
                            <h3 className="mb-16">Return & Refund Policy</h3>
                            <p style={{ color: 'white' }}>
                                If the product does not meet your requirements, you can return it within 7 days as long
                                as the product is in its <br /> original condition. Refunds will be processed within 14.
                                Contact us for further assistance
                            </p>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <section style={{ marginBottom: 100 }} className="checkout p-40">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 mb-64 mb-xl-0">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-64">
                                            <h5 className="mb-32">Order Info</h5>
                                            <div className="row mb-32">
                                                <div className="col-sm-6">
                                                    <div className="mb-24">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="OrderId"
                                                            name="OrderId"
                                                            placeholder="Order Id"
                                                            value={orderDetail.id}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-24">
                                                        <input
                                                            type="number"
                                                            id="quantity"
                                                            name="quantity"
                                                            value={quantityReturned}
                                                            onChange={(e) => setQuantityReturned(e.target.value)}
                                                            placeholder="Quantity"
                                                            className="form-control"
                                                            min="1"
                                                            max={orderDetail.returnableQuantity}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="mb-24">
                                                        <select
                                                            className="form-control"
                                                            id="returnReason"
                                                            name="returnReason"
                                                            value={reason}
                                                            onChange={(e) => setReason(e.target.value)}
                                                        >
                                                            <option value="" disabled>
                                                                Select a return reason
                                                            </option>
                                                            <option value="SIZE_OR_SCALE_ISSUE">
                                                                Size or scale issue
                                                            </option>
                                                            <option value="DAMAGED_DURING_SHIPPING">
                                                                Damaged during shipping
                                                            </option>
                                                            <option value="MISSING_PARTS_OR_ACCESSORIES">
                                                                Missing parts or accessories
                                                            </option>
                                                            <option value="INCORRECT_MODEL_OR_ITEM_SENT">
                                                                Incorrect model or item sent
                                                            </option>
                                                            <option value="PAINT_DEFECTS_OR_IMPERFECTIONS">
                                                                Paint defects or imperfections
                                                            </option>
                                                            <option value="QUALITY_NOT_AS_EXPECTED">
                                                                Quality not as expected
                                                            </option>
                                                            <option value="INCOMPLETE_SET_OR_LIMITED_EDITION_ERROR">
                                                                Incomplete set or limited edition error
                                                            </option>
                                                            <option value="RECEIVED_COUNTERFEIT_OR_KNOCKOFF">
                                                                Received counterfeit or knockoff
                                                            </option>
                                                            <option value="CHANGED_MIND">Changed mind</option>
                                                            <option value="BETTER_DEAL_FOUND">
                                                                Found a better deal
                                                            </option>
                                                            <option value="OTHER">Other</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-12">
                                                    <div className="mb-24">
                                                        <textarea
                                                            value={reasonNote}
                                                            onChange={(e) => setReasonNote(e.target.value)}
                                                            style={{ height: 150 }}
                                                            className="form-control"
                                                            placeholder="Why do you want to return the item?"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="mb-24">
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            multiple
                                                            onChange={handleFileChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            style={{ width: 200, marginLeft: '37%' }}
                                            type="submit"
                                            className="cus-btn primary"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                                <div className="col-xl-4">
                                    <div className="order-summary-block">
                                        <div className="block mb-32">
                                            <h5 className="color-primary mb-32">Product wants to return</h5>
                                        </div>
                                        <div className="block mb-32">
                                            <ul className="unstyled ordered-products mb-32">
                                                <li className="mb-16">
                                                    <div className="p-detail">
                                                        {orderDetail.product.images &&
                                                        orderDetail.product.images.length > 0 ? (
                                                            <img
                                                                src={orderDetail.product.images[0].imageUrl}
                                                                style={{ width: '80px' }}
                                                                alt={orderDetail.product.name}
                                                            />
                                                        ) : (
                                                            <span>Ảnh null</span>
                                                        )}

                                                        <div>
                                                            <h6>{orderDetail.product.name}</h6>
                                                            <h6 className="medium-gray">
                                                                Quantity: {orderDetail.quantity}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <h6 className="light-gray">${orderDetail.unitPrice}</h6>
                                                </li>
                                            </ul>
                                            <p style={{ marginBottom: 20 }}>
                                                Number of products that can be returned:{' '}
                                                {orderDetail.returnableQuantity}
                                            </p>
                                        </div>

                                        <div className="block mb-32">
                                            <div className="block-row mb-24">
                                                <h6>Refund amount</h6>
                                                <h6 className="light-gray">{orderDetail.unitPrice}$</h6>
                                            </div>
                                            <div className="block-row mb-32">
                                                <h6>Refund fee</h6>
                                                <h6 className="light-gray">$2.00</h6>
                                            </div>
                                        </div>
                                        <div className="block-row mb-32">
                                            <h5>Total money received</h5>
                                            <h5 className="color-primary">${orderDetail.unitPrice - 2}.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Return;
