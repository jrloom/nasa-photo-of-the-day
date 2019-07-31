import React from "react";
import Title from "./Title";
import Img from "./Img";
import Explainer from "./Explainer";

import "./Photos.scss";

const Photos = props => {
  return (
    <main>
      <div className="display">
        {/* <h2 className="display__title">{props.title}</h2> */}
        <Title title={props.title} />
        <div className="display__area">
          <Img url={props.url} />
          <Explainer explanation={props.explanation} />
        </div>
      </div>
    </main>
  );
};

export default Photos;
