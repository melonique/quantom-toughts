const fs = require('fs');

const PATH = "Scrapes"

async function getHTML(url, parser, fileName) {
  console.log('GETTING', fileName)
  try {
    const response = await fetch(url);
    const html = await response.text();

    const text = parser(html);

    fs.writeFileSync(`${PATH}/${fileName}`, text)
    console.log('DONE', fileName)
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = getHTML;
