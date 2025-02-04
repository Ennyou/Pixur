import { Outlet, Link } from "react-router-dom";
import React from "react";

const Layout = () => {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img src="./logo.png" />
        </Link>

        <Link to="/about" className="about">
          關於網站
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
