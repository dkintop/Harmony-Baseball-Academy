import React, { Component } from "react"
import Layout from "../components/Layout.js"
import ImgCarousel from "../components/ImgCarousel.js"
import About from "../components/About"
import MissionStatment from "../components/MissionStatement"
export default class Index extends Component {
  render() {
    return (
      <>
        <Layout>
          <ImgCarousel />
          <About />
          <MissionStatment />
        </Layout>
      </>
    )
  }
}
