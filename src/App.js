import React from "react";
import Feed from "./components/Feed";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import { Switch, Route } from "react-router-dom"

function App() {
  <>

  <Switch>
    <Route path="/feed">
    <Feed />
    </Route>

    <Route path="/feed">
    <Login />
    </Route>
    
    <Route path="/feed">
    <Signup />
    </Route>

    <Route path="/feed">
    <Profile />
    </Route>

    <Route path="/feed">
    <PageNotFound />
    </Route>
  </Switch>
  </>;
}

export default App;
