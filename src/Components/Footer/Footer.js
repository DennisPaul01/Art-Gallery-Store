import React from "react";

// Import images
import logo from "../../Assets/logo.svg";
import Facebook from "../../Assets/facebook-logo.svg";
import Instagram from "../../Assets/instagram-logo.svg";
import Pinterest from "../../Assets/pinterest-logo.svg";

//Import classes
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.description}>
        <img className={classes.logoImage} src={logo} alt="Logo"></img>
        <p>
          Our website, Artorian Gallery, offers constant original coverage of
          the interior design and architecture worlds, new shops and products,
          travel destinations, art and cultural events, celebrity style, and
          high-end real estate as well as access to print features and images
          from the Artorian Gallery archives.
        </p>
      </div>
      <div className={classes.socials}>
        <a href="/facebook">
          <img className={classes.facebook} src={Facebook} alt="Facebook"></img>
        </a>
        <a href="/instagram">
          <img
            className={classes.instagram}
            src={Instagram}
            alt="Instagram"
          ></img>
        </a>
        <a href="/pinterest">
          <img
            className={classes.pinterest}
            src={Pinterest}
            alt="Pinterest"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
