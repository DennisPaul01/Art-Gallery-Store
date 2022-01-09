import React, { useContext, useRef } from "react";
import Line from "../Assets/line.svg";
import classes from "./CartPage.module.scss";
import AuthContext from "../store/auth-context";

import CartItem from "../Components/ItemsCart/CartItem";

const CartPage = () => {
  const adressRef = useRef();
  const authCtx = useContext(AuthContext);
  let cartItems;
  let totalPrice = 0;

  if (authCtx.cart.length === 0) {
    cartItems = <p>Nothing in the cart</p>;
  }
  console.log(authCtx.cart);
  cartItems = authCtx.cart.map((item) => {
    totalPrice += item.price;
    return <CartItem name={item.name} price={item.price}></CartItem>;
  });

  return (
    <section className={classes.cart}>
      <h1>Cart</h1>
      <img src={Line} alt="line"></img>
      <div className={classes.cartDetails}>
        <div className={classes.productCart}>
          <h2>Cart Items</h2>
          {cartItems}

          <h2 className={classes.totalPrice}>Total: {totalPrice} EUR</h2>
          <button>Confirm</button>
        </div>
        <div className={classes.accountDetailsCart}>
          <h2>Account details</h2>
          <p>Email: {authCtx.emailUser}</p>
          <label htmlFor="adress">Your Adress</label>
          <br></br>
          <input type="text" id="adress" ref={adressRef} required></input>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
