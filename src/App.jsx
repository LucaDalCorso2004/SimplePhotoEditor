import { useState } from "react";
import "./App.css";
import { Slider } from "./Slider.jsx";

function App() {
  const [currentURL, setURL] = useState("./src/assets/default.jpg");
  const [currentBrightness, setBrightness] = useState(100);
  const [currentSepia, setSepia] = useState(0);

  function addImage(url) {
    if (url == "") return;
    setURL(url);
  }

  const filterStyle = {
    filter: `brightness(${currentBrightness}%) sepia(${currentSepia}%)`,
  };

  return (
    <>
      <h1 className="title">Input Image</h1>
      <div className="box">
        <input
          onChange={(e) => addImage(e.target.value)}
          type="text"
          placeholder="Input URL"
        ></input>
        <h3>Preview</h3>
        <img className="image" src={currentURL} style={filterStyle}></img>
      </div>

      <div className="box">
        <Slider
          handleValueChange={(value) => {
            setBrightness(value);
          }}
        />
        <p>Brightness: {currentBrightness}%</p>

        <Slider
          handleValueChange={(value) => {
            setSepia(value);
          }}
        />
        <p>Sepia: {currentSepia}%</p>
      </div>
    </>
  );
}

export default App;
