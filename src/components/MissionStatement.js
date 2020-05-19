import React, { Component } from "react"
import styles from "../css/about.module.css"
import image from "../images/swingingBaseballBat.jpeg"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
export default class MissionStatement extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Our Mission:</h1>
        <div className={styles.body}>
          <p className={styles.content}>
            Our mission is to continue to grow baseball in Cameroon and improve
            the quality of our equipment and our field to give our players a
            safer and more comprehensive experience. The ultimate goal will be
            to build the first baseball stadium in Cameroon, but the short term
            goal is to acquire better equipment and support to continue our
            efforts to better the lives of the Cameroon people by providing
            greater opportunities through sports.
          </p>
          <Carousel
            className={styles.carousel}
            showThumbs={false}
            infiniteLoop={true}
            interval={10000}
            showIndicators={false}
          >
            <div>
              <img src={image} />
            </div>
          </Carousel>
        </div>
      </div>
    )
  }
}
