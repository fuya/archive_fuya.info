export default ({
  Vue,
  options,
  router,
  siteData,
}) => {
  // see https://www.yo1000.com/posts/2018-05-20-vuepress-rss.html

  try {
    // Dev only throw reference error
    global
  } catch (e) {
    // Skip in Dev
    return
  }

  const path = require("path");
  const fs = require("fs");
  const RSS = require("rss");

  const feed = new RSS({
    title: siteData.title,
    description: siteData.description,
    feed_url: 'https://fuya.info/rss.xml',
    site_url: 'https://fuya.info/',
    copyright: 'Fuya',
    language: 'ja',
  });

  siteData.pages.filter(page => (
    (
      page.path.startsWith("/diary") ||
      page.path.startsWith("/snippets")
    ) &&
    !page.frontmatter.disallowIndex
  )).sort((x, y) =>
    x.frontmatter.createdAt < y.frontmatter.createdAt
  ).map((page) => ({
    title: page.title,
    description: page.frontmatter.description || "",
    url: `https://fuya.info${page.path}`,
    tags: page.frontmatter.tags || [],
    author: "Fuya",
    date: page.frontmatter.createdAt,
  })).forEach((page, i) => {
    if (i >= 20)
      return true;
    feed.item(page);
  })

  fs.writeFileSync(
    path.resolve('src/.vuepress/dist', 'rss.xml'),
    feed.xml({ indent: true })
  )

}