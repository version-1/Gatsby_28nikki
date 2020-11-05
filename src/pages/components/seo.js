/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, image, lang, meta }) {
  const { location } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            defaultLang: lang
            twitterUsername
          }
        }
      }
    `
  )

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultLang,
    twitterUsername
   } = site.siteMetadata;

   const seo = {
       title: title || defaultTitle,
       description: description || defaultDescription,
       image: `${siteUrl}${image || defaultImage}`,
       lang: lang || defaultLang,
       url: `${siteUrl}${location}`,
   }
   
  return (
    <Helmet  titleTemplate={titleTemplate}>
        <title>{seo.title}</title>
        <html lang={seo.lang} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={twitterUsername} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    lang: null,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
}

export default SEO