import React from "react";

import classes from "./LazySpinner.module.scss";

const LazySpinner = () => {
  return (
    <section className={classes.backgroundSpinner}>
      <div className={classes.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default LazySpinner;
