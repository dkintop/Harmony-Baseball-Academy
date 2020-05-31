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
        </div>
      </Layout>
    )
  }
}
