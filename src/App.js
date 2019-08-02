import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";

import Header from "./Components/Header/Header";
import Photos from "./Components/Photos/Photos";

import "./App.scss";

function App() {
  const [date, setDate] = useState();
  const [photo, setPhoto] = useState();
  const [copyright, setCopyright] = useState();
  const [explanation, setExplanation] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=cLorNYnf84IUYM7vgrZB5h5zA926Se601yVj3jni")
      .then(resolve => {
        setDate(resolve.data.date);
        setPhoto(resolve.data.url);
        setTitle(resolve.data.title);
        setExplanation(resolve.data.explanation);
        setCopyright(resolve.data.copyright);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    // <div className="container">
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem 3rem",
        margin: "0 2rem"
      }}
    >
      <Header date={date} />
      <Photos title={title} url={photo} explanation={explanation} copyright={copyright} />
    </Container>
    // </div>
  );
}

export default App;
