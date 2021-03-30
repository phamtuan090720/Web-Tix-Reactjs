import HomePage from "../container/HomeTemplate/HomePage";
// import PageNotFound from '../container/HomeTemplate/PageNotFound';
import DetailPage from '../container/HomeTemplate/DetailPage';
;
const routesHome = [{
    exact: true,
    path: "/",
    component: HomePage,
    isHome:true
},
{
    exact: false,
    path: "/home",
    component: HomePage,
    isHome:true
},
{
    exact:false,
    path:"/detail-movie/:id",
    component:DetailPage,
    isHome:false
}
];
export { routesHome};