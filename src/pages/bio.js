import React, { Component } from "react"
import Layout from "../components/Layout"
import coaches from "../constants/coaches"
import styles from "../css/bio.module.css"
import CoachBioCard from "../components/CoachBioCard.js"

// export default class Bio extends Component {
//   render() {
//     return (
//       <Layout>
//         <div className={styles.bioContainer}>
//           {coaches.map((coach, index) => {
//             return (
//               <>
//                 <CoachBioCard coach={coach} />
//               </>
//             )
//           })}
//         </div>
//       </Layout>
//     )
//   }
// }

export default function bio() {
  return (
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
  )
}
