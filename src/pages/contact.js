import React from "react"
import Layout from "./components/Layout"
import SEO from "./components/seo"


export default () => (
  <>
  <SEO title="お問い合わせ"
  description="問い合わせページ"
  image="twitterCard.png"
  lang="ja"
   />
  <Layout>
    <h1>サンプルページ</h1>
    <p>
      これはサンプルページです。同じ位置に固定され、(多くのテーマでは)
      サイトナビゲーションメニューに含まれる点がブログ投稿とは異なります。まずは、サイト訪問者に対して自分のことを説明する自己紹介ページを作成するのが一般的です。たとえば以下のようなものです。
    </p>
    <blockquote class="wp-block-quote">
      <p>
        はじめまして。昼間はバイク便のメッセンジャーとして働いていますが、俳優志望でもあります。これは僕のサイトです。ロサンゼルスに住み、ジャックという名前のかわいい犬を飼っています。好きなものはピニャコラーダ、そして通り雨に濡れること。
      </p>
    </blockquote>
  </Layout>
  </>
)