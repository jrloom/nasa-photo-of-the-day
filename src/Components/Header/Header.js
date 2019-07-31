import React from "react";
import { Nav } from "../Nav/Nav";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Astronomy Picture of the Day</h1>
      <Nav />
    </header>
  );
};

export default Header;
