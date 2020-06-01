import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../css/bio.module.css"
import partners from "../constants/partners.js"
import PartnerCard from "../components/partnerCard.js"
export default class Partners extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.bioContainer}>
          {partners.map((partner, index) => {
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
    )
  }
}
