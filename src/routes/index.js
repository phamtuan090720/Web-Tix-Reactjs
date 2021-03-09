import HomePage from "../container/HomeTemplate/HomePage";
import PageNotFound from '../container/HomeTemplate/PageNotFound';
import DetailPage from '../container/HomeTemplate/DetailPage';
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
    path:"/detail-movie/:id",
    component:DetailPage,
},
{
    exact: false,
    path: "",
    component: PageNotFound,
}
];
export { routesHome};