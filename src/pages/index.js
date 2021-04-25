import React, { Component } from "react"
import Layout from "../components/Layout.js"
import ImgCarousel from "../components/ImgCarousel.js"
import SEO from "../components/seo.js"
import About from "../components/About"
import MissionStatment from "../components/MissionStatement"
import IntroVideo from "../components/IntroVideo.js"
export default class Index extends Component {
  render() {
    return (
      <>
        <SEO
          title="Bringing baseball and mentorship to Africa's youth| Harmony Baseball Academy"
          description="Harmony Baseball Academy is a baseball academy in Cameroon, Africa
            with the mission of providing high quality baseball training and
            mentorship to the youth of Cameroon. Learn how you can help today!"
        />

        <Layout>
          {/* <ImgCarousel /> */}
          <IntroVideo />
          <About />
          <MissionStatment />
        </Layout>
      </>
    )
  }
}
