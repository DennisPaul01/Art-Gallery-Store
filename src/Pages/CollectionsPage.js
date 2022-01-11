import React from "react";
import { Link } from "react-router-dom";

import ScrollContainer from "react-indiana-drag-scroll";

import Line from "../Assets/line.svg";
import ProductImage1 from "../Assets/img-collection-1.png";
import ProductImage2 from "../Assets/img-collection-2.png";
import ProductImage3 from "../Assets/img-collection-3.png";
import ProductImage4 from "../Assets/img-collection-4.png";

import classes from "./CollectionsPage.module.scss";

const CollectionsPage = () => {
  return (
    <section className={classes.collection}>
      <h1>Collections</h1>
      <img src={Line} alt="line"></img>
      <ScrollContainer
        className={`${"scroll-container"} ${classes.verticalScroll}`}
        vertical="false"
        horizontal="true"
      >
        <Link to="/product/p1">
          <div>
            <img src={ProductImage1} alt="Artist Face" loading="lazy"></img>
            <h3>Les Coteaux de Thierceville, temps gris, 1888</h3>
            <p>Price: 3000 EUR</p>
          </div>
        </Link>
        <Link to="/product/p2">
          <div>
            <img src={ProductImage2} alt="Artist Face" loading="lazy"></img>
            <h3>Untitled, 1989</h3>
            <p>Price: 34000 EUR</p>
          </div>
        </Link>
        <Link to="/product/p3">
          <div>
            <img src={ProductImage3} alt="Artist Face" loading="lazy"></img>
            <h3>A Business Woman in her Testarrosa, 2019</h3>
            <p>Price: 155000 EUR</p>
          </div>
        </Link>
        <Link to="/product/p4">
          <div>
            <img src={ProductImage4} alt="Artist Face" loading="lazy"></img>
            <h3>A Business Woman in her Testarrosa, 2019</h3>
            <p>Price: 45000 EUR</p>
          </div>
        </Link>
      </ScrollContainer>
    </section>
  );
};

export default CollectionsPage;
