

const cheerio = require('cheerio');

function WikiEditUrl(url) {
  const urlParts = url.split('/');
  const articleTitle = urlParts[urlParts.length - 1]
  const begeningOfUrl = "https://en.wikipedia.org/w/index.php?action=edit&title="
  return `${begeningOfUrl}${articleTitle}`
}

function WikiFilename(url) {
  const urlParts = url.split('/');
  const articleTitle = urlParts[urlParts.length - 1]
  return `${articleTitle} - Wiki.md`
}

function WikiTransformer(html) {
  const $ = cheerio.load(html);
  const text = $('#wpTextbox1').val();
  return text;
}

module.exports = {
  WikiEditUrl,
  WikiFilename,
  WikiTransformer
}
