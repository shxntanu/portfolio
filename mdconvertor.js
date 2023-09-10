const mediumToMarkdown = require('medium-to-markdown');

// Enter url here
mediumToMarkdown.convertFromUrl('https://medium.com/@shxntanu/from-urls-to-pixels-how-browsers-bring-the-internet-to-life-aabf3aaf92f9')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});