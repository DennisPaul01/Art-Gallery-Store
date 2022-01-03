import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={classes.backgroundInterior}>
      <Navbar></Navbar>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
