import React from "react";
import Feed from "./components/Feed";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import { Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Switch>
          <Route path="/feed">
            <Feed />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </AuthContextProvider>
    </>
  );
}

export default App;
