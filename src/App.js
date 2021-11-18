// import { useState } from "react";
import "./App.css";
import { images } from "./images.json";

function App() {
  // const [size, setSize] = useState(0)

  console.log(images);
  return (
    <div className="App">
      <div className="image-container">
        {images.map((animals) => {
          function imageSize() {
            console.log("haiiii", animals.url);
          }
          return (
            <div className="animal" key={animals.name}>
              <h1 className="name">{animals.name}</h1>
              <img
                onClick={imageSize}
                className="image"
                src={animals.url}
                // style={{ height: "300px", width: "300px" }}
                alt=""
              />
              <h3 className="description">{animals.description}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
