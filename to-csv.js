const fs = require('fs');
const { Parser } = require('json2csv');

const json2csvParser = new Parser();
// TODO: paste items from script.js
const csv = json2csvParser.parse([]);

fs.writeFile('items.csv', csv, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('The file was saved!');
});
