import React, { useState } from 'react';
import { toast } from 'react-toastify';

function ResetPass() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const urlParams = new URLSearchParams(window.location.search);
        const secretKey = urlParams.get('secretKey');

        const data = {
            secretKey: secretKey,
            password: password,
            confirmPassword: confirmPassword,
        };

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                window.location.href = '/login';
                toast.success('Password changed successfully');
            } else {
                toast.error('Error changing password');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
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
                                        <h3 className="mb-32">Reset Password</h3>
                                        <p style={{ color: 'white', marginBottom: 20 }}>
                                            Please enter your new password. Passwords should include uppercase letters,
                                            lowercase letters, numbers and special characters to ensure security.
                                        </p>

                                        <form className="form-validator " onSubmit={handleSubmit}>
                                            <div className="mb-30">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="login-password"
                                                    name="password"
                                                    required
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="mb-30">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="confirm-password"
                                                    name="confirmPassword"
                                                    required
                                                    placeholder="Confirm Password"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                            </div>

                                            <button type="submit" className="b-unstyle cus-btn primary w-100 mb-24">
                                                <i class="fa-regular fa-paper-plane"></i> Reset Password
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="img-block">
                                <img src="assets/media/backgrounds/cs-main-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* 404 Area End  */}
            </div>
        </>
    );
}

export default ResetPass;
