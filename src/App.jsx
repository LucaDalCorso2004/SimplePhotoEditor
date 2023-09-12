import { useState } from "react";
import "./App.css";
import { Slider } from "./Slider.jsx";
import * as htmlToImage from "html-to-image";

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

  function uploadImage(target) {
    const [file] = target.files; // take files out of the input
    const fileURL = URL.createObjectURL(file); // create URL from file list
    setURL(fileURL);
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

  async function downloadTest() {
    const imageSrc = document.getElementById(`preview`);
    const dataUrl = await htmlToImage.toPng(imageSrc);

    // download image
    const link = document.createElement("a");
    const urlSlice = imageSrc.src.split("/");
    console.log(urlSlice);
    const fileName = urlSlice[urlSlice.length - 1];

    link.download = `filtered-${fileName}`;
    link.href = dataUrl;
    link.click();
  }

  return (
    <>
      <div className="editor">
        <div className="section">
          <h2>Add Image</h2>
          <input
            accept="image/*"
            type="file"
            onChange={(e) => uploadImage(e.target)}
            className="textinput"
          />
          <p>or</p>
          <input
            onChange={(e) => addImage(e.target.value)}
            type="text"
            placeholder="Input URL"
            className="textinput"
          ></input>
          <h2 className="sectionTitle">Preview</h2>
          <img
            className="image"
            src={currentURL}
            style={filterStyle}
            alt="No image found"
            id="preview"
          />
          <button onClick={() => downloadTest()}>Download Image</button>
        </div>

        <div className="section">
          <h2>Filter Selection</h2>
          <div className="filterSection">
            {Object.entries(filters).map(([filter, value]) => (
              <div className="filterItem" key={filter}>
                <Slider
                  handleValueChange={(newValue) => {
                    handleFilterChange(filter, newValue);
                  }}
                  defaultValue={value}
                  maxValue={
                    filter === "hueRotate"
                      ? 360
                      : filter === "saturate" || filter === "brightness"
                      ? 200
                      : 100
                  }
                  minValue={0}
                />
                <p className="sliderDesc">
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}: {value}
                  {filter === "blur"
                    ? "px"
                    : filter === "hueRotate"
                    ? "deg"
                    : "%"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
