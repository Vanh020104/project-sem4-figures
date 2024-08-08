import React, { useState } from 'react';

function Login() {
    return (
        <>
            <>
                {/* Preloader*/}
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
                                    <a className="navbar-brand" href="/">
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
                    <div className="login-page">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="row">
                                    <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-md-8 offset-md-2">
                                        <div className="text-block text-center">
                                            <h3 className="mb-32">Login</h3>
                                            <div className="row mb-16">
                                                <div className="col-sm-6">
                                                    <a href="#" className="link-btn mb-24 mb-sm-0">
                                                        <img src="assets/media/icons/Google.png" alt="" /> Sign up with
                                                        Google
                                                    </a>
                                                </div>
                                                <div className="col-sm-6">
                                                    <a href="#" className="link-btn" style={{ color: 'white' }}>
                                                        <img src="assets/media/icons/facebook-icon.png" alt="" /> Sign
                                                        up with Facebook
                                                    </a>
                                                </div>
                                            </div>
                                            <h5 className="or mb-24">or</h5>
                                            <form
                                                action="https://uiparadox.co.uk/public/templates/gamerx/v2/login.html"
                                                className="form-validator"
                                            >
                                                <div className="mb-30">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="login-email"
                                                        name="login-email"
                                                        required=""
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="mb-30">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="login-password"
                                                        name="login-password"
                                                        required=""
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <button type="submit" className="b-unstyle cus-btn primary w-100 mb-24">
                                                    Login
                                                </button>
                                            </form>
                                            <div className="bottom-row">
                                                <h6 style={{ color: 'white' }}>
                                                    If you don’t have account?{' '}
                                                    <a href="/register" className="color-primary">
                                                        Register
                                                    </a>
                                                </h6>
                                                <h6>
                                                    <a href="#" className="color-primary">
                                                        Forgot Password?
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="img-block">
                                    <img src="assets/media/backgrounds/login.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 404 Area End  */}
                </div>
            </>
        </>
    );
}

export default Login;
