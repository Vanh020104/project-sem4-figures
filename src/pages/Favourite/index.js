// function Favorite() {

//     return (
//         <>
//             <div className="page-title-banner p-64">
//                 <div className="container">
//                     <div className="content">
//                         <a className="mb-16 cus-btn dark" href="/">
//                             <i className="fas fa-chevron-left" />
//                             Back to Home
//                         </a>
//                         <h3 className="mb-16">Favourite</h3>
//                         <p style={{ color: 'white' }}>
//                             Review your favorite products. Save your favorite items for easy access and shopping later!
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             {/* Page Start Banner Area End */}
//             {/* Main Content Start */}
//             <div className="page-content">
//                 {/* Shop Area Start */}
//                 <section className="p-10">
//                     <div className="container">
//                         <div className="row">
//                             <div style={{ marginLeft: 180 }} className="col-xl-9 col-lg-8">
//                                 <div className="row">
//                                     <div className="col-xxl-4 col-sm-6">
//                                         <div className="product-card mb-30">
//                                             <div className="top-row">
//                                                 <h6 className="tag">SALE</h6>
//                                                 <div className="wishlist-icon">
//                                                     <img
//                                                         src="https://img.icons8.com/?size=100&id=DFU1kReSUccu&format=png&color=000000"
//                                                         style={{ width: 35, height: 35 }}
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <h5 className="mb-12">
//                                                 <a href="product-detail.html">Gamepad Game Controller </a>
//                                             </h5>
//                                             <img src="assets/media/products/p-1.png" alt="" />
//                                             <div className="bottom-row">
//                                                 <div className="price">
//                                                     <h4>$20.00</h4>
//                                                 </div>
//                                                 <a href="cart.html" className="cus-btn primary">
//                                                     Add to cart
//                                                     <i className="fal fa-shopping-cart" />
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <ul className="pagination">
//                                         <li className="page-item">
//                                             <a href="#" className="page-link arrow" aria-label="next">
//                                                 <i className="far fa-chevron-left" />
//                                             </a>
//                                         </li>
//                                         <li className="page-item">
//                                             <a className="page-link current" href="#">
//                                                 1
//                                             </a>
//                                         </li>
//                                         <li className="page-item">
//                                             <a className="page-link" href="#">
//                                                 2
//                                             </a>
//                                         </li>
//                                         <li className="page-item">
//                                             <a className="page-link" href="#">
//                                                 3
//                                             </a>
//                                         </li>
//                                         <li className="page-item">
//                                             <a href="#" className="page-link arrow" aria-label="next">
//                                                 <i className="far fa-chevron-right" />
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 {/* Shop Area End */}
//             </div>
//         </>
//     );
// }

// export default Favorite;
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function Favorite() {
    const [whiteList, setWhiteList] = useState([]);
    const [products, setProducts] = useState({});
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    // Fetch the white list for user 35
    useEffect(() => {
        if (!userId) return; // Ensure userId is available

        fetch(`http://localhost:8080/api/v1/white_list/user/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.code === 200) {
                    setWhiteList(data.data);
                }
            })
            .catch((error) => console.error('Error fetching white list:', error));
    }, [token]);

    // Fetch product details by productId
    useEffect(() => {
        whiteList.forEach((item) => {
            fetch(`http://localhost:8080/api/v1/products/id/${item.id.productId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((productData) => {
                    if (productData.code === 200) {
                        setProducts((prevProducts) => ({
                            ...prevProducts,
                            [item.id.productId]: productData.data,
                        }));
                    }
                })
                .catch((error) => console.error('Error fetching product details:', error));
        });
    }, [whiteList, token]);

    const handleDelete = (productId) => {
        fetch('http://localhost:8080/api/v1/white_list', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                userId: userId,
                productId: productId,
            }),
        })
            .then((response) => {
                if (response.ok) {
                    setWhiteList((prevWhiteList) => prevWhiteList.filter((item) => item.id.productId !== productId));
                    toast.success('The product has been removed from the favorites list!');
                } else {
                }
            })
            .catch((error) => console.error('Error deleting product:', error));
    };

    return (
        <>
            <div className="page-title-banner p-64">
                <div className="container">
                    <div className="content">
                        <a className="mb-16 cus-btn dark" href="/">
                            <i className="fas fa-chevron-left" />
                            Back to Home
                        </a>
                        <h3 className="mb-16">Favourite</h3>
                        <p style={{ color: 'white' }}>
                            Review your favorite products. Save your favorite items for easy access and shopping later!
                        </p>
                    </div>
                </div>
            </div>
            {/* Main Content Start */}
            <div className="page-content">
                <section className="p-10">
                    <div className="container">
                        <div className="row">
                            <div style={{ marginLeft: 180 }} className="col-xl-9 col-lg-8">
                                <div className="row">
                                    {whiteList.map((item) => {
                                        const product = products[item.id.productId];
                                        return product ? (
                                            <div key={product.productId} className="col-xxl-4 col-sm-6">
                                                <div className="product-card mb-30">
                                                    <div className="top-row">
                                                        <h8 className="tag">SALE</h8>
                                                        <div className="wishlist-icon">
                                                            <img
                                                                src="https://img.icons8.com/?size=100&id=DFU1kReSUccu&format=png&color=000000"
                                                                style={{ width: 35, height: 35 }}
                                                                onClick={() => handleDelete(product.productId)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h6 className="mb-12">
                                                        <a href={`productdetails/${product.productId}`}>
                                                            {product.name}
                                                        </a>
                                                    </h6>
                                                    <img
                                                        src={`http://localhost:8080/api/v1/product-images/imagesPost/${product.images[0]?.imageUrl}`}
                                                        alt={product.name}
                                                        style={{ width: 150 }}
                                                    />
                                                    <div className="bottom-row">
                                                        <div className="price">
                                                            <h6 style={{ color: 'white' }}>
                                                                ${product.price.toFixed(2)}
                                                            </h6>
                                                        </div>
                                                        <a
                                                            style={{ fontSize: 14 }}
                                                            href="#"
                                                            className="cus-btn primary"
                                                        >
                                                            Add to cart
                                                            <i className="fal fa-shopping-cart" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div key={item.id.productId} className="col-xxl-4 col-sm-6">
                                                <div className="product-card mb-30">
                                                    <p>Loading product details...</p>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a href="#" className="page-link arrow" aria-label="next">
                                                <i style={{ color: '#3cbc1c' }} className="fa-solid fa-chevron-left" />
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link current" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link arrow" aria-label="next">
                                                <i style={{ color: '#3cbc1c' }} className="fa-solid fa-chevron-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Favorite;
