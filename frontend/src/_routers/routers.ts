import CreatePage from "../components/CreatePage/CreatePage"
import Home from "../components/Home/Home";
import HomeF from "../components/HomeF/HomeF"
import Page from "../components/Page/Page";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";

//route chưa login
const page = window.location.pathname;
const publicRoutes = [
    { path: '/fake', component: HomeF },

    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/login/forgot-password', component: ForgotPassword },

    { path: `${page}`, component: Page }, //để cuối cùng, khi người dùng click vào 1 sản phẩm thì truy cập tới website đó
]

//routes đã login
const privateRoutes = [
    { path: '/create-page', component: CreatePage },
]

export {publicRoutes, privateRoutes}