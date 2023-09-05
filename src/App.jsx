import { useState } from "react";
import "./App.css";
import { Slider } from "./Slider.jsx";

const defaultFilters = {
  brightness: 100,
  sepia: 0,
  blur: 0,
  contrast: 100,
  saturate: 100,
  hueRotate: 0,
  invert: 0,
  opacity: 100,
  grayscale: 0,
};

const filterFunctions = {
  brightness: "brightness",
  sepia: "sepia",
  blur: "blur",
  contrast: "contrast",
  saturate: "saturate",
  hueRotate: "hue-rotate",
  invert: "invert",
  opacity: "opacity",
  grayscale: "grayscale",
};

function App() {
  const [currentURL, setURL] = useState("./src/assets/default.jpg");
  const [filters, setFilters] = useState(defaultFilters);

  function addImage(url) {
    if (url === "") return;
    setURL(url);
  }

  const filterStyle = {
    filter: Object.entries(filters)
      .map(
        ([filter, value]) =>
          `${filterFunctions[filter]}(${value}${
            filter === "blur" ? "px" : filter === "hueRotate" ? "deg" : "%"
          })`
      )
      .join(" "),
  };

  const handleFilterChange = (filter, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }));
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
        <img
          className="image"
          src={currentURL}
          style={filterStyle}
          alt="Filtered"
        />
      </div>

      <div className="box">
        {Object.entries(filters).map(([filter, value]) => (
          <div key={filter}>
            <Slider
              handleValueChange={(newValue) => {
                handleFilterChange(filter, newValue);
              }}
              defaultValue={value}
              maxValue={filter === "blur" || filter === "hueRotate" ? 200 : 100}
              minValue={0}
            />
            <p>
              {filter.charAt(0).toUpperCase() + filter.slice(1)}: {value}
              {filter === "blur" ? "px" : filter === "hueRotate" ? "deg" : "%"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
