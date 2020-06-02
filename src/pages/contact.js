import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../css/contact.module.css"
import image from "../images/smile-throw.png"
import otherImage from "../images/arsel-thumbsup.png"
import contactInfo from "../constants/contactInfo.js"
import { FaLinkedin } from "react-icons/fa"
export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.card}>
          <img src={image} className={styles.image} alt="" />

          <div className={styles.content}>
            <h3>
              For inquiries on how to get involved, please contact us, we would
              love to hear from you!
            </h3>
            <h4>Arsel Giowou</h4>
            <p>
              Email:
              <a href={`mailto:${contactInfo.arsel.email}`}>
                {contactInfo.arsel.email}
              </a>
            </p>
            <p>
              <a
                href={contactInfo.arsel.linkedin}
                target="_blank"
                rel="norefferer"
              >
                {" "}
                <FaLinkedin />
              </a>
            </p>
            <p>Phone: {contactInfo.arsel.phone}</p>
          </div>
          <img src={otherImage} className={styles.image} alt=""></img>
        </div>
      </Layout>
    )
  }
}
