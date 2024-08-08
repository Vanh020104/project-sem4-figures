function Header() {
    return (
        <>
            {/* Header Area Start */}
            <header className="large-screens">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse justify-content-between">
                            <a className="navbar-brand" href="/">
                                <img alt="logo" src="assets/media/logo.png" />
                            </a>
                            <ul className="navbar-nav mainmenu">
                                <li className="menu-item has-children">
                                    <a href="javascript:void(0);" className="main-menu-item active">
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
                                {/* <li className="menu-item has-children">
                                    <a href="javascript:void(0);" className="main-menu-item">
                                        Games
                                        <i className="fas fa-caret-down m-1" />
                                    </a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="live-streams.html">Live Streams</a>
                                        </li>
                                        <li>
                                            <a href="stream-detail.html">Stream Detail</a>
                                        </li>
                                        <li>
                                            <a href="match-result.html">Match Results</a>
                                        </li>
                                        <li>
                                            <a href="tournament-list.html">Tournaments</a>
                                        </li>
                                        <li>
                                            <a href="tournment-detail.html">Tournament Detail</a>
                                        </li>
                                    </ul>
                                </li> */}
                                <li className="menu-item has-children">
                                    <a href="javascript:void(0);" className="main-menu-item">
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
                                    <a href="javascript:void(0);" className="main-menu-item">
                                        pages
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
                                    <a href="javascript:void(0);" className="main-menu-item">
                                        Account
                                        <i className="fas fa-caret-down m-1" />
                                    </a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="/myorder">My Order</a>
                                        </li>
                                        <li>
                                            <a href="/login">Login</a>
                                        </li>
                                        <li>
                                            <a href="#">Logout</a>
                                        </li>
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
                                    </a>
                                </li>
                                <li className="icon">
                                    <a href="/login">
                                        <i className="fal fa-user" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
