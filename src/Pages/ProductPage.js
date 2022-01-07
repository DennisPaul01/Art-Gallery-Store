import React from "react";
import classes from "./ProductPage.module.scss";
import imageProduct1 from "../Assets/image-art-1.jpg";

const ProductPage = () => {
  return (
    <section className={classes.product}>
      <img
        src={imageProduct1}
        alt="Les Coteaux de Thierceville, temps gris, 1888"
        className={classes.productImage}
      ></img>
      <div className={classes.productDetails}>
        <h3 className={classes.name}>
          Les Coteaux de Thierceville, temps gris, 1888
        </h3>
        <h3 className={classes.type}>Oil on canvas</h3>
        <p className={classes.size}>
          60 × 72 × 2 in<br></br>
          152.4 × 182.9 × 5.1 cm
        </p>
        <p className={classes.price}>EUR 30,000</p>
        <p className={classes.shipping}>
          Ships from Romania Shipping: <br></br> Calculated in checkout
        </p>
        <button className={classes.button}>Add it to the cart</button>
        <p className={classes.description}>
          Imaginative-yet-realistic snapshots of Caribbean life are frequent
          subjects in the work of painter Julio Larraz. Though these tropical
          settings (drawn from his childhood in Havana, Cuba) are common
          subjects of late-20th-century Latin American art, Larraz's
          interpretations are characterized by a unique subtlety and precise,
          detailed technique.
        </p>
      </div>
    </section>
  );
};

export default ProductPage;
