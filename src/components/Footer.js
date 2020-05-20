import React, { Component } from "react"
import styles from "../css/footer.module.css"
import links from "../constants/navlinks"
import socialIcons from "../constants/social-icons"
import { Link } from "gatsby"
import { FaRproject } from "react-icons"
export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.links}>
          {links.map((item, index) => {
            return (
              <Link key={index} to={item.path}>
                {item.text}
              </Link>
            )
          })}
        </div>
        <div className={styles.icons}>
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            )
          })}
        </div>
      </footer>
    )
  }
}
