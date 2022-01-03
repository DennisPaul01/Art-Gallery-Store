import React from "react";
import { Link } from "react-router-dom";
import classes from "./Cta.module.scss";

const Cta = (props) => {
  const { link, text } = props;
  return (
    <Link className={classes.cta} to={link}>
      {text}
    </Link>
  );
};

export default Cta;
