// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import React, { useState, useEffect, useContext } from 'react';
// import { UserContext } from '~/context/UserContext ';
// import jwtDecode from 'jwt-decode';
// import logo from '~/assets/media/logo.png';
// import axios from 'axios';

// function Header() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [username, setUsername] = useState('');
//     const [notifications, setNotifications] = useState([]);
//     const [showNotifications, setShowNotifications] = useState(false);
//     const { logout } = useContext(UserContext);
//     const navigate = useNavigate();
//     const [cartItemCount, setCartItemCount] = useState(0);

//     useEffect(() => {
//         const token = localStorage.getItem('accessToken');
//         if (token) {
//             try {
//                 const decodedToken = jwtDecode(token);
//                 setUsername(decodedToken.sub);
//                 setIsLoggedIn(true);
//                 fetchCartItemCount(decodedToken.sub);
//                 fetchNotifications();
//             } catch (error) {
//                 console.error('Invalid token', error);
//                 setIsLoggedIn(false);
//                 setCartItemCount(0);
//             }
//         } else {
//             setIsLoggedIn(false);
//             setCartItemCount(0);
//         }
//     }, []);

//     const fetchCartItemCount = () => {
//         const userId = localStorage.getItem('userId');
//         const token = localStorage.getItem('token');
//         axios
//             .get(`http://localhost:8080/api/v1/cart/user/${userId}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             })
//             .then((response) => {
//                 const cartItems = response.data.data;
//                 const itemCount = cartItems.length;
//                 setCartItemCount(itemCount);
//             })
//             .catch((error) => {
//                 console.error('Error fetching cart item count:', error);
//             });
//     };
//     const fetchNotifications = () => {
//         const userId = localStorage.getItem('userId');
//         if (!userId) {
//             console.error('No userId found');
//             return;
//         }

//         axios
//             .get(`http://localhost:8087/api/v1/notification/user/${userId}`)
//             .then((response) => {
//                 setNotifications(response.data.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching notifications:', error);
//             });
//     };

//     const toggleNotifications = () => {
//         setShowNotifications((prev) => !prev);
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('accessToken');
//         logout();
//         setIsLoggedIn(false);
//         setUsername('');
//         setCartItemCount(0);
//         navigate('/');
//         toast.success('Logout success!');
//     };
//     return (
//         <>
//             <header className="large-screens">
//                 <div className="container">
//                     <nav className="navbar navbar-expand-lg">
//                         <div className="collapse navbar-collapse justify-content-between">
//                             <a className="navbar-brand" href="/">
//                                 <img alt="logo" src={logo} />
//                             </a>
//                             <ul className="navbar-nav mainmenu">
//                                 <li className="menu-item has-children">
//                                     <a className="main-menu-item active">
//                                         Home
//                                         <i className="fas fa-caret-down m-1" />
//                                     </a>
//                                     <ul className="submenu">
//                                         <li>
//                                             <a href="/" className="active">
//                                                 Home 1
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="menu-item has-children">
//                                     <a className="main-menu-item">
//                                         Shop
//                                         <i className="fas fa-caret-down m-1" />
//                                     </a>
//                                     <ul className="submenu">
//                                         <li>
//                                             <a href="/shop">Shop</a>
//                                         </li>
//                                         <li>
//                                             <a href="/cart">Cart</a>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="menu-item has-children">
//                                     <a className="main-menu-item">
//                                         Pages
//                                         <i className="fas fa-caret-down m-1" />
//                                     </a>
//                                     <ul className="submenu">
//                                         <li>
//                                             <a href="/blogs">Blogs</a>
//                                         </li>

//                                         <li>
//                                             <a href="/contact">Contact</a>
//                                         </li>
//                                         <li>
//                                             <a href="/favourite">Favourite</a>
//                                         </li>

