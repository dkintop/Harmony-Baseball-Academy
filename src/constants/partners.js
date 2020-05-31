import React from "react"
import doug from "../images/doug.png"
import { FaLinkedin } from "react-icons/fa"
export default [
  {
    name: "Doug Kintop",
    role: "Web development and maintenance",
    image: doug,
    bio:
      "Doug is a software developer in Pittsburgh, PA who specializes in web development and is currently seeking employment opportunities.",
    quote:
      "I became involved with Harmony Baseball Academy after seeing a call to action post made by coach Arsel on linkedin. I felt compelled to help in some way and after learning that he did not have a website, I couldn't resist! After working directly with coach Arsel, he has taught me that investing in people can be incredibly rewarding, and I am honored to have been given the chance to be involved.",
    contact: {
      email: "dkintop@hotmail.com",
      linkedin: {
        url: "https://www.linkedin.com/in/doug-kintop/",
        icon: <FaLinkedin />,
      },
    },
  },
]
