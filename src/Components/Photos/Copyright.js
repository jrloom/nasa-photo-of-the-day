import React from "react";
import { Container } from "semantic-ui-react";

// export default function Copyright(props) {
// return <div className="display__copyright">&copy; {props.copyright}</div>;
// }

const Copyright = props => {
  if (props.hasOwnProperty("copyright")) {
    return (
      <Container
        style={{
          marginTop: "4rem"
        }}
      >
        {props.copyright}
      </Container>
    );
  } else {
    return "";
  }
};

export default Copyright;
