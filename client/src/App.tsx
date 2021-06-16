import React from "react";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/Account/Login";
import Admin from "./components/Admin/Admin";
import { PrivateRoute } from "./common/components/PrivateRoute";
import { AccountRoute } from "./common/components/AccountRoute";
import { Provider } from "react-redux";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <div className="App" id="wrapper">
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRoute path="/">
              <Admin />
            </PrivateRoute>
            <AccountRoute path="/login"><Login /></AccountRoute>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
