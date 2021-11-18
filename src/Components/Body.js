import React from "react";
import { images } from "./images.json";
import "./body.css"

function Body() {
  return (

      <div className="image-container">
        {images.map((animals) => {
          return (
            <div className="animal" key={animals.name}>
              <h1 className="name">{animals.name}</h1>
              <img
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

  );
}

export default Body;
