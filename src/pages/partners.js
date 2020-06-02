import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../css/bio.module.css"
import partners from "../constants/partners.js"
import PartnerCard from "../components/partnerCard.js"
import SEO from "../components/seo"
export default class Partners extends Component {
  render() {
    return (
      <>
        <SEO
          title="Our Partners| Harmony Baseball Academy"
          description="Meet Our partners who contributed to our mission of providing high quality baseball training and mentorship to the youth of Cameroon."
        />
        <Layout>
          <div className={styles.bioContainer}>
            {partners.map(partner => {
              return (
                <>
                  <PartnerCard partner={partner} />
                </>
              )
            })}
            <div className={styles.card}>
              <h1 style={{ marginTop: "200px" }}>Your Name Here</h1>

              <p>
                Inspired to get involved? <a href="/contact">Contact Us</a> To
                learn more!
              </p>
            </div>
          </div>
        </Layout>
      </>
    )
  }
}
