import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
    const url = 'http://localhost:8080/api/v1/auth/register';
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
    });
    const [errors, setErrors] = useState({});

    function validate(data) {
        let errors = {};
        if (!data.username.trim() || 20 > data.username.length > 3) {
            errors.username = 'username is required';
            toast.error('username is required');
        }

        if (!data.phoneNumber.trim() || 10 >= data.phoneNumber.length > 6) {
            errors.phoneNumber = 'phoneNumber is required';
            toast.error('phoneNumber is required');
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
            toast.error('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email address is invalid';
            toast.error('Email address is invalid');
        }
        if (!data.password) {
            errors.password = 'Password is required';
            toast.error('Password is required');
        } else if (data.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
            toast.error('Password must be at least 6 characters long');
        }
        return errors;
    }

    function submit(e) {
        e.preventDefault();
        const validationErrors = validate(data);
        if (Object.keys(validationErrors).length === 0) {
            axios
                .post(url, {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    phoneNumber: data.phoneNumber,
                })
                .then((res) => {
                    console.log(res.data);
                    window.location.href = '/login';
                    toast.success('Sign up successful!');
                })
                .catch((error) => {
                    console.error('Registration error: ', error.response.data);
                    toast.error('An error occurred during sign up. Please try again.');
                });
        } else {
            setErrors(validationErrors);
            toast.error('Please fill in the required fields correctly.');
        }
    }

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    }
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
                <ToastContainer />
                {/* Header Area end */}
                {/* 404 Area Start  */}
                <div className="login-page">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-md-8 offset-md-2">
                                    <div className="text-block text-center">
                                        <div className="row mb-16" style={{ marginTop: 40 }}>
                                            <div className="col-sm-6">
                                                <a href="#" className="link-btn mb-24 mb-sm-0">
                                                    <img src="assets/media/icons/Google.png" alt="" /> Sign up with
                                                    Google
                                                </a>
                                            </div>
                                            <div className="col-sm-6">
                                                <a href="#" className="link-btn" style={{ color: 'white' }}>
                                                    <img src="assets/media/icons/facebook-icon.png" alt="" /> Sign up
                                                    with Facebook
                                                </a>
                                            </div>
                                        </div>
                                        <h5 className="or mb-8">or</h5>
                                        <h6 className="mb-24">Sign up with your email address</h6>
                                        <form onSubmit={submit} className="form-validator">
                                            <div className="">
                                                <div className="">
                                                    <div className="mb-30">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="username"
                                                            required=""
                                                            onChange={(e) => handle(e)}
                                                            value={data.username}
                                                            placeholder="Full Name"
                                                        />
                                                        {/* {errors.username && (
                                                            <p
                                                                style={{ marginTop: 5, color: 'red' }}
                                                                className="error-message"
                                                            >
                                                                {errors.username}
                                                            </p>
                                                        )} */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div style={{ width: '100%' }} className="mb-30">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        required=""
                                                        onChange={(e) => handle(e)}
                                                        value={data.email}
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div style={{ margin: '0 10px' }}></div>
                                                <div style={{ width: '100%' }} className="mb-30">
                                                    <input
                                                        type="phoneNumber"
                                                        className="form-control"
                                                        id="phoneNumber"
                                                        required=""
                                                        onChange={(e) => handle(e)}
                                                        value={data.phoneNumber}
                                                        placeholder="Phone Number"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-30">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    required=""
                                                    onChange={(e) => handle(e)}
                                                    value={data.password}
                                                    placeholder="Password"
                                                />
                                                {/* {errors.password && (
                                                    <p style={{ marginTop: 5, color: 'red' }} className="error-message">
                                                        {errors.password}
                                                    </p>
                                                )} */}
                                            </div>
                                            <button type="submit" className="b-unstyle cus-btn primary w-100 mb-24">
                                                Create Account
                                            </button>
                                        </form>
                                        <h6 style={{ color: 'white' }}>
                                            Already have an account?{' '}
                                            <a href="/login" className="color-primary">
                                                Log in
                                            </a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="img-block">
                                <img src="assets/media/backgrounds/signup.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* 404 Area End  */}
            </div>
        </>
    );
}
export default Register;
