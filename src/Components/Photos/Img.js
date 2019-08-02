import React from "react";
import { Image } from "semantic-ui-react";

// export default function Img(props) {
// return <img className="display__img" src={props.url} alt="SPACE!" />;
// }

const Img = props => {
  return (
    <Image
      src={props.url}
      alt="SPACE!"
      style={{
        height: "50rem",
        maxHeight: "50rem"
      }}
    />
  );
};

export default Img;
