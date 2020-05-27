import React, { Component } from "react"
import Layout from "../components/Layout"
import coaches from "../constants/coaches"
import styles from "../css/bio.module.css"
export default class Bio extends Component {
  render() {
    return (
      <Layout>
        {coaches.map((coach, index) => {
          return <img className={styles.imageContainer} src={coach.image} />
        })}
      </Layout>
    )
  }
}
