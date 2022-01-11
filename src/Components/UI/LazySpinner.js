import React from "react";

import classes from "./LazySpinner.module.scss";

const LazySpinner = () => {
  return (
    <div className={classes.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LazySpinner;
