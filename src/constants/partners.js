import React from "react"
import doug from "../images/doug.png"
import bill from "../images/bill.png"
import Michael from "../images/MichaelBaturin.jpg"
import Nate from "../images/NateKangPartner.jpg"
import BillPeterson from "../images/BillPetersonPartner.jpg"
import { FaLinkedin } from "react-icons/fa"
export default [
  {
    name: "Michael Baturin",
    role: "US Outreach and Visibility Coordinator",
    image: Michael,
    bio:
      "Michael Baturin is from Camp Hill, PA and connected immediately with Arsel and the Harmony Baseball Academy due to Arsel's deep enthusiasm for playing the game of baseball, an enthusiasm shared by Michael.  Michael's love for playing the game of baseball and a desire to spread it in its truest form to youths in Cameroon who are similarly enthusiastic about playing the game and who would benefit greatly from the opportunity to play it, is what drew Michael to help out the Harmony Baseball Academy",
    quote:
      "Working with Arsel has been inspirational.  He is an extraordinary person with a passion to bring baseball to Cameroon.  I love his energy and enthusiasm!",
    contact: {
      email: "michaelmbaturin@gmail.com",
      linkedin: {
        url: "",
        icon: "",
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
  {
    name: "Bill Peterson",
    role: "Supporter",
    image: BillPeterson,
    bio:
      "Bill Peterson is a lawyer who lives in northern Colorado.  As a player, father, coach, administrator, supporter and fan, Bill has been blessed by baseball throughout his life.  He’s honored to partner with Harmony Baseball Academy.",
    quote:
      "I could have never imagined I’d have the opportunity to assist such a worthy organization as Harmony Baseball Academy.  Baseball can impact lives in so many different ways.  Arsel’s passion for both baseball and people is obvious.  I’m excited to see HBA’s influence on Cameroon and beyond!",
    contact: {
      email: "",
      linkedin: {
        url: "https://www.linkedin.com/in/bill-peterson-71b7ba99",
        icon: <FaLinkedin />,
      },
    },
  },
  {
    name: "Nate Kang",
    role: "Supporter",
    image: Nate,
    bio:
      " Nate Kang is from Irvine, CA and is passionate about baseball and history.  He is the founder of a Facebook Group called “90 Feet from Home: The Baseball History Forum” and a baseball podcast called “Tales from Left Field: A Baseball History Podcast.”  He connected with Arsel and the Harmony Baseball Academy. decided to partner with Arsel to spread the love and passion for baseball in Cameroon and to improve the lives of young kids in Cameroon through baseball.",
    quote: undefined,
    contact: {
      email: "Natetkang@gmail.com",
      linkedin: {
        url: "",
        icon: undefined,
      },
    },
  },

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
]
