import Edit from "./edit/edit";
import React from "react";
import SiteHost from "./siteHost/siteHost";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/:id">
          <SiteHost />
        </Route>
      <Route path="/">
          <Edit />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
