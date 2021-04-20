import React from "react";
import { Route, Switch } from "react-router-dom";

const SwapAndShow = React.lazy(() => import("../components/swap"));
const infiniteScroll = React.lazy(() => import("../components/infinite-scroll"));

const Routes = () => {
  return (
    <React.Suspense fallback={<div>...Loading</div>}>
      <Switch>
        <Route exact path="/" component={infiniteScroll} />
        <Route exact path="/swap" component={SwapAndShow} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
