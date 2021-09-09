import React from "react";
import { Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Main = loadable(() => import("@pages/Main"));

function App() {
  return (
    <Switch>
      <Route path="/:location">
        <Route path="/" component={Main} />
      </Route>
    </Switch>
  );
}
export default App;
