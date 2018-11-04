var fs = require('fs');
var Jimp = require('jimp');

module.exports = {
  extendPageData ($page) {
    const {
      title,
      key,
      frontmatter
    } = $page
   
    frontmatter.meta = frontmatter.meta || [];
    frontmatter.meta.push({
      name: 'og:title',
      content: title + ' | Fuya.info'
    });
    frontmatter.meta.push({
      name: 'og:image',
      content: `https://fuya.info/ogp/${key}.png`
    });
    


    Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then((font) => {
      Jimp.read('./src/.vuepress/public/ogp/ogp-base.png').then((image) => {
        image.print(font, 300, 100, title);
        image.write(`./src/.vuepress/public/ogp/${key}.png`)
      })
    });
  }
}