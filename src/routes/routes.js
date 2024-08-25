import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Shop from '~/pages/Shop';
import Login from '~/pages/Login';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Thankyou from '~/pages/Thankyou';
import Register from '~/pages/Register';
import ProductDetails from '~/pages/ProductDetails';
import MyOrder from '~/pages/MyOrder';

// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.shop, component: Shop, component: Shop },
    { path: config.routes.cart, component: Cart, component: Cart },
    { path: config.routes.checkout, component: Checkout, component: Checkout },
    { path: config.routes.thankyou, component: Thankyou, component: Thankyou },
    { path: config.routes.productdetails, component: ProductDetails, component: ProductDetails },
    { path: config.routes.myorders, component: MyOrder, component: MyOrder },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.login, component: Login, layout: null },
];

// Private routes
export const privateRoutes = [];
