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

  toggleNav = () => {
    return this.setState(prevState => {
      return {
        ...prevState,
        isOpen: !this.state.isOpen,
      }
    })
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
            <button
              type="button"
              className={styles.logoBtn}
              onClick={this.toggleNav}
            >
              <FaAlignRight className={styles.logoIcon} />
            </button>
          </div>
          <ul
            className={
              this.state.isOpen
                ? `${styles.navLinks} ${styles.showNav}`
                : `${styles.navLinks}`
            }
          >
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              )
            })}
          </ul>
          <div className={styles.navSocialLinks}>
            {socialIcons.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    )
  }
}
