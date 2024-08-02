// testLog.js

const log = require('./src/styledConsoleLog');

// Testing individual styles
log.error.log('This is an error'); // Red text
log.success.log('This is a success'); // Green text
log.bold.log('This is bold'); // Bold text
log.italic.log('This is italic'); // Italic text
log.big.log('This is big'); // Large text
log.warning.log('This is a warning'); // Yellow text
log.info.log('This is info'); // Blue text
log.underline.log('This is underlined'); // Underlined text
log.strikethrough.log('This is strikethrough'); // Strikethrough text
log.small.log('This is small'); // Small text
log.shadow.log('This has a shadow'); // Text with shadow
log.uppercase.log('THIS IS UPPERCASE'); // Uppercase text

// Testing chaining of styles
log.error.bold.underline.log('This is red, bold, and underlined');
log.success.italic.big.log('This is green, italic, and big');
log.info.shadow.underline.log('This is blue with shadow and blue background');