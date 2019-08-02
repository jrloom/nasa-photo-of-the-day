import React from "react";
// import "./Header.scss";
import { Container, Header } from "semantic-ui-react";

// const Header = props => {
// return (
// <header className="header">

/* <h1 className="header__title">Astronomy Picture of the Day for {props.date}</h1> */

/* </header> */

// );
// };
//
// export default Header;

const headerContainer = props => {
  return (
    <Container
      style={{
        alignSelf: "flex-start"
      }}
    >
      <Header
        as="h1"
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          fontSize: "3rem",
          fontWeight: "100"
        }}
      >
        Astronomy Picture of the Day for {props.date}
      </Header>
    </Container>
  );
};

export default headerContainer;
