import React from "react";
import { Link as RouterLink } from "react-router-dom";
import read from "../../assets/icons/read.svg";

import "./Link.scss";
import { ReactSVG } from "react-svg";

const Link = ({ path, text, icon }) => (
  <RouterLink to={path} className="link">
    <div className="link--container">
      <span className="link--text">{text}</span>
      {icon && <ReactSVG src={read} className="link--icon" />}
    </div>
  </RouterLink>
);

export default Link;
