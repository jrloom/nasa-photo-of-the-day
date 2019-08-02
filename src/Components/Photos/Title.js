import React from "react";
import { Header } from "semantic-ui-react";

// export default function Title(props) {
// return <h2 className="display__title">{props.title}</h2>;
// }

const Title = props => {
  return (
    <Header
      as="h2"
      style={{
        marginBottom: "3rem",
        fontSize: "2rem"
      }}
    >
      {props.title}
    </Header>
  );
};

export default Title;
