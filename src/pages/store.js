import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import storeImage from "../images/teespring.png"
import styles from "../css/store.module.css"
import { Carousel } from "react-responsive-carousel"
import storeData from "../constants/storeData"
export default class Store extends Component {
  render() {
    return (
      <>
        <SEO
          title="Merchandise Store| Harmony Baseball Academy"
          description="Merchandise store for Harmony Baseball Academy. Help support our mission to provide coaching and mentorship to the youth of Cameroon by purchasing merchandise. Help improve the lives of the Cameroonian people through your purchase."
        />
        <Layout>
          <h1 className={styles.textContent}>
            Harmony Baseball Academy Merchandise
          </h1>
          <h3 className={styles.textContent}>
            We are proud to bring you the Harmony Baseball Academy merchandise
            store powered by Teespring.com!
          </h3>
          <a
            href={storeData.teespringURL}
            target="__blank"
            rel="nonopener norefferrer"
          >
            <div className={styles.storeImageBox}>
              <Carousel
                className={styles.carousel}
                showThumbs={false}
                infiniteLoop={true}
                interval={10000}
                showIndicators={false}
                showStatus={false}
              >
                <img
                  src={storeImage}
                  alt="Harmony Baseball Academy Store"
                  className={styles.storeImage}
                />
              </Carousel>
            </div>
          </a>
          <h1 className={styles.textContent}>
            About the Harmony Baseball Academy Merchandise Store:
          </h1>
          <p className={styles.textContent}>
            All Proceeds go toward supporting the Mission of Harmony Baseball
            Academy and the families of the children involved.
          </p>
          <div className={styles.quote}>
            <p style={{ fontStyle: "italic" }}>
              My main goal is to be able to build a baseball stadium here in
              Cameroon, help my players, give them school supplies, pay their
              schools and help their families. This year we have players who did
              not go to school because their parents have no money. It really
              hurt me. <br /> -Arsel Giowou, President and Founder of Harmony
              Baseball Academy
            </p>
          </div>
          <h3 className={styles.textContent}>
            FAQ: Is there a way for me to donate directly to Harmony Baseball
            Academy?
          </h3>
          <p className={styles.textContent}>
            You can donate to Harmony Baseball Academy through our gofundme campaign <a href="https://www.gofundme.com/f/harmonybaseballacademy" target="__blank" rel="nonopener norefferrer"> here.</a> We truly appreciate all of your support in moving toward our goals!
          </p>
        </Layout>
      </>
    )
  }
}
