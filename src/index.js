import React from "react";
import ReactDOM from "react-dom";

const img =
  "https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="false">
      Some Random Images
    </h1>
    <div>
      <img alt="image1" src={img}></img>
      <img alt="image2" src="https://picsum.photos/seed/picsum/200/300"></img>
      <img alt="image3" src="https://picsum.photos/200/300?grayscale"></img>
    </div>
  </div>,
  document.getElementById("root")
);
