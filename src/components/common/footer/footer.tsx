import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from "./footer.module.scss";
const footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className={footerStyles.footer} >
      <div className={footerStyles.copyRight}>Gatsby.js (React, Node, GraphQL)</div>
    </footer>
  )
}

export default footer;