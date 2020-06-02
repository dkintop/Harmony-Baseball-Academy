import React, { Component } from "react"
import Layout from "../components/Layout"
import BlogRoll from "../components/BlogRoll.js"
import SEO from "../components/seo"
export default class Blog extends Component {
  render() {
    return (
      <>
        <SEO
          title="Blog | Harmony Baseball Academy"
          description="Harmony Baseball Academy blog page. Stay up to date with all of our progress and achievements."
        />
        <Layout>
          <h1>Latest Posts</h1>
          <section>
            <div className="content">
              <BlogRoll />
            </div>
          </section>
        </Layout>
      </>
    )
  }
}
