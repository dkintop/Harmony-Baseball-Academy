import React, { Component } from "react"
import Layout from "../components/Layout"
import coaches from "../constants/coaches"
import styles from "../css/bio.module.css"
import CoachBioCard from "../components/CoachBioCard.js"
export default class Bio extends Component {
  render() {
    return (
      <Layout>
        {coaches.map((coach, index) => {
          return (
            <>
              <CoachBioCard coach={coach} />
            </>
          )
        })}
      </Layout>
    )
  }
}
