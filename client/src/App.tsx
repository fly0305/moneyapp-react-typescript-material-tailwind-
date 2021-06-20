import React, { ReactElement } from "react";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import AuthWrapper from "./components/auth/AuthWrapper";
import { RootState } from "./redux/store"
import { useSelector } from "react-redux";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/user/User";
import Listing from "./pages/listing/Listing";
import Enquiry from "./pages/enquiry/Enquiry";
import Matching from "./pages/matching/Matching";
import Content from "./pages/analytics/Content";
import Performance from "./pages/analytics/Performance";
import Login from "./pages/auth/Login";

const App = () => {
  const selector = (state: RootState) => ({
    isAuth: state.auth.isAuthenticated,
    isHydrated: state.auth.isHydrated
  })
  const { isAuth, isHydrated } = useSelector(selector);

  interface routeData {
    path: string | string[];
    component: ReactElement;
    exact?: boolean;
  }

  interface redirectData {
    to: string;
    from?: string;
    exact?: boolean;
  }

  const renderRoutes = () => {
    let routes: routeData[] = [];
    let redirects: redirectData[] = [];
    if (isAuth) {
     routes = [
        { exact: true, path: "/", component: <Dashboard /> },
        { exact: true, path: "/user", component: <User /> },
        { exact: true, path: "/listing", component: <Listing /> },
        { exact: true, path: "/enquiry", component: <Enquiry /> },
        { exact: true, path: "/matching", component: <Matching /> },
        { exact: true, path: "/content", component: <Content /> },
        { exact: true, path: "/performance", component: <Performance /> },
      ]
    } else {
        const routes: routeData[] = [ { exact: true, path: "/login", component: <Login /> } ]      
      }
    return (
      <Switch>
        {routes.map((r, i) => (
          <Route key={i} path={r.path} exact={r.exact} render={() => r.component} />
        ))}
        {redirects.map((r, i) => (
          <Redirect key={i} from={r.from} exact={r.exact} to={r.to} />
        ))}
      </Switch>
    )
  }
  return (
    <div className="App" id="wrapper">
      <AuthWrapper>
        <Router>
          {isAuth && isHydrated ? <h2>Loading</h2> : ""}
          {renderRoutes()}
        </Router>
      </AuthWrapper>
    </div>
  );
};

export default App;
