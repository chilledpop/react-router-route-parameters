import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <Link to="/">
        Home
      </Link>
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route path="/user/new">
          <p>Unable to create a new user</p>
        </Route>
        <Route path="/user/:userId">
          <UserProfile />
        </Route>
        <Route>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
