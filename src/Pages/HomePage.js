import React, { Fragment } from "react";
import Cta from "../Components/UI/Cta";
import FirstImage from "../Assets/front-img.jpg";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <Fragment>
      <section className={classes.intro}>
        <div>
          <h1>
            Artorian<br></br>Gallery
          </h1>
          <p>
            Artorian Gallery opened in late 2002, being the second portfolio
            private-run gallery in Romania. The main goal is to promote young
            contemporary art and to consolidate the art market environment. The
            focus is on the generation of artists educated after the fall of the
            Communist regime in 1989.
          </p>
          <Cta link="/collections" text="Discover"></Cta>
        </div>
        <img src={FirstImage}></img>
      </section>
    </Fragment>
  );
};

export default HomePage;
