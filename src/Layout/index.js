import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./index.css";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
