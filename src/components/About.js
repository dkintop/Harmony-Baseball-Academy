import React, { Component } from "react"
import styles from "../css/about.module.css"
import image from "../images/carouselImage5.png"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
export default class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>About Us:</h1>
        <div className={styles.body}>
          <p className={styles.content}>
            Harmony Baseball Academy is located in Cameroon, Africa. Our mission
            is to provide high quality baseball training to the youth of
            Cameroon while also providing them with mentorship and purpose to
            help develop our players into not only high quality athletes, but
            high quality people. Don't forget to checkout
            <a href="/blog"> Announcements</a> to stay up to date on our
            progress and our merchandise <a href="/store">store</a> if you would
            like to help support our efforts!
          </p>
          <Carousel
            className={styles.carousel}
            showThumbs={false}
            infiniteLoop={true}
            interval={10000}
            showIndicators={false}
            showStatus={false}
          >
            <div>
              <img src={image} alt="About" />
            </div>
          </Carousel>
        </div>
      </div>
    )
  }
}
