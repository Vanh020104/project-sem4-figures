import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '~/context/UserContext ';
// import { jwtDecode } from 'jwt-decode';
import jwtDecode from 'jwt-decode';
import logo from '~/assets/media/logo.png';
import axios from 'axios';
function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUsername(decodedToken.sub);
                setIsLoggedIn(true);
                fetchCartItemCount(decodedToken.sub);
            } catch (error) {
                console.error('Invalid token', error);
                setIsLoggedIn(false);
                setCartItemCount(0); // Reset to 0 if the token is invalid
            }
        } else {
            setIsLoggedIn(false);
            setCartItemCount(0); // Reset to 0 if not logged in
        }
    }, []);

    const fetchCartItemCount = () => {
        const userId = localStorage.getItem('userId');
        axios
            .get(`http://localhost:8081/api/v1/cart/user/${userId}`)
            .then((response) => {
                const cartItems = response.data.data;
                const itemCount = cartItems.length;
                setCartItemCount(itemCount);
            })
            .catch((error) => {
                console.error('Error fetching cart item count:', error);
            });
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        logout();
        setIsLoggedIn(false);
        setUsername('');
        setCartItemCount(0); // Reset cart item count on logout
        navigate('/');
        toast.success('Logout success!');
    };
    return (
        <>
            <header className="large-screens">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse justify-content-between">
                            <a className="navbar-brand" href="/">
                                <img alt="logo" src={logo} />
                            </a>
                            <ul className="navbar-nav mainmenu">
                                <li className="menu-item has-children">
                                    <a className="main-menu-item active">
                                        Home
                                        <i className="fas fa-caret-down m-1" />
                                    </a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="/" className="active">
                                                Home 1
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item has-children">
                                    <a className="main-menu-item">
                                        Shop
                                        <i className="fas fa-caret-down m-1" />
                                    </a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="/shop">Shop</a>
                                        </li>
                                        <li>
                                            <a href="/cart">Cart</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item has-children">
                                    <a className="main-menu-item">
                                        Pages
                                        <i className="fas fa-caret-down m-1" />
                                    </a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="/blogs">Blogs</a>
                                        </li>

                                        <li>
                                            <a href="/about">About Us</a>
                                        </li>

                                        <li>
                                            <a href="/404">404 Page</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item has-children">
                                    <a className="main-menu-item">
                                        Account
                                        <i className="fas fa-caret-down m-1" />
                                    </a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="/myorders">My Order</a>
                                        </li>
                                        {isLoggedIn ? (
                                            <li>
                                                <a href="#" onClick={handleLogout}>
                                                    Logout
                                                </a>
                                            </li>
                                        ) : (
                                            <li>
                                                <a href="/login">Login</a>
                                            </li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                            <ul className="right-content unstyled">
                                <li className="search-form non-active">
                                    <form
                                        method="get"
                                        action="https://uiparadox.co.uk/public/templates/gamerx/v2/shop.html"
                                    >
                                        <div className="search-input-group">
                                            <button type="submit" className="input-group-text">
                                                <i className="fal fa-search" />
                                            </button>
                                            <input type="text" className="form-control" placeholder="Search" />
                                        </div>
                                    </form>
                                </li>
                                <li className="icon">
                                    <a href="javascript:;" className="search-btn">
                                        <i className="fal fa-search" />
                                    </a>
                                </li>
                                <li className="icon">
                                    <a href="/cart">
                                        <i className="fal fa-shopping-cart" />
                                        {cartItemCount > 0 && (
                                            <span style={{ color: 'white' }} className="cart-count">
                                                {cartItemCount}
                                            </span>
                                        )}
                                    </a>
                                </li>

                                <ul className="navbar-nav mainmenu" style={{ padding: 0 }}>
                                    <li className="menu-item has-children">
                                        {isLoggedIn ? (
                                            <>
                                                <a className="main-menu-item">
                                                    <i className="fal fa-user" />
                                                    <i className="fas fa-caret-down m-1" />
                                                </a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="#" className="active">
                                                            {username}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" onClick={handleLogout}>
                                                            Logout
                                                        </a>
                                                    </li>
                                                </ul>
                                            </>
                                        ) : (
                                            <a href="/login" className="main-menu-item">
                                                Login
                                            </a>
                                        )}
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
