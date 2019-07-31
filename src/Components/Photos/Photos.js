import React from "react";
import Title from "./Title";
import Img from "./Img";
import Explainer from "./Explainer";
import Copyright from "./Copyright";

import "./Photos.scss";

const Photos = props => {
  return (
    <main>
      <div className="display">
        <Title title={props.title} />
        <div className="display__area">
          <Img url={props.url} />
          <Explainer explanation={props.explanation} />
        </div>
        <Copyright copyright={props.copyright} />
      </div>
    </main>
  );
};

export default Photos;
