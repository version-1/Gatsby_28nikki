---
title: "GatsbyJSでブログを作り直している（WordPressから移行）"
date: "2020-09-15"
categories: ["programming"]
tags: ["GatsbyJS", "ブログ作成"]
avatar: '../assets/developer-3461405_1920.png'
---

## データが飛んだので、WordPressからGatsbyJSへの移行を決意

自業自得なんですが、悲しいかな、WordPressのデータが全部飛びました。

あまりに辛くて泣いていたら、プログラミング教えてくれている先生が「GatsbyJSっていうのがあるよ」と教えてくれました。

* マークダウン記事からページを生成できる（ログイン不要で楽）
* 静的なページを生成してくれるので表示が早い（重要）
* GitHub経由でデプロイできるから **ログが残る（超重要）**

失意の底にいたので、「めっちゃいいじゃん！」と飛びつき作成を始めました。

## 取り組み時点の自分のプログラミングレベル

* 本格的にプログラミングの勉強を始めてから8ヶ月くらい
* モバイルアプリ開発（Swift）とWeb開発（React.js）を勉強
* どちらの言語も基本ならわかる程度
* アプリ開発経験はなし

## 実装したい機能

* ニュースサイトみたくしたい
* 最新記事だけはトップページに大きく出す
* その他の記事はカテゴリごとに最新5記事を表示


## 途中でつまづいたこと一覧

* チュートリアルとか英語読むのしんどかった時
[Gatsby公式チュートリアルやったよ](https://qiita.com/irico/items/cf87eb29ecaf7e135fcd)

* GraphQLでのデータ生成
* styled-componentを使ってのデザイン

[GatsbyJS公式 Styled Components](https://www.gatsbyjs.com/docs/styled-components/)

[styled-componentsの使い方(パッとわかりやすく、色々なパターンを説明することを目指す記事)](https://gist.github.com/kenmori/60bf7b67819061f41ce960617c035955)



* 画像にスタイルを適用
[styled-components公式 やり方再確認](https://styled-components.com/docs/advanced#referring-to-other-components)

* マークダウンファイルに紐づけた画像からパスを取得しヘッド画像として表示する
* ブログトップに記事一覧を画像付きで表示する（オプション指定してなかった）

[Gatsby で記事のトップ画像を設定](https://suzukalight.com/2019-07-02-hero-image/)

* GraphQLでデータ生成時のソートを2種類選択
[GatsbyJS公式 GraphQL Query Options Reference](https://www.gatsbyjs.com/docs/graphql-reference/#sort)

* TwitterカードとSEO
[GatsbyJSで作ったブログのページタイトル生成処理とSEOについて](https://gan0803.dev/2020-06-01-page-title/)
[Gatsby: SEO対策（Twitterカードなどmetaタグ設置）](https://qiita.com/atomyah/items/2624ea4f9394e4a992b8)

* 記事目次の追加
[GatsbyJSブログの記事に目次を追加した](https://rpf-noblog.com/2020-05-03/gatsby-toc)

 * 記事抜粋（excerpt）が失敗する
 [gatsby-transformer-remark](https://github.com/gatsbyjs/gatsby/tree/9b6f36597e87faf0f647abf9bd20ac72f0596089/packages/gatsby-transformer-remark#excerpts-for-non-latin-languages)

 * Adsenseの導入
 [GatsbyでAdsenseを表示する方法](https://31navi.com/gatsby-adsense)