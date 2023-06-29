import CreatePage from "../components/CreatePage/CreatePage"
import Home from "../components/Home/Home";
import HomeF from "../components/HomeF/HomeF"
import Page from "../components/Page/Page";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import HomeUser from "../components/HomeUser/HomeUser";

//route chưa login
const page = window.location.pathname;

const publicRoutes = [
    { path: '/fake', component: HomeF },

    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/login/forgot-password', component: ForgotPassword },
]

//routes đã login
const privateRoutes = [
    { path: '/home/*', component: HomeUser },
    { path: '/home/create-page', component: CreatePage },

    //{ path: `/${page}`, component: Page }, //để cuối cùng, khi người dùng click vào 1 sản phẩm thì truy cập tới website đó
]

export {publicRoutes, privateRoutes}