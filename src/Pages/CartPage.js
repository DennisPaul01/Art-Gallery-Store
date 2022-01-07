import React from "react";
import Line from "../Assets/line.svg";
import classes from "./CartPage.module.scss";

const CartPage = () => {
  return (
    <section className={classes.cart}>
      <h1>Cart</h1>
      <img src={Line} alt="line"></img>
      <div className={classes.cartDetails}>
        <div className={classes.productCart}>
          <h2>History purcases</h2>
          <div className={classes.product}>
            <h3>Les Coteaux de Thierceville, temps gris, 1888</h3>
            <p>Price: 3000 EUR</p>
          </div>
          <div className={classes.product}>
            <h3>Les Coteaux de Thierceville, temps gris, 1888</h3>
            <p>Price: 3000 EUR</p>
          </div>
          <h2 className={classes.totalPrice}>Total: 6000 EUR</h2>
          <button>Confirm</button>
        </div>
        <div className={classes.accountDetailsCart}>
          <h2>Account details</h2>
          <p>Name: Dennis Paul</p>
          <p>Email: denismucioiu@yahoo.com</p>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
