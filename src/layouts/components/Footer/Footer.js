function Footer() {
    return (
        <>
            {/* Footer Area Start  */}
            <footer>
                <div className="image-slider pt-40">
                    <div className="img-block">
                        <img src="assets/media/images/bs-1.png" alt="" />
                    </div>
                    <div className="img-block">
                        <img src="assets/media/images/bs-2.png" alt="" />
                    </div>
                    <div className="img-block">
                        <img src="assets/media/images/bs-3.png" alt="" />
                    </div>
                    <div className="img-block">
                        <img src="assets/media/images/bs-4.png" alt="" />
                    </div>
                    <div className="img-block">
                        <img src="assets/media/images/bs-5.png" alt="" />
                    </div>
                    <div className="img-block">
                        <img src="assets/media/images/bs-6.png" alt="" />
                    </div>
                    <div className="img-block">
                        <img src="assets/media/images/bs-7.png" alt="" />
                    </div>
                    <div className="img-block">
                        <img src="assets/media/images/bs-8.png" alt="" />
                    </div>
                    <div className="img-block">
                        <img src="assets/media/images/bs-9.png" alt="" />
                    </div>
                    <div className="img-block">
                        <img src="assets/media/images/bs-10.png" alt="" />
                    </div>
                    <div className="img-block">
                        <img src="assets/media/images/bs-11.png" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="footer-main p-40">
                        <div className="row">
                            <div className="col-xl-3 col-md-7">
                                <div className="widget  mb-64 mb-xl-0 ">
                                    <a href="index-2.html" className="mb-16">
                                        <img src="assets/media/logo.png" alt="" />
                                    </a>
                                    <p className="light-gray mb-32 brand-text">
                                        Lorem ipsum dolor sit amet consectetur. Turpis quis auctor lacus varius semper
                                        pulvinar. Ut felis quam facilisi sit nisi et. Gravida eu integer in pretium.
                                    </p>
                                    <h5 className="mb-24">Subscribe Our Newsletter</h5>
                                    <form className="subscribe-letter">
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                id="newsletter-email"
                                                name="newsletter-email"
                                                required=""
                                                placeholder="Your Email"
                                            />
                                            <button type="submit">
                                                <i className="fal fa-paper-plane" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-sm-6">
                                <div className="widget  mb-64 mb-xl-0">
                                    <h5 className="mb-24">Quick Links</h5>
                                    <ul className="list unstyled">
                                        <li className="mb-8">
                                            <h6>
                                                <a href="/">Home</a>
                                            </h6>
                                        </li>
                                        <li className="mb-8">
                                            <h6>
                                                <a href="/contact">Contact us</a>
                                            </h6>
                                        </li>
                                        <li className="mb-8">
                                            <h6>
                                                <a href="/shop">Shop</a>
                                            </h6>
                                        </li>
                                        <li>
                                            <h6>
                                                <a href="/blogs">Blog</a>
                                            </h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-sm-6">
                                <div className="widget  mb-64 mb-xl-0">
                                    <h5 className="mb-24">Genres</h5>
                                    <ul className="list unstyled">
                                        <li className="mb-8">
                                            <h7>
                                                <a href="#">Son Goku</a>
                                            </h7>
                                        </li>
                                        <li className="mb-8">
                                            <h7>
                                                <a href="#">Vegeta</a>
                                            </h7>
                                        </li>
                                        <li className="mb-8">
                                            <h7>
                                                <a href="#">Naruto</a>
                                            </h7>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3">
                                <div className="widget">
                                    <h4 className="mb-24">Genres</h4>
                                    <ul className="contact-list unstyled mb-16">
                                        <li className="mb-8">
                                            <i className="fal fa-map-marker-alt" />
                                            <h6>8A, Ton That Thuyet, Nam Tu Liem, Ha Noi.</h6>
                                        </li>
                                        <li className="mb-8">
                                            <a href="tel:0123456789">
                                                <i className="fal fa-phone-alt" />
                                                <span>+1 233 898 0897</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:info@example.com">
                                                <i className="fal fa-envelope" />
                                                <span>email@example.com</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="unstyled social-icons mb-48">
                                        <li>
                                            <a href="#">
                                                <img src="assets/media/icons/Facebook.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="assets/media/icons/Twitter.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="assets/media/icons/Instagram.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="assets/media/icons/SnapChat.png" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="light-gray">
                                        ©2024 <a href="index-2.html">GamerX</a>. All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Area End  */}
        </>
    );
}

export default Footer;
