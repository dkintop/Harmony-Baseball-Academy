import React, { Component } from "react"
import Layout from "../components/Layout.js"
import ImgCarousel from "../components/ImgCarousel.js"
export default class Index extends Component {
  render() {
    return (
      <>
        <Layout>
          <ImgCarousel />
        </Layout>
      </>
    )
  }
}
