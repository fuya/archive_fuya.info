var fs = require('fs');
const TextToSVG = require('text-to-svg');
const sharp = require('sharp');

module.exports = {
  extendPageData ($page) {
    const {
      title,
      key,
      path,
      frontmatter
    } = $page
   
    if(!frontmatter.meta || frontmatter.meta.every(meta => meta.name != "og:image")) {
      frontmatter.meta = frontmatter.meta || [];
      frontmatter.meta.push({
        name: 'og:title',
        content: title + ' | Fuya.info'
      });
      frontmatter.meta.push({
        name: 'og:image',
        content: `https://fuya.info/ogp/${key}.png`
      });
      frontmatter.meta.push({
        name: 'og:url',
        content: `https://fuya.info${path}`
      })
      const textToSVG = TextToSVG.loadSync();
      const fontSize = Math.min(72, 900 / Math.min(30, title.length * 2.5))
      const roundedCorners = Buffer.from(textToSVG.getSVG(title, {
        x: 0, y: 0, fontSize: fontSize, anchor: 'top', attributes: {fill: '#66ff66', stroke: '#fff'}
      }));

      sharp('./src/.vuepress/public/ogp/ogp-base.png').overlayWith(roundedCorners, { cutout: false }).toFile(`./src/.vuepress/public/ogp/${key}.png`);
    }
  }
}