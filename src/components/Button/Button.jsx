import React from "react";
import cx from "classnames";

import "./Button.scss";
import { ReactSVG } from "react-svg";

import read from "../../assets/icons/read.svg";
import loading from "../../assets/icons/loading.svg";

const Button = props =>
  props.alt ? <ButtonAlt {...props} /> : <ButtonMain {...props} />;

const ButtonMain = ({ text, type, disabled, onClick, icon }) => {
  return (
    <button
      disabled={disabled}
      type={type ? type : "button"}
      onClick={onClick}
      className={cx("button button--main", {
        "button--main--disabled": disabled,
        "button--main--hover": !disabled
      })}
    >
      <span>{text}</span>
      <ReactSVG src={read} className="button--main--icon" />
    </button>
  );
};

const ButtonAlt = ({ text, type, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      type={type ? type : "button"}
      onClick={onClick}
      className={cx("button button--alt", {
        "button--alt--disabled": disabled
      })}
    >
      <span>{text}</span>
      <ReactSVG src={loading} className="button--alt--icon" />
    </button>
  );
};

export default Button;
