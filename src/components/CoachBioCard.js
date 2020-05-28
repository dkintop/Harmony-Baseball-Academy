import React, { Component } from "react"
import styles from "../css/bio.module.css"
import { Carousel } from "react-responsive-carousel"
import { Card } from "react-bootstrap/Card"
export default class CoachBioCard extends Component {
  render() {
    return (
      <div className={styles.bioCard}>
        <Carousel
          className={styles.carousel}
          showThumbs={false}
          infiniteLoop={true}
          interval={10000}
          showIndicators={false}
          showStatus={false}
        >
          <img className={styles.imageContainer} src={this.props.coach.image} />
        </Carousel>

        <div className={styles.bioContent}>{this.props.coach.bio}</div>
      </div>
    )
  }
}
