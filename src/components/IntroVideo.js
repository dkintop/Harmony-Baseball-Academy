import React from "react"
import videos from "../constants/videos.js"
import styles from "../css/video.module.css"
function IntroVideo(props) {
  return (
    <div className={styles.video}>
      <iframe
        className={styles.frame}
        src={videos.landingPageIntro.src}
        title="Harmony Baseball Hype Video"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
}

export default IntroVideo
