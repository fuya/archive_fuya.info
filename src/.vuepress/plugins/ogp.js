var fs = require('fs');
var text2png = require('text2png');

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
    
    fs.writeFileSync(`./src/.vuepress/public/ogp/${key}.png`, text2png(title, {
      backgroundColor: '#cccccc',
      width: 1200,
      color: 'blue'
    }));

  }
}