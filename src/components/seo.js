import React, { Component } from "react"
import { Helmet } from "react-helmet"
export default class SEO extends Component {
  render() {
    return (
      <Helmet>
        <html lang="en" />
        <title>{this.props.title}</title>
        <description>{this.props.description}</description>
      </Helmet>
    )
  }
}
