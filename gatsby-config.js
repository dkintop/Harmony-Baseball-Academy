/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@harmonybaseballacademy`,
        limit: 200,
      },
    },
  ],
}
