import React from "react";
import Layout from "../Layout";
import "./Home.css";
function Home() {
  return (
    <Layout>
      <div className="home-parent">
        <div className="d-flex parts align-items-center">
          <div className="part1 text-center text-white d-flex align-items-center justify-content-center flex-column">
            <h3 className="my-5" data-aos="slide-right">
              <b>Developed your Code !</b>
            </h3>
            <div className="h-50 p-1">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_z2vighsa.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="part2 text-center text-white d-flex align-items-center justify-content-center flex-column">
            <div className="h-50 p-2">
              <lottie-player
                src="https://assets7.lottiefiles.com/private_files/lf30_wqypnpu5.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h3 className="my-5" data-aos="slide-left">
              <b>Code Stolen ?? </b>
            </h3>
          </div>
        </div>

        <div className="seperator">
          <span>CODECRIB</span>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
