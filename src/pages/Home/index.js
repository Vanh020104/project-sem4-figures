import image1 from '~/assets/media/products/p-1.jpg';
import image2 from '~/assets/media/products/p-2.jpg';
import image3 from '~/assets/media/products/p-3.jpg';

function Login() {
    return (
        <>
            <>
                {/* Hero Banner start */}
                <div className="hero-banner-1">
                    <div className="container">
                        <div className="content">
                            <h4 className="mb-8 color-primary">Gaming Zone</h4>
                            <h1 className="mb-24 color-white">
                                Game On - Thrilling
                                <br /> Challenges
                            </h1>
                            <h6 className="mb-48 lightest-gray">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, ex. <br /> aliquid
                                illo ipsum rem odio velit. Aspernatur.
                            </h6>
                            <div className="btn-block">
                                <a href="#" className="cus-btn primary">
                                    Join Now
                                    <i className="fas fa-chevron-right" />
                                </a>
                                <a href="#" className="cus-btn sec">
                                    Read More
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Banner End */}
                {/* Main Content Start */}
                <div className="page-content">
                    {/* Key Features Start */}
                    <section className="features p-40">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-sm-6">
                                    <div className="feature-card mb-24">
                                        <div className="content">
                                            <img className="mb-16" src="assets/media/icons/fi-1.png" alt="" />
                                            <h4 className="mb-8">Immersive Gameplay</h4>
                                            <p className="medium-gray">
                                                Lorem ipsum dolor sit amet consectetur. In blandit sit non facilisis
                                                semper amet. Aliquam lacus sed aenean consectetur.
                                            </p>
                                            <img src="assets/media/shapes/s-1.png" alt="" className="shape" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="feature-card mb-24">
                                        <div className="content">
                                            <img className="mb-16" src="assets/media/icons/fi-2.png" alt="" />
                                            <h4 className="mb-8">Engaging Storylines</h4>
                                            <p className="medium-gray">
                                                Lorem ipsum dolor sit amet consectetur. In blandit sit non facilisis
                                                semper amet. Aliquam lacus sed aenean consectetur.
                                            </p>
                                            <img src="assets/media/shapes/s-1.png" alt="" className="shape" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="feature-card mb-24">
                                        <div className="content">
                                            <img className="mb-16" src="assets/media/icons/fi-3.png" alt="" />
                                            <h4 className="mb-8">Replay Value</h4>
                                            <p className="medium-gray">
                                                Lorem ipsum dolor sit amet consectetur. In blandit sit non facilisis
                                                semper amet. Aliquam lacus sed aenean consectetur.
                                            </p>
                                            <img src="assets/media/shapes/s-1.png" alt="" className="shape" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-sm-6">
                                    <div className="feature-card">
                                        <div className="content">
                                            <img className="mb-16" src="assets/media/icons/fi-4.png" alt="" />
                                            <h4 className="mb-8">Responsive Controls</h4>
                                            <p className="medium-gray">
                                                Lorem ipsum dolor sit amet consectetur. In blandit sit non facilisis
                                                semper amet. Aliquam lacus sed aenean consectetur.
                                            </p>
                                            <img src="assets/media/shapes/s-1.png" alt="" className="shape" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Key Features End */}
                    {/* About Area Start */}
                    <section className="about p-40">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-11 mb-40 mb-lg-0">
                                    <div className="content">
                                        <h4 className="mb-16" style={{ color: 'white' }}>
                                            Immerse Yourself in the Gaming Experience
                                        </h4>
                                        <p className="medium-gray mb-16">
                                            Lorem ipsum dolor sit amet consectetur. Tristique potenti est integer
                                            egestas enim pellentesque scelerisque vitae velit. Mauris eget massa egestas
                                            diam pretium.
                                        </p>
                                        <p className="medium-gray mb-48">
                                            Lorem ipsum dolor sit amet consectetur. Mauris sit non turpis orci at
                                            molestie. Ut nunc nec a maecenas augue ut mauris.
                                        </p>
                                        <a href="about.html" className="cus-btn primary">
                                            Read More
                                            <i className="far fa-book-open" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-40 mb-lg-0">
                                    <div className="text-center">
                                        <img src="assets/media/about/about.png" alt="" className="featured-image" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-11">
                                    <div className="content">
                                        <h4 className="mb-16" style={{ color: 'white' }}>
                                            Beyond Boundaries: Where Gaming Dreams Come True
                                        </h4>
                                        <p className="medium-gray mb-16">
                                            Lorem ipsum dolor sit amet consectetur. Diam nunc donec tempor nisi massa
                                            diam. Hac felis fringilla dignissim proin pellentesque eu neque integer. Eu
                                            sapien quis ut molestie lectus faucibus.
                                        </p>
                                        <p className="medium-gray mb-48">
                                            Lorem ipsum dolor sit amet consectetur. In blandit sit semper amet. Aliquam
                                            lacus sed aenean consectetur. Lorem ipsum dolor sit amet consectetur.
                                        </p>
                                        <a href="shop.html" className="cus-btn sec">
                                            Shop Now
                                            <i className="fal fa-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About Area End */}

                    {/* Match Stream Area Start */}
                    <section className="streaming p-40">
                        <div className="container">
                            <div className="heading">
                                <h2 style={{ color: 'white' }}>Match Streams</h2>
                            </div>
                            <div className="match-stream-slider">
                                <div className="stream-card">
                                    <img src="assets/media/streaming/vc-1.png" alt="" className="thumbnail" />
                                    <div className="overlay">
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#videoModal"
                                            className="play-btn"
                                        >
                                            <i className="fas fa-play" />
                                        </a>
                                    </div>
                                    <img src="assets/media/users/streamer-1.png" alt="" className="streamer" />
                                </div>
                                <div className="stream-card">
                                    <img src="assets/media/streaming/vc-2.png" alt="" className="thumbnail" />
                                    <div className="overlay">
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#videoModal"
                                            className="play-btn"
                                        >
                                            <i className="fas fa-play" />
                                        </a>
                                    </div>
                                    <img src="assets/media/users/streamer-2.png" alt="" className="streamer" />
                                </div>
                                <div className="stream-card">
                                    <img src="assets/media/streaming/vc-3.png" alt="" className="thumbnail" />
                                    <div className="overlay">
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#videoModal"
                                            className="play-btn"
                                        >
                                            <i className="fas fa-play" />
                                        </a>
                                    </div>
                                    <img src="assets/media/users/streamer-3.png" alt="" className="streamer" />
                                </div>
                                <div className="stream-card">
                                    <img src="assets/media/streaming/vc-1.png" alt="" className="thumbnail" />
                                    <div className="overlay">
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#videoModal"
                                            className="play-btn"
                                        >
                                            <i className="fas fa-play" />
                                        </a>
                                    </div>
                                    <img src="assets/media/users/streamer-1.png" alt="" className="streamer" />
                                </div>
                                <div className="stream-card">
                                    <img src="assets/media/streaming/vc-2.png" alt="" className="thumbnail" />
                                    <div className="overlay">
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#videoModal"
                                            className="play-btn"
                                        >
                                            <i className="fas fa-play" />
                                        </a>
                                    </div>
                                    <img src="assets/media/users/streamer-2.png" alt="" className="streamer" />
                                </div>
                                <div className="stream-card">
                                    <img src="assets/media/streaming/vc-3.png" alt="" className="thumbnail" />
                                    <div className="overlay">
                                        <a
                                            href="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#videoModal"
                                            className="play-btn"
                                        >
                                            <i className="fas fa-play" />
                                        </a>
                                    </div>
                                    <img src="assets/media/users/streamer-3.png" alt="" className="streamer" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Match Stream Area End */}
                    {/* Inner Banner Area Start */}
                    <section className="inner-banner">
                        <div className="row">
                            <div className="col-lg-4 col-md-3 img-block">
                                <img src="assets/media/banner/streamer-1.png" alt="" className="player-img" />
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="content text-center">
                                    <img src="assets/media/logos/tl-2.png" alt="" className="banner-logo mb-32" />
                                    <h2 className="title mb-8">
                                        Who Will <b className="color-primary">Be the Best?</b>
                                    </h2>
                                    <p className="mb-32 medium-gray">
                                        Lorem ipsum dolor sit amet consectetur. Venenatis sit faucibus eget aliquet nisi
                                        faucibus fusce. Interdum quisque.
                                    </p>
                                    <a href="stream-detail.html" className="cus-btn primary">
                                        Watch Now
                                        <i className="far fa-play-circle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Inner Banner Area End */}
                    {/* Product Slider Area Start */}
                    <section className="p-40">
                        <div className="container">
                            <div className="heading">
                                <h2 style={{ color: 'white' }}>Our Shop</h2>
                            </div>
                            <div className="product-slider">
                                <div className="product-card st-2">
                                    <div className="top-row">
                                        <h6 className="tag">SALE</h6>
                                        <div className="wishlist-icon">
                                            <i className="fal fa-heart" />
                                        </div>
                                    </div>
                                    <h5 className="mb-12">
                                        <a href="product-detail.html">Gamepad Game Controller </a>
                                    </h5>
                                    <a href="product-detail.html">
                                        <img src={image1} alt="" />
                                    </a>
                                    <div className="bottom-row">
                                        <div className="price">
                                            <h4>$20.00</h4>
                                        </div>
                                        <a href="cart.html" className="cus-btn primary">
                                            Add to cart
                                            <i className="fal fa-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-card st-2">
                                    <div className="top-row">
                                        <h6 className="tag">NEW</h6>
                                        <div className="wishlist-icon">
                                            <i className="fal fa-heart" />
                                        </div>
                                    </div>
                                    <h5 className="mb-12">
                                        <a href="product-detail.html">Keyboard With RGB Light</a>
                                    </h5>
                                    <a href="product-detail.html">
                                        <img src={image2} alt="" />
                                    </a>
                                    <div className="bottom-row">
                                        <div className="price">
                                            <h4>$32.00</h4>
                                        </div>
                                        <a href="cart.html" className="cus-btn primary">
                                            Add to cart
                                            <i className="fal fa-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-card st-2">
                                    <div className="top-row">
                                        <h6 className="tag">NEW</h6>
                                        <div className="wishlist-icon">
                                            <i className="fal fa-heart" />
                                        </div>
                                    </div>
                                    <h5 className="mb-12">
                                        <a href="product-detail.html">Fusion Gaming Headphone</a>
                                    </h5>
                                    <a href="product-detail.html">
                                        <img src={image3} alt="" />
                                    </a>
                                    <div className="bottom-row">
                                        <div className="price">
                                            <h4>$10.00</h4>
                                        </div>
                                        <a href="cart.html" className="cus-btn primary">
                                            Add to cart
                                            <i className="fal fa-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="p-40">
                        <div className="container">
                            <div className="heading">
                                <h2 style={{ color: 'white' }}>Latest News</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <a href="blog-detail.html" className="blog-card mb-30 mb-lg-0">
                                        <div className="category-block">
                                            <img src="assets/media/shapes/blog-vector.png" alt="" />
                                            <h5 className="c-title">Racing Games</h5>
                                        </div>
                                        <div className="img-block">
                                            <img src="assets/media/blogs/b-1.png" alt="" />
                                            <div className="overlay" />
                                            <div className="text-block">
                                                <h6 className="light-gray mb-16">Aug 10, 2023</h6>
                                                <h5 className="title">
                                                    Gaming Community Spotlight: Inspiring Stories and Achievements
                                                </h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <a href="blog-detail.html" className="blog-card mb-30 mb-lg-0">
                                        <div className="category-block">
                                            <img src="assets/media/shapes/blog-vector.png" alt="" />
                                            <h5 className="c-title">Fighting Games</h5>
                                        </div>
                                        <div className="img-block">
                                            <img src="assets/media/blogs/b-2.png" alt="" />
                                            <div className="overlay" />
                                            <div className="text-block">
                                                <h6 className="light-gray mb-16">Aug 12, 2023</h6>
                                                <h5 className="title">
                                                    Gaming Community Spotlight: Inspiring Stories and Achievements
                                                </h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <a href="blog-detail.html" className="blog-card">
                                        <div className="category-block">
                                            <img src="assets/media/shapes/blog-vector.png" alt="" />
                                            <h5 className="c-title">Sports Games</h5>
                                        </div>
                                        <div className="img-block">
                                            <img src="assets/media/blogs/b-3.png" alt="" />
                                            <div className="overlay" />
                                            <div className="text-block">
                                                <h6 className="light-gray mb-16">Aug 13, 2023</h6>
                                                <h5 className="title">
                                                    Gaming Community Spotlight: Inspiring Stories and Achievements
                                                </h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Blogs Area End */}
                </div>
                {/* Main Content End */}
            </>
            <>
                {/* modal-popup area start  */}
                <div className="modal fade" id="videoModal" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="top_bar">
                                <h4 className="modal-title">Demon Season 4</h4>
                                <button
                                    type="button"
                                    className="close"
                                    id="closeVideoModalButton"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">
                                        <i className="fas fa-times" /> <b>Close</b>
                                    </span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <video controls="" title="Video">
                                    <source src="assets/media/video/movie-video.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default Login;
