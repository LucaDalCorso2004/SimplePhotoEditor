import { useState } from "react";
import "./App.css";
import { Slider } from "./Slider.jsx";

function App() {
  const [currentURL, setURL] = useState("./src/assets/default.jpg");
  const [currentFilter, setFilter] = useState(100);

  function addImage(url) {
    if (url == "") return;
    setURL(url);
  }

  const containerStyle = {
    filter: `brightness(${currentFilter}%)`,
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
        <img className="image" src={currentURL} style={containerStyle}></img>
      </div>

      <div className="box">
        <Slider
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
        <p>{currentFilter}</p>
      </div>
    </>
  );
}

export default App;
