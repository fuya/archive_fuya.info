const plugins = ['@vuepress/google-analytics',]
if(!process.env.LOCAL)
  plugins.push(require('./plugins/ogp.js'));



module.exports = {

  title: 'Fuya.info',
  description: 'fuya info',
  head: [
    ['script', {
      async: "async",
      src: "https://platform.twitter.com/widgets.js",
      charset: "utf-8"
    }],
    ['meta', {
        name: 'twitter:card',
        content: "summary"
    }],
    ['meta', {
      name: 'twitter:site',
      content: "@_fuya"
    }]
  ],

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
    extendMarkdown: md => {
      md.use(require('markdown-it-footnote'))
    }
  },

  locales: {
    "/": {
      lang: "ja-JP"
    }
  },
  ga: 'UA-25035763-1',

  plugins,

  // for Development
  port: 9998
}
