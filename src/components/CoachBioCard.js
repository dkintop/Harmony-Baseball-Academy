import React, { Component } from "react"
import styles from "../css/bio.module.css"

export default class CoachBioCard extends Component {
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
        <p> {this.props.coach.bio}</p>
      </div>
    )
  }
}
