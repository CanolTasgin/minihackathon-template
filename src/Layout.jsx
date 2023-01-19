import React from "react";
import "./Layout.css";
import NavigationBar from "./components/layout/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <NavigationBar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
