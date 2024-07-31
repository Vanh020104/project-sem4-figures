import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
                mode: 'no-cors',
            });

            if (!response.ok) {
                throw new Error('Invalid username or password');
            }

            const data = await response.json();
            // Handle successful login (e.g., save token, redirect)
            toast.success('Login successful!');
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid"
                            alt="Sample image"
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div>
                            <p>Invalid username or password.</p>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                <button
                                    type="button"
                                    data-mdb-button-init=""
                                    data-mdb-ripple-init=""
                                    className="btn btn-primary btn-floating mx-1"
                                >
                                    <i className="fab fa-facebook-f" />
                                </button>
                                <button
                                    type="button"
                                    data-mdb-button-init=""
                                    data-mdb-ripple-init=""
                                    className="btn btn-primary btn-floating mx-1"
                                >
                                    <i className="fab fa-twitter" />
                                </button>
                                <button
                                    type="button"
                                    data-mdb-button-init=""
                                    data-mdb-ripple-init=""
                                    className="btn btn-primary btn-floating mx-1"
                                >
                                    <i className="fab fa-linkedin-in" />
                                </button>
                            </div>
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>
                            {/* Email input */}
                            <div data-mdb-input-init="" className="form-outline mb-4">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid User"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                />
                                <label className="form-label" htmlFor="username">
                                    User
                                </label>
                            </div>
                            {/* Password input */}
                            <div data-mdb-input-init="" className="form-outline mb-3">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label className="form-label" htmlFor="password">
                                    Password
                                </label>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                {/* Checkbox */}
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="form2Example3"
                                    />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="submit"
                                    data-mdb-button-init=""
                                    data-mdb-ripple-init=""
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                >
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?{' '}
                                    <a href="#!" className="link-danger">
                                        Register
                                    </a>
                                </p>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                {/* Copyright */}
                <div className="text-white mb-3 mb-md-0">Copyright © 2020. All rights reserved.</div>
                {/* Copyright */}
                {/* Right */}
                <div>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="#!" className="text-white me-4">
                        <i className="fab fa-google" />
                    </a>
                    <a href="#!" className="text-white">
                        <i className="fab fa-linkedin-in" />
                    </a>
                </div>
                {/* Right */}
            </div>
        </section>
    );
}

export default Login;
