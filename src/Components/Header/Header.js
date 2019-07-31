import React from "react";
import "./Header.scss";

const Header = props => {
  return (
    <header className="header">
      <h1 className="header__title">Astronomy Picture of the Day for {props.date}</h1>
    </header>
  );
};

export default Header;
