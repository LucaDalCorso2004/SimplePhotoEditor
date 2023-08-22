import { useState } from "react";
import "./App.css";

function App() {
  const [currentURL, setURL] = useState("./src/assets/default.jpg");

  function addImage(url) {
    if (url == "") return;

    setURL(url);
  }

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
        <img className="image" src={currentURL}></img>
      </div>
    </>
  );
}

export default App;
