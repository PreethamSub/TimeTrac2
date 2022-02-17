import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";

const App = () => {
  //const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    //const user = AuthService.getCurrentUser();

    // if (user) {
    //   setCurrentUser(user);
    // }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    //setCurrentUser(undefined);
  };

  return (
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        {/* <AuthVerify logOut={logOut}/> */}
      </div>
  );
};

export default App;
