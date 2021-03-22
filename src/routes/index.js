import HomePage from "../container/HomeTemplate/HomePage";
// import PageNotFound from '../container/HomeTemplate/PageNotFound';
import DetailPage from '../container/HomeTemplate/DetailPage';
import Profile from '../container/HomeTemplate/Profile';
;
const routesHome = [{
    exact: true,
    path: "/",
    component: HomePage,
},
{
    exact: false,
    path: "/home",
    component: HomePage,
},
{
    exact:false,
    path:"/profile/:taiKhoan",
    component:Profile,
},
{
    exact:false,
    path:"/detail-movie/:id",
    component:DetailPage,
}
];
export { routesHome};