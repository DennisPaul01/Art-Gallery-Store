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
  if (props.message === "EMAIL_EXISTS") {
    message = "The email already exist. Try again!";
  }
  if (
    props.message === "WEAK_PASSWORD : Password should be at least 6 characters"
  ) {
    message = "Password should be at least 6 characters";
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
