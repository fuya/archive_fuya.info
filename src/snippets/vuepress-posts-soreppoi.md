---
tags: 
  - vuepress
createdAt: 2018-07-18T19:00+09:00
title: VuePress それっぽい記事の一覧を書いてみた
---

## VuePress

このサイトは[VuePress](https://vuepress.vuejs.org/)を使っています。
残念ながらVuePressにはブログ機能は**まだ**ないため [^blog] 、各所を参考にして記事一覧やrssを作ってます。

Vue.jsの入門がてら、記事一覧をいい感じにするのがちょうどいいコンポーネントなのではないかと思いました。

[^blog]: https://github.com/vuejs/vuepress/issues/36 あたりを見るといいのではないでしょうか

### 記事一覧のとり方

HTML部分はこんな感じです。`v-for`が慣れないですね。

```html
<template>
  <ul>
    <li v-for="page in pages">
      <post v-bind:page="page" />
    </li>
  </ul>
</template>
```

JavaScript部分はこんな感じです。VuePressでは、`this.$site.pages`にいろいろ全部入っているようなのでfilterして必要なページを抜きます。

今回は`dirNames`というプロパティーをもらい、パスがそれらから始まっていればリスト対象としました。

このサイトでは `['/snippets']` などが引数として期待されます。

Frontmatterを使って、記事の公開日時を指定できるようになっています。
これを使ってソートを実現してます。

```javascript
import Vue from "vue";
export default Vue.extend({
  props: ["dirNames", "limit"],
  computed: {
    pages() {
      const { pages } = this.$site;
      return pages
        .filter(
          page =>
            this.dirNames.some(dirname =>
              page.path.startsWith(`/${dirname}/`)
            ) && this.dirNames.every(dirName => page.path !== `/${dirName}/`)
        )
        .filter(page => !page.frontmatter.disallowIndex)
        .sort((x, y) => x.frontmatter.createdAt < y.frontmatter.createdAt)
        .slice(0, this.limit || Number.MAX_SAFE_INTEGER);
    }
  }
});
```

実行環境がCIなので、特にbabelも考えずにfilterとかガンガン使っていけるのがよいですね。