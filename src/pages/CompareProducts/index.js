import React, { useEffect, useState } from 'react';
function CompareProducts() {
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        // Lấy danh sách sản phẩm từ localStorage
        const products = JSON.parse(localStorage.getItem('selectedProducts'));
        setSelectedProducts(products || []);
    }, []);

    const handleRemoveProduct = (productId) => {
        const updatedProducts = selectedProducts.filter((product) => product.productId !== productId);
        setSelectedProducts(updatedProducts);

        // Cập nhật lại localStorage
        localStorage.setItem('selectedProducts', JSON.stringify(updatedProducts));
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
                        <h2 className="mb-16">Compare Products</h2>
                        <p style={{ color: 'white' }}>
                            Here you can compare products with each other to find the product that suits you best.
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
                                    {/* <div className="d-flex justify-content-between mb-32">
                                        <h5 className="color-primary">Products</h5>
                                        <h6 className="color-primary">{selectedProducts.length} ITEMS</h6>
                                    </div> */}
                                    {selectedProducts.length === 0 ? (
                                        <p
                                            style={{
                                                textAlign: 'center',
                                                fontSize: '20px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                color: 'white',
                                                backgroundColor: '#3cbc1c',
                                                width: 400,
                                                margin: '0 auto',
                                                padding: 15,
                                            }}
                                        >
                                            No products selected for comparison.
                                        </p>
                                    ) : (
                                        <table className="cart-table mb-32" style={{ width: '100%' }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Code Product</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Product Name</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Image</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Price</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Category</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Manufacturer</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Size</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Weight</th>
                                                    <th style={{ fontSize: 21, textAlign: 'center' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {selectedProducts.map((product) => (
                                                    <tr>
                                                        <td style={{ textAlign: 'center' }}>{product.codeProduct}</td>
                                                        <td className="pd" style={{ textAlign: 'center' }}>
                                                            {product.name}
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            {product.images.length > 0 ? (
                                                                <img
                                                                    src={product.images[0].imageUrl}
                                                                    alt={product.name}
                                                                    style={{ width: 170 }}
                                                                />
                                                            ) : (
                                                                'No Image'
                                                            )}
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <span>${product.price}</span>
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <span>{product.category.categoryName}</span>
                                                        </td>
                                                        <td style={{ textAlign: 'center' }}>{product.manufacturer}</td>
                                                        <td style={{ textAlign: 'center' }}>{product.size}</td>
                                                        <td style={{ textAlign: 'center' }}>{product.weight}</td>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <i
                                                                onClick={() => handleRemoveProduct(product.productId)}
                                                                style={{
                                                                    fontSize: 25,
                                                                    color: 'red',
                                                                    cursor: 'pointer',
                                                                }}
                                                                class="fa-solid fa-trash-can"
                                                            ></i>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default CompareProducts;
