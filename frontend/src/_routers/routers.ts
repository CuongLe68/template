import CreatePage from "../components/CreatePage/CreatePage"
import Home from "../components/Home/Home";
import HomeF from "../components/HomeF/HomeF"
import Page from "../components/Page/Page";

//route chưa login
const page = window.location.pathname;
const publicRoutes = [
    { path: '/fake', component: HomeF },

    { path: '/', component: Home },
    { path: `${page}`, component: Page },
]

//routes đã login
const privateRoutes = [
    { path: '/create-page', component: CreatePage },
]

export {publicRoutes, privateRoutes}