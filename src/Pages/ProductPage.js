import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import AuthContext from "../store/auth-context";

import imageProduct1 from "../Assets/image-art-1.jpg";
import imageProduct2 from "../Assets/image-art-2.jpg";
import imageProduct3 from "../Assets/image-art-3.jpg";
import imageProduct4 from "../Assets/image-art-4.jpg";
import imageProduct1Webp from "../Assets/image-art-1.webp";
import imageProduct2Webp from "../Assets/image-art-2.webp";
import imageProduct3Webp from "../Assets/image-art-3.webp";
import imageProduct4Webp from "../Assets/image-art-4.webp";

import classes from "./ProductPage.module.scss";

const prodcutsArt = [
  {
    id: "p1",
    imgwebp: imageProduct1Webp,
    img: imageProduct1,
    name: "Les Coteaux de Thierceville, temps gris, 1888",
    price: "EUR 3000",
    description:
      " Imaginative-yet-realistic snapshots of Caribbean life are frequent subjects in the work of painter Julio Larraz. Though these tropical settings (drawn from his childhood in Havana, Cuba) are commo  subjects of late-20th-century Latin American art, Larraz's interpretations are characterized by a unique subtlety and precise, detailed technique.",
  },
  {
    id: "p2",
    imgwebp: imageProduct2Webp,
    img: imageProduct2,
    name: "Untitled, 1989",
    price: "EUR 34000",
    description:
      "Victor Brauner’s multi-media practice is now most closely associated with Surrealism. During his training at the School of Fine Arts in Bucharest, Brauner had in fact developed an expressionist style, which he later abandoned during his involvement with various Dadaist and Surrealist art publications. It was Yves Tanguy who formally introduced Brauner to the Surrealists and instigated his involvement with the movement. His practice, which included painting, drawing, and printmaking, drew from disparate symbolic systems like Tarot Cards, Egyptian hieroglyphics, and ancient Mexican texts. Brauner asserted that all of his paintings were autobiographical in some way. He led a turbulent life of constant displacement; anticipating the danger of World War II, Brauner reduced the dimensions of his canvases such that each could fit in his luggage for emergency travel—he called these his “suitcase paintings.”",
  },
  {
    id: "p3",
    imgwebp: imageProduct3Webp,
    img: imageProduct3,
    name: "A Business Woman in her Testarrosa, 2019",
    price: "EUR 155000",
    description:
      "Camille Pissarro’s revelatory approach to landscape painting made him a foundational figure among the Impressionist and Post-Impressionist circles of his day. His light-dappled plein air paintings feature emotive palettes and expressive, spontaneous brushstrokes that capture the vibrancy and movement of nature. Pissarro’s style influenced a generation of artists including Paul Cézanne and Paul Gauguin. The artist later rejected his loose, brushy aesthetic in favor of Pointillist compositions influenced by the canvases of Georges Seurat and Paul Signac. Pissarro exhibited widely in Paris during his lifetime and participated in each of the eight Impressionist exhibitions that took place in the city between 1874 and 1886. His work belongs in the collections of the Tate, the Metropolitan Museum of Art, and the Museum of Fine Arts, Houston, among many other institutions, and has fetched tens of millions on the secondary market.",
  },
  {
    id: "p4",
    imgwebp: imageProduct4Webp,
    img: imageProduct4,
    name: "Juegos de Amor III, 2003",
    price: "EUR 45000",
    description:
      "A key figure in the Russian avant-garde movement (popular in the period between the Russian Revolution of 1917 and 1932), Liubov Popova’s experimentation in abstract painting produced some of Cubism’s most innovative works. Popova’s overlapping planes of painterly architectonics, as she called them (stemming from Kasimir Malevich’s “architectonics”), created dynamic interactions between shapes and colors in both abstract and semi-figurative paintings, often to three-dimensional effect. Late in her career, and inspired by political events in Russia, Popova developed an interest in Suprematism and eventually Constructivism, turning her attention to industrial design, which she deemed more useful art form.",
  },
];

const ProductPage = () => {
  const parms = useParams();
  const authCtx = useContext(AuthContext);

  const product = prodcutsArt.find((product) => product.id === parms.artId);

  // Add products to the cart in authContext
  const addCartHandler = () => {
    const price = Number(product.price.split(" ").slice(-1));
    authCtx.addCartItem({
      id: product.id,
      name: product.name,
      price: price,
    });
  };

  return (
    <section className={classes.product}>
      <picture>
        <source srcSet={product.imgwebp} type="image/webp" />
        <source srcSet={product.img} type="image/jpeg" />
        <img
          src={product.img}
          alt="Les Coteaux de Thierceville, temps gris, 1888"
          className={classes.productImage}
          loading="lazy"
        ></img>
      </picture>
      <div className={classes.productDetails}>
        <h3 className={classes.name}>{product.name}</h3>
        <h3 className={classes.type}>Oil on canvas</h3>
        <p className={classes.size}>
          60 × 72 × 2 in<br></br>
          152.4 × 182.9 × 5.1 cm
        </p>
        <p className={classes.price}>{product.price}</p>
        <p className={classes.shipping}>
          Ships from Romania Shipping: <br></br> Calculated in checkout
        </p>
        <button onClick={addCartHandler} className={classes.button}>
          Add it to the cart
        </button>
        <p className={classes.description}>{product.description}</p>
      </div>
    </section>
  );
};

export default ProductPage;
