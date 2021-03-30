import React from 'react';
import { Route } from "react-router-dom";
import LayoutHome from '../../components/LayoutHome';
import Scroll from '../../components/BackToTop';
export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutHome isHome={props.isHome}>
          <Component {...propsComponent} />
          <Scroll showBelow={250} />
        </LayoutHome>
      )}
    />
  )
}