//                                         <li>
//                                             <a href="/notfound">404 Page</a>
//                                         </li>
//                                     </ul>
//                                 </li>
//                                 <li className="menu-item has-children">
//                                     <a className="main-menu-item">
//                                         Account
//                                         <i className="fas fa-caret-down m-1" />
//                                     </a>
//                                     <ul className="submenu">
//                                         {isLoggedIn && (
//                                             <>
//                                                 <li>
//                                                     <a href="/myorders">My Order</a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="/profile">Profile</a>
//                                                 </li>
//                                             </>
//                                         )}
//                                         {isLoggedIn ? (
//                                             <li>
//                                                 <a href="#" onClick={handleLogout}>
//                                                     Logout
//                                                 </a>
//                                             </li>
//                                         ) : (
//                                             <li>
//                                                 <a href="/login">Login</a>
//                                             </li>
//                                         )}
//                                     </ul>
//                                 </li>
//                             </ul>
//                             <ul className="right-content unstyled">
//                                 {/* <ul className="navbar-nav mainmenu">
//                                     <li className="menu-item has-children">
//                                         <a className="search-btn" onClick={toggleNotifications}>
//                                             <i className="fa-regular fa-bell"></i>
//                                         </a>
//                                         <ul className="submenu">
//                                             <li>
//                                                 <a href="#" style={{ height: 40 }}>
//                                                     Notifoications
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </li>
//                                 </ul> */}
//                                 <ul className="navbar-nav mainmenu" style={{ padding: 0 }}>
//                                     <li className="menu-item has-children">
//                                         <>
//                                             <a className="main-menu-item">
//                                                 <i className="fa-regular fa-bell"></i>
//                                             </a>
//                                             <ul className="submenu">
//                                                 <li>
//                                                     <a href="#" className="active">
//                                                         Notifoications
//                                                     </a>
//                                                 </li>
//                                                 <li>
//                                                     <a href="#" onClick={handleLogout}>
//                                                         Logout
//                                                     </a>
//                                                 </li>
//                                             </ul>
//                                         </>
//                                     </li>
//                                 </ul>

//                                 <li className="icon">
//                                     <a href="/cart">
//                                         <i className="fal fa-shopping-cart" />
//                                         {cartItemCount > 0 && (
//                                             <span style={{ color: 'white' }} className="cart-count">
//                                                 {cartItemCount}
//                                             </span>
//                                         )}
//                                     </a>
//                                 </li>

//                                 <ul className="navbar-nav mainmenu" style={{ padding: 0 }}>
//                                     <li className="menu-item has-children">
//                                         {isLoggedIn ? (
//                                             <>
//                                                 <a className="main-menu-item">
//                                                     <i className="fal fa-user" />
//                                                     <i className="fas fa-caret-down m-1" />
//                                                 </a>
//                                                 <ul className="submenu">
//                                                     <li>
//                                                         <a href="#" className="active">
//                                                             {username}
//                                                         </a>
//                                                     </li>
//                                                     <li>
//                                                         <a href="#" onClick={handleLogout}>
//                                                             Logout
//                                                         </a>
//                                                     </li>
//                                                 </ul>
//                                             </>
//                                         ) : (
//                                             <a href="/login" className="main-menu-item">
//                                                 Login
//                                             </a>
//                                         )}
//                                     </li>
//                                 </ul>
//                             </ul>
//                         </div>
//                     </nav>
//                 </div>
//             </header>
//         </>
//     );
// }

