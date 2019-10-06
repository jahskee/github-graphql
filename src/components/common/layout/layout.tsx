import React from "react";

import Header from "../header/header";
import Footer from '../footer/footer';

import "../../../styles/index.scss";
import layoutStyles from "./layout.module.scss";
const Layout = (props: any) => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <div style={{padding: 10}}>
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;