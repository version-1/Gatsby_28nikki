import React from "react"
import Layout from "./components/Layout"
import SEO from "./components/seo"


export default () => (
  <>
  <SEO title="404 error"
  description="404 error"
  image="twitterCard.png"
  lang="ja"
   />
  <Layout>
    <h1>404</h1>
    <p>このページは表示できません。</p>
  </Layout>
  </>
)