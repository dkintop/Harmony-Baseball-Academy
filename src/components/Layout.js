import React, { Component } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"
export default class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
