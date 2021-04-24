import React, { Component } from "react"
import styles from "../css/bio.module.css"

export default class PartnerCard extends Component {
  displayQuote() {
    if (this.props.partner.quote) {
      return `"${this.props.partner.quote}"`
    }
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.cardImgContainer}>
          <img
            className={styles.cardImg}
            src={this.props.partner.image}
            alt={this.props.partner.name}
          />
        </div>

        <h1>{this.props.partner.name}</h1>
        <h3>{this.props.partner.role}</h3>
        <a href={`mailto: ${this.props.partner.contact.email}`}>
          {this.props.partner.contact.email}
        </a>
        <br />

        <a
          href={this.props.partner.contact.linkedin.url}
          target="_blank"
          rel="noreferrer"
        >
          {this.props.partner.contact.linkedin.icon}
        </a>
        <p style={{ borderBottom: "2px solid lightgray" }}>
          {" "}
          {this.props.partner.bio}
        </p>
        <p style={{ fontStyle: "italic" }}>{this.displayQuote()}</p>
      </div>
    )
  }
}
