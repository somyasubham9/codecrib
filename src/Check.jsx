import React,{useState} from "react";
import Banner from "./Banner";
import Middle_check_page from "./Middle_check_page";
import "./Check.css";
import DragDropFile from "./DragDropFile";
import Check_header from "./Check_header";
import Layout from "./Layout";
const Check = () => {
  return (
    <>
    <Layout>
    <div className="check-container">
    <Banner/>
     <Middle_check_page/>
     <Check_header/>
     <DragDropFile/>
    </div>
    </Layout>
     
    </>
  );
};

export default Check;
