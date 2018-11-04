---
tags: 
  - sass
  - 雑
  - css-loader
createdAt: 2018-08-27T22:00+09:00
title: CSSの変数をJSから使う
---

## sass使ってます？

別にCSSで変数も使えるし、コンポーネント単位でCSSのスコープが閉じる世の中になっているので
sassを使う必要性は必ずしもないかもしれません。

今回は定数的に宣言したscssの変数を(おそらくcss-loaderを通じて))JSから読めるようにする方法をざっくり紹介します。

## StorybookなどでJSからSCSSの変数の値を読む

`/assets/scss/variables.scss`に色とか定義しているとします。
そこに`:export`を書くとexportできます。

`variables.scss`
```variables.scss

$primary-color: #6854b7;
$background-color: #ece8ff;
$primary-font-size: 12px;

:export {
  PrimaryColor: $primary-color;
  BackgroundColor: $background-color;
  PrimaryFontSize: $primary-font-size;
}

```

exportしたものはJavaScriptからはこのように利用できます。

`foo/bar/stories.js`
```
import variables from '/assets/scss/variables.scss'

const RADIX_DECIMAL = 10;
const fontSize = parseInt(variables.PrimariFontSize, RADIX_DECIMAL);
const primaryFontSize = variables.PrimaryFontSize;

```

こんな感じ。

詳しいことが気になる方は、[こちら](https://github.com/css-modules/icss#export) を見てください。

これは、sassの機能ではなくcss-loader[^1]の機能なのではないかと思っています。
[^1]: [こちら](https://github.com/webpack-contrib/css-loader/blob/240db534fa5ee19cb5bde12570b0545af3082b5f/lib/processCss.js#L71) あたりの処理ではないかと思っています

webpackで必要なloaderを通してくださいね。


もちろん、storybook以外にもexportを使ってJSからCSSの変数(定数的なもの)を扱うことができます。
あまりにも利用する場合は、コンポーネント設計を見直してみるといいかもしれませんね。

記事が雑ですがこんな感じです。