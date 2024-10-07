function Contact() {
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
            {/* Page Start Banner Area End */}
            <div>
                <div className="container">
                    <h3 className="mb-32">Our Location</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.1137755285004!2d105.7797142747144!3d21.02880648777806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32b842a37%3A0xe91a56573e7f9a11!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZpZXRuYW0!5e1!3m2!1sen!2s!4v1728049981465!5m2!1sen!2s"
                        width="100%"
                        height="650"
                        // style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
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
