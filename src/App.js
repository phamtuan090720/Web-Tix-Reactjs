import './App.css';
import {Switch} from 'react-router-dom';
import {routesHome} from './routes';
import HomeTemplate from './container/HomeTemplate';
import PageNotFound from './container/HomeTemplate/PageNotFound';
import {Route} from "react-router-dom";
function App() {
 const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
      });
    }
  }
  return (
    <Switch>
        {showLayoutHome(routesHome)}
        <Route path='' component={PageNotFound}/>
    </Switch>
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
