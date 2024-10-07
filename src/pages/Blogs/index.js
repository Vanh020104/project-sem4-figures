import React, { useEffect, useState } from 'react';
import axios from 'axios';
import image1 from '~/assets/media/products/p-1.jpg';
import image2 from '~/assets/media/products/p-2.jpg';
import { Link } from 'react-router-dom';
function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchBlogs(page);
    }, [page]);

    const fetchBlogs = async (page) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/blogs/getAll?page=${page}&limit=9`);
            if (response.data.code === 200) {
                setBlogs(response.data.data.content);
                setTotalPages(response.data.data.totalPages);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
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
                        <h1 className="mb-16">Blogs</h1>
                        <p style={{ color: 'white' }}>
                            Lorem ipsum dolor sit amet consectetur. Adipiscing elementum <br /> condimentum tellus quis
                            eros ridiculus quisque. Viverra non etiam in.
                        </p>
                    </div>
                </div>
            </div>
            {/* Page Start Banner Area End */}
            {/* Main Content Start */}
            <div className="page-content">
                {/* Blogs Area Start */}
                <section className="p-40">
                    <div className="container">
                        <div className="top-row">
                            <div className="heading mb-0">
                                <h2 style={{ color: 'white' }}>Latest News</h2>
                            </div>
                            <div className="search-bar">
                                <form method="get">
                                    <div className="form-group has-search">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button type="submit" className="b-unstyle">
                                            <i className="fal fa-search" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            {blogs.map((blog) => (
                                <div className="col-lg-4 col-md-6">
                                    <Link to={`/blogdetails/${blog.id}`} className="blog-card mb-30">
                                        <div className="category-block">
                                            <img
                                                style={{ height: 45 }}
                                                src="assets/media/shapes/blog-vector.png"
                                                alt=""
                                            />
                                            <h6 className="c-title">{blog.author}</h6>
                                        </div>
                                        <div className="img-block">
                                            <img
                                                src={`http://localhost:8080/api/v1/blogs/blog/${blog.imageTitle}`}
                                                // src={image2}
                                                style={{ width: 330 }}
                                                alt={blog.title}
                                            />
                                            <div className="overlay" />
                                            <div className="text-block">
                                                <p style={{ fontSize: 14 }} className="light-gray mb-16">
                                                    Aug 10, 2024
                                                </p>
                                                <h6 className="title">{blog.title}</h6>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}

                            <ul className="pagination">
                                <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                                    <a
                                        style={{ backgroundColor: '#666' }}
                                        href="#"
                                        className="page-link arrow"
                                        aria-label="previous"
                                        onClick={() => handlePageClick(page - 1)}
                                    >
                                        <i style={{ color: '#3cbc1c' }} className="fa-solid fa-chevron-left"></i>
                                    </a>
                                </li>
                                {[...Array(totalPages)].map((_, index) => (
                                    <li key={index} className={`page-item ${page === index + 1 ? 'current' : ''}`}>
                                        <a href="#" className="page-link" onClick={() => handlePageClick(index + 1)}>
                                            {index + 1}
                                        </a>
                                    </li>
                                ))}
                                <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                                    <a
                                        style={{ backgroundColor: '#666' }}
                                        href="#"
                                        className="page-link arrow"
                                        aria-label="next"
                                        onClick={() => handlePageClick(page + 1)}
                                    >
                                        <i style={{ color: '#3cbc1c' }} className="fa-solid fa-chevron-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* Blogs Area End */}
            </div>
        </>
    );
}

export default Blogs;
