---
categories: 
  - netlify
  - ポエム
  - 未解決
createdAt: 2018-07-29T19:00+09:00
title: Meguro.es で Netlify対応するメモ
---

## Netlifyを使ってます。

[Meguro.es](https://meguro.es/) や [fuya.info](https://fuya.info) では、 [Netlify](https://www.netlify.com/) を使わせていただいております。
手元でビルドする必要はありますが、GitHub Pagesでもいいのですけどね。

静的サイトジェネレーターって便利なんですが、Gitを触るのが億劫に思う人もいるみたいで、敷居が高い[^shikii] ですよね。

[^shikii]: 「敷居が高い」をハードルが高いという意味で使うのは誤用ですが使っています。

なので、Web上で編集できるようにしてしまおうというのがNetlify CMSなのです。便利な世の中です。

### 具体的な実装

[このコミットです](https://github.com/meguroes/meguro.es/commit/94273bbb0c49482fa29a2756561bdef19428103a)といえばすべてです。

```html
<link rel="stylesheet" href="//cms.netlify.com/assets/cms.css" />
<script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
```

やってるのはこれくらいですね。configはこんな感じです。

```yaml
backend:
  name: github
  repo: meguroes/meguro.es
  branch: master
media_folder: source/images/
collections:
- name: "blog"
  label: "Blog"
  folder: "source/_posts"
  create: true
  slug: "{{slug}}"
  fields:
    - {label: "Title(ファイル名にもなります。日本語OK)", name: "title", widget: "string"}
    - {label: "permalink(URLになります)", name: "permalink", widget: "string", pattern: ["[a-z0-9-_]+", "[a-z0-9-_]+"]}
    - {label: "Publish Date", name: "date", widget: "datetime", default: "", format: "YYYY-MM-DD HH:mm:ss"}
    - {label: "Categories", name: "tags", widget: "list", default: ["meguroes"]}
    - {label: "Content", name: "body", widget: "markdown"}
    - {label: "Layout", name: "layout", widget: "hidden", default: "post"}
```

日付とかタグのfrontmatterもいい感じに設定できます。

### 困ったところ

職業柄ファイル名には強いこだわりがあってしまうので、日本語のファイル名なんて苦手なんですが、何も考えずに実装するとタイトルがファイル名になってしまうんですよね。

[ドキュメント](https://www.netlifycms.org/docs/configuration-options/#slug-type)を見ても、どうやってカスタマイズすればいいのやら。

時間あるときに実装でも見ればいいですかね。