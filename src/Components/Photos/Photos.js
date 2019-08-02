import React from "react";
import { Container } from "semantic-ui-react";

import Title from "./Title";
import Img from "./Img";
import Explainer from "./Explainer";
import Copyright from "./Copyright";

import "./Photos.scss";

const Photos = props => {
  // return (
  //   <main>
  //     <div className="display">
  //       <Title title={props.title} />
  //       <div className="display__area">
  //         <Img url={props.url} />
  //         <Explainer explanation={props.explanation} />
  //       </div>
  //       <Copyright copyright={props.copyright} />
  //     </div>
  //   </main>
  // );
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Title title={props.title} />
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Img url={props.url} />
        <Explainer explanation={props.explanation} />
      </Container>
      <Copyright copyright={props.copyright} />
    </Container>
  );
};

export default Photos;
