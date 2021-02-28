import HomePage from "../container/HomeTemplate/HomePage";
import PageNotFound from '../container/HomeTemplate/PageNotFound';
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
    exact: false,
    path: "",
    component: PageNotFound,
}
];
export { routesHome};