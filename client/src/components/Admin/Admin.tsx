import React, { Fragment } from "react";
import LeftMenu from "../LeftMenu/LeftMenu";
import TopMenu from "../TopMenu/TopMenu";
import { Switch, Route } from "react-router";

//old components import
import Users from "../Users/Users";
import Products from "../Products/Products";
import Orders from "../Orders/Orders";
import Home from "../Home/Home";
import Notifications from "../../common/components/Notification";

//custom components import
import Dashboard from "../../pages/dashboard/Dashboard";
import User from "../../pages/user/User";
import Listing from "../../pages/listing/Listing";
import Matching from "../../pages/matching/Matching";
import Content from "../../pages/analytics/Content";
import Performance from "../../pages/analytics/Performance";
import Enquiry from "../../pages/enquiry/Enquiry";

const Admin: React.FC = () => {

  return (
    <Fragment>
      <Notifications />
      <LeftMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopMenu />
          <div className="container-fluid">
            <Switch>
              {/* custom routes */}
              <Route exact path="/"><Dashboard /></Route>
              <Route path={"/user"}><User /></Route>
              <Route path={"/listing"}><Listing /></Route>
              <Route path={"/enquiry"}><Enquiry /></Route>
              <Route path={"/matching"}><Matching /></Route>
              <Route path={"/content"}><Content /></Route>
              <Route path={"/performance"}><Performance /></Route>

              {/* old routes */}
              <Route path={`/home`}><Home /></Route>
              <Route path={`/users`}><Users /></Route>
              <Route path={`/products`}><Products /></Route>
              <Route path={`/orders`}><Orders /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
