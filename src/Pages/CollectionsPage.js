import React from "react";
import { Link } from "react-router-dom";

import ScrollContainer from "react-indiana-drag-scroll";

import Line from "../Assets/line.svg";
import ProductImage1 from "../Assets/img-collection-1.png";
import ProductImage2 from "../Assets/img-collection-2.png";
import ProductImage3 from "../Assets/img-collection-3.png";
import ProductImage4 from "../Assets/img-collection-4.png";
import ProductImage1webp from "../Assets/img-collection-1.webp";
import ProductImage2webp from "../Assets/img-collection-2.webp";
import ProductImage3webp from "../Assets/img-collection-3.webp";
import ProductImage4webp from "../Assets/img-collection-4.webp";

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
            <picture>
              <source srcSet={ProductImage1webp} type="image/webp" />
              <source srcSet={ProductImage1} type="image/jpeg" />
              <img
                src={ProductImage1}
                alt="Art-1"
                loading="lazy"
                width="681"
                height="888"
              ></img>
            </picture>
            <h3>Les Coteaux de Thierceville, temps gris, 1888</h3>
            <p>Price: 3000 EUR</p>
          </div>
        </Link>
        <Link to="/product/p2">
          <div>
            <picture>
              <source srcSet={ProductImage2webp} type="image/webp" />
              <source srcSet={ProductImage2} type="image/jpeg" />
              <img
                src={ProductImage2}
                alt="Art-2"
                loading="lazy"
                width="681"
                height="888"
              ></img>
            </picture>
            <h3>Untitled, 1989</h3>
            <p>Price: 34000 EUR</p>
          </div>
        </Link>
        <Link to="/product/p3">
          <div>
            <picture>
              <source srcSet={ProductImage3webp} type="image/webp" />
              <source srcSet={ProductImage3} type="image/jpeg" />
              <img
                src={ProductImage3}
                alt="Art-3"
                loading="lazy"
                width="681"
                height="888"
              ></img>
            </picture>
            <h3>A Business Woman in her Testarrosa, 2019</h3>
            <p>Price: 155000 EUR</p>
          </div>
        </Link>
        <Link to="/product/p4">
          <div>
            <picture>
              <source srcSet={ProductImage4webp} type="image/webp" />
              <source srcSet={ProductImage4} type="image/jpeg" />
              <img
                src={ProductImage3}
                alt="Art-3"
                loading="lazy"
                width="681"
                height="888"
              ></img>
            </picture>
            <h3>A Business Woman in her Testarrosa, 2019</h3>
            <p>Price: 45000 EUR</p>
          </div>
        </Link>
      </ScrollContainer>
    </section>
  );
};

export default CollectionsPage;
