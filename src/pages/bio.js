import React, { Component } from "react"
import Layout from "../components/Layout"
import coaches from "../constants/coaches"
import styles from "../css/bio.module.css"
import CoachBioCard from "../components/CoachBioCard.js"
import SEO from "../components/seo"

export default function bio() {
  return (
    <>
      <SEO
        title="Meet The Coaches| Harmony Baseball Academy"
        description="Meet the passionate coaches of Harmony Baseball Academy"
      />
      <Layout>
        <div className={styles.bioContainer}>
          {coaches.map((coach, index) => {
            return (
              <>
                <CoachBioCard coach={coach} />
              </>
            )
          })}
        </div>
      </Layout>
    </>
  )
}
