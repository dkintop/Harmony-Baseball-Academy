import React, { Component } from "react"
import { Link } from "gatsby"
import { FaRProject } from "react-icons/fa"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/navLinks"
import socialIcons from "../constants/social-icons"
import logo from "../images/Main-Logo.png"
export default class Navbar extends Component {
  state = {
    isOpen: false,
  }

  render() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <img
              className={styles.mainLogo}
              src={logo}
              alt="Harmony Baseball Logo"
            />
          </div>
        </div>
      </nav>
    )
  }
}
