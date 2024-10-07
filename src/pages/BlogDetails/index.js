import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import image1 from '~/assets/media/products/p-1.jpg';
import image2 from '~/assets/media/products/p-2.jpg';
import image3 from '~/assets/media/products/p-3.jpg';
import image4 from '~/assets/media/products/gp-1.png';
import image5 from '~/assets/media/products/gp-4.png';
function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetchBlog(id);
    }, [id]);

    const fetchBlog = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/blogs/id/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.data.code === 200) {
                setBlog(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching blog:', error);
        }
    };

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="page-title-banner p-64">
                <div className="container">
                    <div className="content">
                        <a className="mb-16 cus-btn dark" href="/">
                            <i className="fas fa-chevron-left" />
                            Back to Home
                        </a>
                        <h2 className="mb-16">Blog Detail</h2>
                        <p style={{ color: 'white' }}>
                            View each article in detail for full content, insightful analysis, and useful information on
                            the topics you care about, <br />
                            from news to inspirational stories
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
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="detail-blog">
                                    <h4 className="mb-32">{blog.title}</h4>
                                    <ul className="unstyled info mb-32">
                                        <li>
                                            <h6>Author:</h6>
                                            <h6 className="color-primary"> {blog.author}</h6>
                                        </li>

                                        <li>
                                            <h6>Date:</h6>
                                            <h6 className="medium-gray"> 24, July 2024</h6>
                                        </li>
                                    </ul>
                                    {/* <img
                                        src={`http://localhost:8080/api/v1/blogs/blog/${blog.imageTitle}`}
                                     
                                        className="mb-32"
                                    /> */}
                                    <p className="mb-16">{blog.content}</p>

                                    <div className="quote mb-32">
                                        <h4 style={{ fontSize: 18 }} className="mb-24">
                                            "Game character models are miniature versions that simulate the images of
                                            characters in video games or anime. These models are often made from PVC,
                                            resin, or metal, with precise levels of detail and proportion down to the
                                            smallest detail, from faces, costumes to accessories."
                                        </h4>
                                        <h6 className="color-primary">@Goku</h6>
                                    </div>
                                    <p className="mb-16">
                                        Lorem ipsum dolor sit amet consectetur. Hendrerit ac bibendum sed ut sit. Est
                                        facilisi pulvinar sed lorem ut ac turpis nullam volutpat. Massa aliquam sit ac
                                        varius donec tempor. Ut in faucibus dictumst pretium. Tellus volutpat ut pretium
                                        vulputate egestas id. Id praesent faucibus ipsum integer euismod dignissim
                                        dignissim. Pulvinar aliquet faucibus convallis tortor odio.
                                    </p>
                                    <h4 style={{ fontSize: 18 }} className="mb-32">
                                        Model Creation Process
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img style={{ width: 400 }} src={image4} alt="" className="mb-32" />
                                        </div>
                                        <div className="col-md-6">
                                            <img style={{ width: 400 }} src={image5} alt="" className="mb-32" />
                                        </div>
                                    </div>
                                    <p className="mb-16">
                                        + 3D Design: Every model starts with a computer design. Digital artists will
                                        rely on images and information from the game to accurately recreate the
                                        characters.
                                    </p>
                                    <p>
                                        + Production: After the design is completed, the model will be 3D printed or
                                        cast from a mold. High-end models are often cast from resin or high-quality
                                        plastic to create detail and durability.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sidebar">
                                    <div className="sidebar-block mb-32">
                                        <h5 className="color-primary mb-32"> Articles</h5>
                                        <ul className="recent-blogs unstyled">
                                            <li className="blog-item mb-32">
                                                <div className="img-block">
                                                    <div className="overlay" />
                                                    <img style={{ width: 200 }} src={image3} alt="" />
                                                </div>
                                                <div className="text-block">
                                                    <h6 style={{ fontSize: 16 }} className="light-gray mb-16">
                                                        Aug 10, 2024
                                                    </h6>
                                                    <h5>
                                                        <a style={{ fontSize: 16 }} href="#">
                                                            Learn About Game Character Models: Attraction from the 3D
                                                            World
                                                        </a>
                                                    </h5>
                                                </div>
                                            </li>
                                            <li className="blog-item mb-32">
                                                <div className="img-block">
                                                    <div className="overlay" />
                                                    <img style={{ width: 200 }} src={image2} alt="" />
                                                </div>
                                                <div className="text-block">
                                                    <h6 style={{ fontSize: 16 }} className="light-gray mb-16">
                                                        Aug 11, 2024
                                                    </h6>
                                                    <h5>
                                                        <a style={{ fontSize: 16 }} href="#">
                                                            Explore the World of Game Models
                                                        </a>
                                                    </h5>
                                                </div>
                                            </li>
                                            <li className="blog-item">
                                                <div className="img-block">
                                                    <div className="overlay" />
                                                    <img style={{ width: 200 }} src={image1} alt="" />
                                                </div>
                                                <div className="text-block">
                                                    <h6 style={{ fontSize: 16 }} className="light-gray mb-16">
                                                        Aug 12, 2024
                                                    </h6>
                                                    <h5>
                                                        <a style={{ fontSize: 16 }} href="#">
                                                            From Passion to Work of Art
                                                        </a>
                                                    </h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-block mb-32">
                                        <h5 className="color-primary  mb-32">Tags</h5>
                                        <ul className="unstyled blog-tags">
                                            <li>#Model</li>
                                            <li>#SonGoku</li>
                                            <li>#Naruto</li>
                                            <li>#Goku </li>
                                            <li>#Vegeta</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Blogs Area End */}
            </div>
        </>
    );
}

export default BlogDetails;
