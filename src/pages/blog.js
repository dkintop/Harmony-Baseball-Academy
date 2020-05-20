import React, { Component } from "react"
import Layout from "../components/Layout"
import BlogRoll from "../components/BlogRoll.js"

export default class Blog extends Component {
  render() {
    return (
      <Layout>
        <h1>Latest Posts</h1>
        <section>
          <div className="content">
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
