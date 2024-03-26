
const fs = require('fs');
const getHTML = require('./getHtml.js')
const { WikiEditUrl, WikiFilename, WikiTransformer } = require('./wikipedia.js')



const LIST = fs.readFileSync('./Scripts/Wikipedia.md', 'utf8').split('\n')

console.log(LIST)


const allToFetch = LIST.map((url) => getHTML(WikiEditUrl(url), WikiTransformer, WikiFilename(url)))


Promise.all(allToFetch).then(() => console.log('All done!'))

