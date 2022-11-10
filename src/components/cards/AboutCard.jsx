import React from "react";
import "./AboutCard.css";

const AboutCard = (props) => {
  return (
    <>
      <div className="about-card-div">
        <div className="about-card-icon">
        <img
            src={`${process.env.PUBLIC_URL}images/${props.img_url}`}
            className="image-fit-about"
            alt="about page img"
        />
        </div>
        <div className="about-card-heading">{props.about_head}</div>
        <div className="about-card-para">
          {props.about_para}
        </div>
      </div>
    </>
  );
};

export default AboutCard;
