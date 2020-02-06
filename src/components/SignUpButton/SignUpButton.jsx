import React from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SignUpButton.scss";

const SignUpButton = ({ text, type, disabled, onClick, icon }) => {
  return (
    <button
      disabled={disabled}
      type={type ? type : "button"}
      onClick={onClick}
      className={cx("sign-up-button", {
        "sign-up-button--disabled": disabled,
        "sign-up-button--hover": !disabled
      })}
    >
      <span className="sign-up-button--text">{text}</span>
      <span className="sign-up-button--icon">
        <FontAwesomeIcon icon="check" />
      </span>
    </button>
  );
};

export default SignUpButton;
