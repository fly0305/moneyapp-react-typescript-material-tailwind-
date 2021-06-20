import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const LeftMenu: React.FC = () => {

    let [leftMenuVisibility, setLeftMenuVisibility] = useState(false);

    function changeLeftMenuVisibility() {
        setLeftMenuVisibility(!leftMenuVisibility);
    }

    function getCollapseClass() {
        return (leftMenuVisibility) ? "" : "collapsed";
    }

    return (
        <Fragment>
            <div className="toggle-area">
                <button className="btn btn-primary toggle-button" onClick={() => changeLeftMenuVisibility()}>
                    <i className="fas fa-bolt"></i>
                </button>
            </div>

            <ul className={`navbar-nav bg-gradient-primary-green sidebar sidebar-dark accordion ${getCollapseClass()}`}
                id="collapseMenu">
                <img src={logo} className={"topbar"} alt="#" />
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link className="nav-link" to={"/"}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Data
                </div>
                <li className="nav-item">
                    <Link className="nav-link" to={`/listing`}>
                        <i className="fas fa-fw fa-warehouse"></i>
                        <span>Listings</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/enquiry`}>
                        <i className="fas fa-fw fa-dollar-sign"></i>
                        <span>Enquires</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/user`}>
                        <i className="fas fa-fw fa-user"></i>
                        <span>Users</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/matching`}>
                        <i className="fas fa-fw fa-user"></i>
                        <span>Matching</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Analytics
                </div>
                <li className="nav-item">
                    <Link className="nav-link" to={`/content`}>
                        <i className="fas fa-fw fa-user"></i>
                        <span>Content Analysis</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/performance`}>
                        <i className="fas fa-fw fa-user"></i>
                        <span>Performance Analysis</span>
                    </Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </Fragment>
    );
};

export default LeftMenu;
