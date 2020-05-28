import React, { Component } from "react"
import styles from "../css/bio.module.css"
export default class CoachBioCard extends Component {
  render() {
    return (
      <div>
        <img className={styles.imageContainer} src={this.props.coach.image} />
      </div>
    )
  }
}
