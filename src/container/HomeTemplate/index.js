import React, { Suspense } from 'react';
import { Route } from "react-router-dom";
import LayoutHome from '../../components/LayoutHome';
import Loading from '../../components/Loader';
export default function HomeTemplate({ Component, ...props }) {
  return (
    <Suspense fallback={<Loading/>}>
      <Route
        {...props}
        render={(propsComponent) => (
          <LayoutHome>
            <Component {...propsComponent} />
          </LayoutHome>
        )}
      />
    </Suspense>

  )
}
