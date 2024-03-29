import HomePage from "../container/HomeTemplate/HomePage";
// import PageNotFound from '../container/HomeTemplate/PageNotFound';
import DetailPage from '../container/HomeTemplate/DetailPage';
import DashBoard from "../container/AdminTemplate/DashBoard";
import UserManager from "../container/AdminTemplate/UserManager";
import MovieManagerPage from "../container/AdminTemplate/MovieManager";
import BookingManagerPage from "../container/AdminTemplate/BookingManager";
import TheaterManagerPage from "../container/AdminTemplate/TheaterManager";
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
const routesAdmin = [
    {
      exact: false,
      path: "/dashboard",
      component: DashBoard,
    },
    {
      exact: false,
      path: "/UserManager",
      component: UserManager,
    },
    {
      exact: false,
      path: "/MovieManagerPage",
      component: MovieManagerPage,
    },
    {
      exact: false,
      path: "/BookingManagerPage",
      component: BookingManagerPage,
    },
    {
      exact: false,
      path: "/TheaterManagerPage",
      component: TheaterManagerPage,
    },
  ];
export {routesHome,routesAdmin};