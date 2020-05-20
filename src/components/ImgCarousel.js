import React, { Component } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from "../css/imgCarousel.module.css"
import img from "../images/carousel1.png"
import imgA from "../images/carousel2.png"
export default class ImgCarousel extends Component {
  render() {
    return (
      <div className={styles.carouselContainer}>
        <Carousel
          className={styles.carousel}
          autoPlay
          showThumbs={false}
          infiniteLoop={true}
          interval={10000}
        >
          <div>
            <img src={img} alt="Team  one" />
          </div>
          <div>
            <img src={imgA} alt=" Same Team, different " />
          </div>
        </Carousel>
      </div>
    )
  }
}
