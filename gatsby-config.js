/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "ニッパチニッキ",
    description: "アラサー女性のカナダ社会人留学記録"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/blog`,
        name: "blog",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
  ],
}
