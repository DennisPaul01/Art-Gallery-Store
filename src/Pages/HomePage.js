import React, { Fragment } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
//Components import
import Cta from "../Components/UI/Cta";

// Images import
import FirstImage from "../Assets/front-img.jpg";
import Artist from "../Assets/artist-text.png";
import Place1 from "../Assets/place-img-1.jpg";
import Place2 from "../Assets/place-img-2.jpg";
import Place3 from "../Assets/place-img-3.jpg";
import Place4 from "../Assets/place-img-4.jpg";
import Place5 from "../Assets/place-img-5.jpg";
import Line from "../Assets/line.png";
import TextPrice from "../Assets/text-1-price.png";
import TextPrice2 from "../Assets/text-2-price.png";
import Sell1 from "../Assets/sell-1.jpg";
import Sell2 from "../Assets/sell-2.jpg";
import Star1 from "../Assets/star-1.svg";
import Star2 from "../Assets/star-2.svg";
import Star3 from "../Assets/star-3.svg";
import Star4 from "../Assets/star-4.svg";

import Arrow from "../Assets/arrow.svg";

// SASS import
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
        <img className={classes.imageResp} src={FirstImage} alt="Intro"></img>
      </section>
      <section className={classes.decorationElements}>
        <img className={classes.star1} src={Star1} alt="star-1"></img>
        <img className={classes.arrow} src={Arrow} alt="Arrow"></img>
        <img className={classes.star2} src={Star2} alt="star-2"></img>
      </section>
      <section className={classes.place}>
        <div className={classes.introText}>
          <h2>The Place</h2>
          <p>
            Visit the Artorian Gallery of Bucharest, in the heart of Bucharest,
            Romania.
          </p>
          <img
            className={classes.artistText}
            src={Artist}
            alt="A few words with the artist"
          ></img>
        </div>
        <div className={classes.placeArtists}>
          <img
            className={classes.imageResp}
            src={Place1}
            alt="Place of  the Space"
          ></img>

          <ScrollContainer
            className={`${"scroll-container"} ${classes.verticalScroll}`}
            vertical="false"
            horizontal="true"
          >
            <div className="classes.artistCard">
              <img src={Place2} alt="Artist Face"></img>
              <h3>Alexandra Nichita</h3>
            </div>
            <div className="classes.artistCard">
              <img src={Place3} alt="Artist Face"></img>
              <h3>George Huszar</h3>
            </div>
            <div className="classes.artistCard">
              <img src={Place4} alt="Artist Face"></img>
              <h3>Adriana Chirita</h3>
            </div>
            <div className="classes.artistCard">
              <img src={Place5} alt="Artist Face"></img>
              <h3>Dorin Coltofeanu</h3>
            </div>
          </ScrollContainer>
        </div>
      </section>
      <section className={classes.decorationElements}>
        <img className={classes.star3} src={Star3} alt="star-3"></img>
      </section>
      <section className={classes.sells}>
        <h1>Last sells</h1>
        <img className={classes.line} src={Line} alt="line"></img>
        <div className={classes.soldPictures}>
          <div>
            <h2>Abstract landscape giclee</h2>
            <p className={classes.paragraph}>
              Imaginative-yet-realistic snapshots of Caribbean life are frequent
              subjects in the work of painter Julio Larraz. Though these
              tropical settings (drawn from his childhood in Havana, Cuba) are
              common subjects of late-20th-century Latin American art, Larraz's
              interpretations are characterized by a unique subtlety and
              precise, detailed technique.
            </p>

            <div className={classes.price}>
              <p>SOLD:</p>
              <img
                className={classes.priceImage}
                src={TextPrice}
                alt="3000 EUR"
              ></img>
            </div>
          </div>
          <img
            className={classes.imageResp}
            src={Sell1}
            alt="Abstract landscape giclee"
          ></img>
        </div>
        <section className={classes.decorationElements}>
          <img className={classes.star4} src={Star4} alt="star-4"></img>
        </section>
        <div className={classes.soldPictures}>
          <img
            src={Sell2}
            className={classes.imageResp}
            alt="Abstract landscape giclee"
          ></img>
          <div className={classes.description}>
            <h2>Untitled, 1987</h2>
            <p className={classes.paragraph}>
              Camille Pissarro’s revelatory approach to landscape painting made
              him a foundational figure among the Impressionist and
              Post-Impressionist circles of his day. His light-dappled plein air
              paintings feature emotive palettes and expressive, spontaneous
              brushstrokes that capture the vibrancy and movement of nature.
            </p>
            <div className={classes.price}>
              <p>SOLD:</p>
              <img
                className={classes.priceImage}
                src={TextPrice2}
                alt="3000 EUR"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.decorationElements}>
        <img className={classes.star3} src={Star3} alt="star-4"></img>
      </section>
    </Fragment>
  );
};

export default HomePage;
