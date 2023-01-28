import React from "react";
import "./_Logo.scss";
import logo from "../../media/logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
