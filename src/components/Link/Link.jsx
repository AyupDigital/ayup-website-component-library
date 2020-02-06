import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ path, text }) => <RouterLink to={path}>{text}</RouterLink>;

export default Link;
