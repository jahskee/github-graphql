import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Logo from './images/hero-image.png';
import headerStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={headerStyles.header}>
      <div style={{ background: "darkgray", height: 150, width: "100%" }}>
        <h1 style={{marginTop: 40, fontSize: 28, color: "#707070"}}> Github GraphQL API v4</h1>
        <h1 style={{fontSize: 28, color: "#676767"}}> React Server-Side</h1>
       </div>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
          <li style={{color: "lightgray"}}>/</li>
          <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/search-repo">Search Repo</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;