module.exports = {

  title: 'Fuya.info',
  description: 'fuya info',

  themeConfig: {
    sidebar: 'auto',

    nav: [
      {
        text: "Fuyaについて",
        link: "/about-me.html",
      }, {
        text: "日記",
        link: "/diary/",
      }, {
        text: "snippets",
        link: "/snippets/",
      }, {
        text: "技術記事",
        link: "/tech/",
      }, {
        text: "LINK",
        items: [
          {
            text: "Twitter(@_fuya)",
            link: "https://twitter.com/_fuya"
          }, {
            text: "GitHub(fuya)",
            link: "https://github.com/fuya"
          }, {
            text: "wishlist",
            link: "http://amzn.asia/6bOHT2e"
          }, {
            text: "Meguro.es",
            link: "https://meguro.es/"
          }
        ]
      }
    ]
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-footnote'))
    }
  },

  locales: {
    "/": {
      lang: "ja-JP"
    }
  },

  // for Development
  port: 8012
}
