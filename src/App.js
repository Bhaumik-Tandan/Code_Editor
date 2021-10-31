import Edit from "./edit/edit";
import React from "react";
import SiteHost from "./siteHost/siteHost";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/Code_Editor/:id">
          <SiteHost />
      </Route>
      <Route path="/Code_Editor">
          <Edit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
