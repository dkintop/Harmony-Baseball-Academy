import React, { Component } from "react"
import styles from "../css/bio.module.css"
import socialIcons from "../constants/social-icons.js"
export default class CoachBioCard extends Component {
  conditionalLinks = coach => {
    if (coach.name === "Arsel Giowou") {
      return socialIcons.map((item, index) => {
        return (
          <a
            style={{ margin: "5px" }}
            key={index}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            {item.icon}
          </a>
        )
      })
    }
  }

  render() {
    return (
      <div className={styles.card}>
        <img
          className={styles.cardImg}
          src={this.props.coach.image}
          alt={this.props.coach.name}
        />
        <h1>{this.props.coach.name}</h1>
        <h3>{this.props.coach.role}</h3>
        {this.conditionalLinks(this.props.coach)}
        <p> {this.props.coach.bio}</p>
      </div>
    )
  }
}
