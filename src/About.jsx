import React, { useState } from "react";
import './About.css';
import AboutCard from "./components/cards/AboutCard";
import AboutCodeCribPageArray from "./components/DataArrays/AboutCodeCribPageArray";
import Layout from "./Layout";

const AboutArray = [{ name: "Subham Rath", img_name: "subham", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quae nisi ratione dolor. Deserunt rem, culpa voluptate, commodi modi suscipit aspernatur nulla alias dolorum error aperiam sunt explicabo obcaecati atque." }, { name: "Punit", img_name: "punit", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quae nisi ratione dolor. Deserunt rem, culpa voluptate, commodi modi suscipit aspernatur nulla alias dolorum error aperiam sunt explicabo obcaecati atque." }, { name: "Naman Goyal", img_name: "naman", about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quae nisi ratione dolor. Deserunt rem, culpa voluptate, commodi modi suscipit aspernatur nulla alias dolorum error aperiam sunt explicabo obcaecati atque." }, { name: "Somya Subham Dash", img_name: "somya", about: "Hello! , I'm a Computer Engineering undergrad at International Institute of Information Technology (IIIT) Bhubaneswar.I have over a year of experience in Web Development. I have worked on variety of tech-stacks to strengthen my Front-End skills and Currently I am currently learning Back-End technologies." }, { name: "Swagat Satprem Jena", img_name: "swagat", about: "Hi, I am a Passionate full stack web developer using JavaScript, HTML5, CSS, NodeJS and MongoDB to build all aspects of the user experience, user interface for client-facing landing pages and unsung backend servers. Specializing in using jQuery, ReactJS and ExpressJS to build interactive websites. " }];

function About() {

  const [i, updI] = useState(1);
  const [show, updateShow] = useState({ name: AboutArray[0].name, img_name: AboutArray[0].img_name, about: AboutArray[0].about });

  const myTimeout = setTimeout(() => {
    // console.log(i);
    updI((i + 1) % 5);
    updateShow({ name: AboutArray[i].name, img_name: AboutArray[i].img_name, about: AboutArray[i].about })
  }, 5000);


  return <>
    <Layout>
      <div className="about-page-container">
        <h1 className="about-code-crib-heading">WHAT IS <span style={{ color: "#FCE700" }}>CODECRIB</span>?</h1>
        <div className="about-code-crib-page-container">
          {AboutCodeCribPageArray.map((value) => {
            return <AboutCard img_url={value.img_url} about_head={value.about_head} about_para={value.about_para}></AboutCard>;
          })}
        </div>
        <h1 className="about-us-heading">OUR <span style={{ color: "#FCE700" }}>TEAM</span></h1>
        <div className="about-us-card">
          <div className="about-us-img-div">
            <img src={`${process.env.PUBLIC_URL}images/${show.img_name}.jpg`} alt="swagat-img" className="image-about" />
          </div>
          <div className="about-us-text-div">
            <h3 className="about-name">{show.name}</h3>
            <h6 className="about-role">Web Developer</h6>
            <p className="about-para">{show.about}</p>
          </div>
        </div>
      </div>
    </Layout>
  </>;
}

export default About;