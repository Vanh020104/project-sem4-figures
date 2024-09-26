import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '~/context/UserContext ';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const { loginContext } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loadingAPI, setLoadingAPI] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        setLoadingAPI(true);
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
                username,
                password,
            });
            loginContext(username, response.data.accessToken);
            localStorage.setItem('accessToken', response.data.accessToken);
            const userId = response.data.id;
            localStorage.setItem('userId', userId);
            console.log(userId);
            // console.log('Login successful!', response.data.accessToken);
            navigate('/');
            toast.success('Login successful!');
            localStorage.setItem('accessToken', response.data.accessToken);
        } catch (error) {
            toast.error('UserName or PassWord wrong!');
            // console.error('Login error:', error);
        }
        setLoadingAPI(false);
    };

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
                                            <form onSubmit={handleLogin} className="form-validator">
                                                <div className="mb-30">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="login-email"
                                                        name="username"
                                                        required=""
                                                        placeholder="User Name"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
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
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                                <button type="submit" className="b-unstyle cus-btn primary w-100 mb-24">
                                                    {loadingAPI && <i className="fa-solid fa-sync fa-spin"></i>}
                                                    &nbsp; Login
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
