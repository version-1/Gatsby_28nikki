/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)
 
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `ニッパチニッキ`,
    titleTemplate: `%s - ニッパチニッキ`,
    description: `アラサー女性のカナダ社会人留学記録`,
    author: `モトキ`,
    siteUrl: `https://28-nikki.com`,
    url: `https://28-nikki.com`,
    lang: `en`,
    image: `/static/twitterCard.png`,
    twitterUsername: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `blog`, `assets`)
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: path.join(__dirname, `src`, `images`)
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-adsense`,
    //   options: {
    //       publisherId: `ca-pub-3602297049510061`
    //   },
    // },
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
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: 30,
              icon: false,
              maintainCase: true,
            },
          },
          {
            resolve: `gatsby-remark-component`,
            //変換する要素を指定したいときはoptionに記載する
            // options: { components: [`my-component`, `other-component`] }
          },
        ],
      },
    },
    
  ],
}
