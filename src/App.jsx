import { useState } from "react";
import "./App.css";
import { Slider } from "./Slider.jsx";

function App() {
  const [currentURL, setURL] = useState("./src/assets/default.jpg");
  const [currentBrightness, setBrightness] = useState(100);
  const [currentSepia, setSepia] = useState(0);
  const [currentBlur, setBlur] = useState(0);
  const [currentContrast, setContrast] = useState(100);
  const [currentSaturate, setSaturate] = useState(100);
  const [currentHueRotate, setHueRotate] = useState(0);
  const [currentInvert, setInvert] = useState(0);
  const [currentOpacity, setOpacity] = useState(100);
  const [currentGrayscale, setGrayscale] = useState(0);

  function addImage(url) {
    if (url == "") return;
    setURL(url);
  }

  const filterStyle = {
    filter: `brightness(${currentBrightness}%) sepia(${currentSepia}%) blur(${currentBlur}px) contrast(${currentContrast}%) saturate(${currentSaturate}%) hue-rotate(${currentHueRotate}deg) invert(${currentInvert}%) opacity(${currentOpacity}%) grayscale(${currentGrayscale}%)`,
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
          defaultValue={100}
          maxValue={200}
          minValue={0}
        />
        <p>Brightness: {currentBrightness}%</p>

        <Slider
          handleValueChange={(value) => {
            setSepia(value);
          }}
          defaultValue={0}
          maxValue={100}
          minValue={0}
        />
        <p>Sepia: {currentSepia}%</p>

        <Slider
          handleValueChange={(value) => {
            setBlur(value);
          }}
          defaultValue={0}
          maxValue={200}
          minValue={0}
        />
        <p>Blur: {currentBlur}px</p>

        <Slider
          handleValueChange={(value) => {
            setContrast(value);
          }}
          defaultValue={100}
          maxValue={200}
          minValue={0}
        />
        <p>Contrast: {currentContrast}%</p>

        <Slider
          handleValueChange={(value) => {
            setSaturate(value);
          }}
          defaultValue={100}
          maxValue={200}
          minValue={0}
        />
        <p>Saturate: {currentSaturate}%</p>

        <Slider
          handleValueChange={(value) => {
            setHueRotate(value);
          }}
          defaultValue={0}
          maxValue={360}
          minValue={0}
        />
        <p>Hue-Rotate: {currentHueRotate}deg</p>

        <Slider
          handleValueChange={(value) => {
            setInvert(value);
          }}
          defaultValue={0}
          maxValue={100}
          minValue={0}
        />
        <p>Invert: {currentInvert}%</p>

        <Slider
          handleValueChange={(value) => {
            setOpacity(value);
          }}
          defaultValue={100}
          maxValue={100}
          minValue={0}
        />
        <p>Opacity: {currentOpacity}%</p>
        
        <Slider
          handleValueChange={(value) => {
            setGrayscale(value);
          }}
          defaultValue={0}
          maxValue={100}
          minValue={0}
        />
        <p>Grayscale: {currentGrayscale}%</p>
      </div>
    </>
  );
}

export default App;
