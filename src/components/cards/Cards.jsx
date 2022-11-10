import React from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import Buttons from "../Buttons/Buttons";

const Cards = (props) => {
  const { fileNum } = props;
  return (
    <>
    
      <Card border="primary" style={{ width: "40%", height: "70%" }}>
        <Card.Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {fileNum}
        </Card.Header>
        <Card.Body style={{padding:'7%' ,boxSizing:'border-box'}}>
          <div className="inside-body">
            <img className="upload-image" src={`${process.env.PUBLIC_URL}images/uploadIcon.png`} alt="upload-icon" />
            <Buttons name="Upload Files" variant="outline-primary" />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
