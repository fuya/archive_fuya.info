---
tags:
  - meguroes
  - ポエム
createdAt: 2018-11-04T19:00+09:00
title: Meguro.es のサイトをJAMstack (nuxt.js + Netlify + Contentful 構成) にした
---

## まとめ

<blockquote class="twitter-tweet" data-cards="hidden" data-lang="ja"><p lang="ja" dir="ltr"><a href="https://t.co/qtrsSvdWsK">https://t.co/qtrsSvdWsK</a> のサイトをnuxtにしてみた</p>&mdash; Fuya (@_fuya) <a href="https://twitter.com/_fuya/status/1058641159424077824?ref_src=twsrc%5Etfw">2018年11月3日</a></blockquote>


## JAMstack ってなにさ

> Your project is built with the JAMstack if it meets three key criteria:
  JavaScript APIs Markup

とのこと。これら3要素で作られるサイトのことを呼びます。

React,　Vueなどのフロントエンドフレームワーク(ライブラリ)、　
Contentful,　Firebase, Rails などの API、
Netlify, Firebase, S3 などのホスティング環境に配置されたMarkup

これらの構成がJAMstackの一例です。

### Meguro.esで使った構成

JAMstackを実現するための技術選定の組み合わせはたくさんありますが、今回はnuxt.js, Contentful, Netlyfy の構成を選びました。

(nuxtがSSRモードでHTMLのビルドを完全にしているわけではないので、厳密なJAMstackなのかといわれると、あやしいかも)

### リポジトリ

[GitHub nuxt.meguro.es](https://github.com/meguroes/nuxt.meguro.es)



