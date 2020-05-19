import React, { Component } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import logo from "../images/carouselImage1.png"
import img from "../images/carouselImage2.png"
import styles from "../css/imgCarousel.module.css"
export default class ImgCarousel extends Component {
  render() {
    return (
      <div className={styles.carouselContainer}>
        <Carousel className={styles.carousel} autoPlay showThumbs={false}>
          <div>
            <img src={logo} />
          </div>
          <div>
            <img src={img} />
          </div>
        </Carousel>
      </div>
    )
  }
}
