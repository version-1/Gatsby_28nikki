/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)
 
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "ニッパチニッキ",
    description: "アラサー女性のカナダ社会人留学記録"
  },
  plugins: [
    // "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `blog`, `assets`)
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "image",
        path: path.join(__dirname, `src`, `images`)
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              quality: 80,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
  ],
}
