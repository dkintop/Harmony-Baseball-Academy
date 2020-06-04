import React from "react"
import doug from "../images/doug.png"
import bill from "../images/bill.png"
import { FaLinkedin } from "react-icons/fa"
export default [
  {
    name: "Bill Franciscus",
    role: "Mentor",
    image: bill,
    bio:
      "Global Ambassador for the African Youth Development Foundation, Founder and President of BASEBALL 4 LIFE non profit organization, Director of Baseball Operations and GM for USA Military WARDOGSBaseball.org, Director of Baseball Operations and Player Development for WE#21 www.we21.org, Pres. USA All-Star Baseball Association, Baseball Without Borders and Global Instructional Baseball League, Commissioner of the Cuban Sports League.",
    quote: "If you're not giving, you're not living",
    contact: {
      email: "billychrist21@gmail.com",
      linkedin: {
        url: "https://www.linkedin.com/in/bill-franciscus-9b5b3141/",
        icon: <FaLinkedin />,
      },
    },
  },
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
