import React, { Component } from "react"
import styles from "../css/footer.module.css"
import links from "../constants/navLinks.js"
import socialIcons from "../constants/social-icons"
import { Link } from "gatsby"

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.links}>
          {links.map((item, index) => {
            if(item.isExternal){
              return (
                    <a href={item.path} target="__blank" rel="nonopener norefferrer">{item.text}</a>
                )
            }
            else{
              return (
                <Link key={index} to={item.path}>
                  {item.text}
                </Link>
              )
            }
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
