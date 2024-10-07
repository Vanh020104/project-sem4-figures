function NotFound() {
    return (
        <>
            <div id="preloader">
                <div className="pyramid-loader">
                    <div className="wrapper">
                        <span className="side side1" />
                        <span className="side side2" />
                        <span className="side side3" />
                        <span className="side side4" />
                        <span className="shadow" />
                    </div>
                </div>
            </div>
            {/* Back To Top Start */}
            <a href="#main-wrapper" id="backto-top" className="back-to-top">
                <i className="fas fa-angle-up" />
            </a>
            {/* Main Wrapper Start */}
            <div id="main-wrapper" className="main-wrapper overflow-hidden">
                {/* Header Area Start */}
                <header className="large-screens">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <div className="collapse navbar-collapse justify-content-between">
                                <a className="navbar-brand" href="index-2.html">
                                    <img alt="logo" src="assets/media/logo.png" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </header>
                <header className="small-screen bg-dark-black">
                    <div className="container">
                        <div className="mobile-menu">
                            <div>
                                <a className="navbar-brand" href="index-2.html">
                                    <img alt="" src="assets/media/logo.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header Area end */}
                {/* 404 Area Start  */}
                <div className="error">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6  col-md-8 offset-xl-3 offset-md-2">
                                <div className="content">
                                    <img src="assets/media/images/404.png" alt="" />
                                    <h3 className="mb-16">
                                        Ooops!
                                        <br />
                                        Page not found
                                    </h3>
                                    <p className="medium-gray mb-16">
                                        Lorem ipsum dolor sit amet consectetur. Cras ut enim volutpat tristique.
                                        Consectetur sit sed ultrices nisl ornare nisl ipsum. Accumsan pellentesque
                                        tellus quam condimentum.
                                    </p>
                                    <a href="/" className="cus-btn primary">
                                        <i className="fas fa-chevron-left" />
                                        Back to Home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 404 Area End  */}
            </div>
        </>
    );
}

export default NotFound;
