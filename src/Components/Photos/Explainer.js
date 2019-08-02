import React from "react";
import { Container } from "semantic-ui-react";

// export default function Explainer(props) {
// return <div className="display__explainer">{props.explanation}</div>;
// }

const Explainer = props => {
  return (
    <Container
      style={{
        width: "50%",
        marginLeft: "5rem",
        fontSize: "1.8rem",
        lineHeight: "1.7"
      }}
    >
      {props.explanation}
    </Container>
  );
};

export default Explainer;
