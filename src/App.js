import './App.css';
import { Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import Loading from './components/Loader';
import { routesHome } from './routes';
import HomeTemplate from './container/HomeTemplate';
import PageNotFound from './container/HomeTemplate/PageNotFound';
import BookingTicket from './container/HomeTemplate/BookingTicket';
import Admin from './container/AdminTemplate';
import Profile from './container/HomeTemplate/Profile';
import RegisterPage from "./container/AdminTemplate/RegisterPage";
import LoginPage from "./container/AdminTemplate/AuthPage";
import { Route } from "react-router-dom";
function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <HomeTemplate key={index} exact={item.exact} path={item.path} isHome={item.isHome} Component={item.component} />
      });
    }
  }
  // const showLayoutAdmin = (routes) => {
  //   if (routes && routes.length > 0) {
  //     return routes.map((item, index) => {
  //       return (
  //         <AdminLayout
  //           exact={item.exact}
  //           path={item.path}
  //           Component={item.component}
  //           key={index}
  //         />
  //       );
  //     });
  //   }
  // };
  return (
    <Suspense fallback={<Loading/>}>
      <Switch>
        {showLayoutHome(routesHome)}
        <Route path='/profile/:taiKhoan' component={Profile}/>
        <Route path='/admin' component={Admin} />
        <Route path="/booking-ticket/:id" component={BookingTicket} />
        <Route path="/login" component={LoginPage} />
        <Route path="/RegisterPage" component={RegisterPage} />
        <Route path='' component={PageNotFound} />
      </Switch>
    </Suspense>
  )
}

export default App;
// import { Route, Switch, withRouter } from "react-router-dom";
// import React, { Component } from 'react'
// import { routesHome, routesAdmin } from "./routes";
// import HomeTemplate from "./container/HomeTemplate";
// export default class App extends Component {
//   showLayoutHome = (routes) => {
//     if (routes && routes.length > 0) {
//       return routes.map((item, index) => {
//         return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
//       });
//     }
//   }
//   render() {
//     return (
//       <Switch>
//         {this.showLayoutHome(routesHome)}
//       </Switch>
//     )
//   }
// }
