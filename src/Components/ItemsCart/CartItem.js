import React from "react";
import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  return (
    <div className={classes.product}>
      <h3>{props.name}</h3>
      <p>Price: {props.price} EUR</p>
    </div>
  );
};

export default CartItem;
