import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
function Contact() {
    const [formData, setFormData] = useState({
        username: '',
        phoneNumber: '',
        email: '',
        note: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/contact/create', formData);
            toast.success('Information has been sent successfully!');
        } catch (error) {
            toast.error('Error sending information!');
        }
    };
    return (
        <>
            <div className="page-title-banner p-64">
                <div className="container">
                    <div className="content">
                        <a className="mb-16 cus-btn dark" href="index-2.html">
                            <i className="fas fa-chevron-left" />
                            Back to Home
                        </a>
                        <h1 className="mb-16">Contact Us</h1>
                        <p style={{ color: 'white' }}>
                            Reach Out to Us for Any Questions or Support. We're Here to Help with Inquiries, Feedback,
                            or Assistance You May Need!
                        </p>
                    </div>
                </div>
            </div>
            <h3 style={{ marginLeft: 90 }} className="mb-32">
                Our Location
            </h3>
            {/* Page Start Banner Area End */}
            <div style={{ display: 'flex', paddingRight: ' 80px' }}>
                <div className="container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.1137755285004!2d105.7797142747144!3d21.02880648777806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32b842a37%3A0xe91a56573e7f9a11!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZpZXRuYW0!5e1!3m2!1sen!2s!4v1728049981465!5m2!1sen!2s"
                        width="100%"
                        height="500"
                        // style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <form onSubmit={handleSubmit} style={{ width: 600 }}>
                    <h4 style={{ color: 'white', textAlign: 'center', marginTop: '18px' }}>Contact us</h4>
                    <p style={{ color: 'white', textAlign: 'center', marginBottom: 30 }}>
                        Please fill in your information and contact us!
                    </p>
                    <div style={{ display: 'flex' }}>
                        <div className="">
                            <div className="mb-24">
                                <input
                                    style={{ height: 53 }}
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    required
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <span style={{ margin: '0 10px' }}></span>
                        <div className="">
                            <div className="mb-24">
                                <input
                                    style={{ height: 53 }}
                                    type="text"
                                    className="form-control"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    required
                                    placeholder="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-24">
                            <input
                                style={{ height: 53 }}
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                required
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="mb-24">
                            <textarea
                                style={{ height: 153 }}
                                type="text"
                                className="form-control"
                                id="note"
                                name="note"
                                required
                                placeholder="Note..."
                                value={formData.note}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="cus-btn primary w-100">
                        Sent <i style={{ fontSize: 25 }} class="fa-brands fa-galactic-senate"></i>
                    </button>
                </form>
            </div>
            {/* Main Content Start */}
            <div className="page-content">
                {/* Contact Area Start */}
                <section className="contact p-40">
                    <div className="container">
                        <h3 className="mb-32">Let's Get in Touch</h3>
                        <div className="row pb-40">
                            <div className="col-lg-4">
                                <div className="link-block mb-32 mb-lg-0">
                                    <i className="fal fa-map-marker-alt" />
                                    <h6>8A, Ton That Thuyet, Nam Tu Liem, Ha Noi.</h6>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <a href="tel:0123456789" className="link-block mb-32 mb-lg-0">
                                    <i className="fal fa-phone-alt" />
                                    <span>+1 233 898 0897</span>
                                </a>
                            </div>
                            <div className="col-lg-4">
                                <a href="mailto:info@example.com" className="link-block mb-32 mb-lg-0">
                                    <i className="fal fa-envelope" />
                                    <span>email@example.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Area End */}
            </div>
        </>
    );
}

export default Contact;