// export default Header;

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '~/context/UserContext ';
import jwtDecode from 'jwt-decode';
import logo from '~/assets/media/logo.png';
import axios from 'axios';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
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
                fetchNotifications(decodedToken.sub);
            } catch (error) {
                console.error('Invalid token', error);
                setIsLoggedIn(false);
                setCartItemCount(0);
            }
        } else {
            setIsLoggedIn(false);
            setCartItemCount(0);
        }
    }, []);

    // Fetch cart item count
    const fetchCartItemCount = () => {
        const token = localStorage.getItem('accessToken');
        const userId = localStorage.getItem('userId');

        axios
            .get(`http://localhost:8080/api/v1/cart/user/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const cartItems = response.data.data;
                const itemCount = cartItems.length;
                setCartItemCount(itemCount);
            })
            .catch((error) => {
                console.error('Error fetching cart item count:', error);
            });
    };

    const fetchNotifications = () => {
        const userId = localStorage.getItem('userId');
        axios
            .get(`http://localhost:8080/api/v1/notification/user/${userId}`)
            .then((response) => {
                console.log('Thông báo nhận được:', response.data.data); // Kiểm tra dữ liệu trả về
                setNotifications(response.data.data);
            })
            .catch((error) => {
                console.error('Lỗi khi lấy thông báo:', error);
            });
    };

    const setupSocket = (userId) => {
        const socket = new SockJS('http://localhost:8080/ws/customer');
        const stompClient = Stomp.over(socket);

        stompClient.connect(
            {},
            () => {
                console.log('Đã kết nối WebSocket thành công');

                stompClient.subscribe(`/notifications/user/${userId}`, (response) => {
                    const receivedMessage = JSON.parse(response.body);
                    console.log('Nhận được thông báo từ /notifications/user/', receivedMessage); // Kiểm tra xem có nhận được thông báo không
                    setNotifications((notifications) => [receivedMessage, ...notifications]);
                });

                stompClient.subscribe(`/user/${userId}/notifications`, (response) => {
                    const receivedMessage = JSON.parse(response.body);
                    console.log('Nhận được thông báo từ /user/', receivedMessage);
                    setNotifications((notifications) => [receivedMessage, ...notifications]);
                });

                stompClient.subscribe(`/user/${userId}/notifications/userTemp`, (response) => {
                    const receivedNotifi = JSON.parse(response.body);
                    console.log('Nhận được thông báo từ /userTemp/', receivedNotifi);
                    setNotifications((notifications) => [receivedNotifi, ...notifications]);
                });

                stompClient.subscribe('/topic/all', (response) => {
                    const receivedMessageAll = JSON.parse(response.body);
                    console.log('Nhận được thông báo từ /topic/all', receivedMessageAll);
                    setNotifications((notifications) => [receivedMessageAll, ...notifications]);
                });
            },
            (error) => {
                console.error('Lỗi kết nối WebSocket:', error);
            },
        );
    };

    const toggleNotifications = () => {
        setShowNotifications((prev) => !prev);
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        logout();
        setIsLoggedIn(false);
        setUsername('');
        setCartItemCount(0);
        navigate('/');
        toast.success('Logout successful!');
    };

    return (
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
                                        <a href="/compareProducts">Compare products</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                    <li>
                                        <a href="/favourite">Favourite</a>
                                    </li>

                                    <li>
                                        <a href="/notfound">404 Page</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item has-children">
                                <a className="main-menu-item">
                                    Account
                                    <i className="fas fa-caret-down m-1" />
                                </a>
                                <ul className="submenu">
                                    {isLoggedIn && (
                                        <>
                                            <li>
                                                <a href="/myorders">My Order</a>
                                            </li>
                                            <li>
                                                <a href="/orderPaid">Order Paid</a>
                                            </li>
                                            <li>
                                                <a href="/profile">Profile</a>
                                            </li>
                                        </>
                                    )}
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
                            <ul className="navbar-nav mainmenu" style={{ padding: 0 }}>
                                <li className="menu-item has-children" style={{ position: 'relative' }}>
                                    <a className="main-menu-item" onClick={toggleNotifications}>
                                        <i className="fa-regular fa-bell"></i>
                                    </a>
                                    {/* Notification Dropdown */}
                                    {showNotifications && (
                                        <ul
                                            className="submenu"
                                            style={{
                                                width: '250px',
                                                maxHeight: '200px',
                                                overflowY: 'auto',
                                                position: 'absolute',
                                                top: '108.5%',
                                                left: 0,
                                                backgroundColor: '#eeeeee',
                                                padding: '15px',
                                                borderRadius: 5,
                                            }}
                                        >
                                            {notifications.length > 0 ? (
                                                notifications.map((notification) => (
                                                    <li key={notification.id}>
                                                        <div style={{ display: 'flex' }}>
                                                            <img
                                                                style={{
                                                                    width: 45,
                                                                    height: 45,
                                                                    marginTop: 50,
                                                                    marginRight: 5,
                                                                }}
                                                                src="https://img.icons8.com/?size=100&id=5Oj3N16NNbos&format=png&color=000000"
                                                                alt="notification"
                                                            />
                                                            <div style={{ margin: '10px 0' }} className="active">
                                                                <span>{notification.title}</span>
                                                                <p className="mb-0">{notification.message}</p>
                                                                <small className="text-muted">
                                                                    {notification.createdAt}
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                    </li>
                                                ))
                                            ) : (
                                                <li
                                                    style={{
                                                        height: 100,
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                    className="notification-item"
                                                >
                                                    <span style={{ color: 'red' }} className="active">
                                                        No new notifications
                                                    </span>
                                                </li>
                                            )}
                                        </ul>
                                    )}
                                </li>
                            </ul>

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

                            <ul className="navbar-nav mainmenu">
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
    );
}

export default Header;
