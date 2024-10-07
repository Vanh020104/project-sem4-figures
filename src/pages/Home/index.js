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
                            <h2 className="mb-24 color-white">
                                Game On - Thrilling
                                <br /> Challenges
                            </h2>
                            <h6 className="mb-48 lightest-gray">
                                Explore the homepage to update the latest products, attractive offers and featured
                                information.
                                <br /> Start your shopping journey here!
                            </h6>
                            <div className="btn-block">
                                <a href="/shop" className="cus-btn primary">
                                    Join Now
                                    <i className="fas fa-chevron-right" />
                                </a>
                                <a href="/blogs" className="cus-btn sec">
                                    Blogs
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
                                            <h5 className="mb-8">Immersive Gameplay</h5>
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
                                            <h5 className="mb-8">Engaging Storylines</h5>
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
                                            <h5 className="mb-8">Replay Value</h5>
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
                                            <h5 style={{ color: 'white' }} className="mb-8">
                                                Responsive Controls
                                            </h5>
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
                                <h4 style={{ color: 'white' }}>Match Streams</h4>
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
                                    <h3 className="title mb-8">
                                        Who Will{' '}
                                        <b style={{ fontSize: 36 }} className="color-primary">
                                            Be the Best?
                                        </b>
                                    </h3>
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
                                <h4 style={{ color: 'white' }}>Our Shop</h4>
                            </div>
                            <div className="product-slider">
                                <div className="product-card st-2">
                                    <div className="top-row">
                                        <h7 className="tag">SALE</h7>
                                        <div className="wishlist-icon">
                                            <i className="fal fa-heart" />
                                        </div>
                                    </div>
                                    <h6 className="mb-12">
                                        <a href="#">Vegeta </a>
                                    </h6>
                                    <a href="#">
                                        <img src={image1} alt="" />
                                    </a>
                                    <div className="bottom-row">
                                        <div className="price">
                                            <h6 style={{ color: 'white' }}> $20.00</h6>
                                        </div>
                                        <a style={{ fontSize: 14 }} href="#" className="cus-btn primary">
                                            Add to cart
                                            <i className="fal fa-shopping-cart" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product-card st-2">
                                    <div className="top-row">
                                        <h7 className="tag">SALE</h7>
                                        <div className="wishlist-icon">
                                            <i className="fal fa-heart" />
                                        </div>
                                    </div>
                                    <h6 className="mb-12">
                                        <a href="#">Luffy nika grear 5</a>
                                    </h6>
                                    <a href="#">
                                        <img src={image2} alt="" />
                                    </a>
                                    <div className="bottom-row">
                                        <div className="price">
                                            <h6 style={{ color: 'white' }}> $40.00</h6>
                                        </div>
                                        <a style={{ fontSize: 14 }} href="#" className="cus-btn primary">
                                            Add to cart
                                            <i className="fal fa-shopping-cart" />
                                        </a>
                                    </div>
                                </div>{' '}
                                <div className="product-card st-2">
                                    <div className="top-row">
                                        <h7 className="tag">SALE</h7>
                                        <div className="wishlist-icon">
                                            <i className="fal fa-heart" />
                                        </div>
                                    </div>
                                    <h6 className="mb-12">
                                        <a href="#">Rozo enma</a>
                                    </h6>
                                    <a href="#">
                                        <img src={image3} alt="" />
                                    </a>
                                    <div className="bottom-row">
                                        <div className="price">
                                            <h6 style={{ color: 'white' }}> $23.00</h6>
                                        </div>
                                        <a style={{ fontSize: 14 }} href="#" className="cus-btn primary">
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
                                <h4 style={{ color: 'white' }}>Latest News</h4>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <a href="#" className="blog-card mb-30 mb-lg-0">
                                        <div className="category-block">
                                            <img src="assets/media/shapes/blog-vector.png" alt="" />
                                            <h6 className="c-title">Nguyen Nam</h6>
                                        </div>
                                        <div className="img-block">
                                            <img src="assets/media/blogs/b-1.png" alt="" />
                                            <div className="overlay" />
                                            <div className="text-block">
                                                <p style={{ fontSize: 14 }} className="light-gray mb-16">
                                                    Aug 10, 2024
                                                </p>
                                                <h6 className="title">
                                                    Learn About Game Character Models: Attraction from the 3D World
                                                </h6>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <a href="#" className="blog-card mb-30 mb-lg-0">
                                        <div className="category-block">
                                            <img src="assets/media/shapes/blog-vector.png" alt="" />
                                            <h6 className="c-title">Perter</h6>
                                        </div>
                                        <div className="img-block">
                                            <img src="assets/media/blogs/b-2.png" alt="" />
                                            <div className="overlay" />
                                            <div className="text-block">
                                                <p style={{ fontSize: 14 }} className="light-gray mb-16">
                                                    Aug 12, 2023
                                                </p>
                                                <h6 className="title">Explore the World of Game Models </h6>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <a href="#" className="blog-card">
                                        <div className="category-block">
                                            <img src="assets/media/shapes/blog-vector.png" alt="" />
                                            <h6 className="c-title">Joni</h6>
                                        </div>
                                        <div className="img-block">
                                            <img src="assets/media/blogs/b-3.png" alt="" />
                                            <div className="overlay" />
                                            <div className="text-block">
                                                <p style={{ fontSize: 14 }} className="light-gray mb-16">
                                                    Aug 13, 2023
                                                </p>
                                                <h6 className="title">From Passion to Work of Art </h6>
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
