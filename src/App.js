import React, { useState, useEffect } from "react";
import axios from "axios";

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
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(resolve => {
        console.log(resolve.data);
        setDate(resolve.data.date);
        setPhoto(resolve.data.url);
        setTitle(resolve.data.title);
        setExplanation(resolve.data.explanation);
        setCopyright(resolve.data.copyright);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <Header date={date} />
      <Photos title={title} url={photo} explanation={explanation} copyright={copyright} />
    </div>
  );
}

export default App;
