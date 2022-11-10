import React from "react";
import "./Check_header.css"
import image from "./images/upload.png"
const Check_header = () => {
  return (
    <>
      <div className="check-header-main">
        <h1 className="check-header-text">Upload Your Files Here</h1>
        <img src={image} alt="upload" className="check-header-logo" />
      </div>
    </>
  );
};

export default Check_header;
