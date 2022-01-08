import React from "react";
import classes from "./Modal.module.scss";

const Modal = (props) => {
  let message;
  if (props.message === "INVALID_PASSWORD") {
    message = "Wrong Password";
  }
  if (props.message === "PASSWORD_NO_THE_SAME") {
    message = "Passwords are not the same. Try again!";
  }
  if (props.message === "EMAIL_NOT_FOUND") {
    message = "The email wasn't found. Try again!";
  }

  return (
    <section className={classes.modal}>
      <div className={classes.modalContent}>
        <p>{message}</p>
        <button onClick={props.cta}>Confirm</button>
      </div>
    </section>
  );
};

export default Modal;
