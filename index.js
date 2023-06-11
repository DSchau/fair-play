const fs = require('fs');
const csv = require('csv-parser');
const slugify = require('slugify');
const path = require('path');

// Define directory name
const directory = 'markdown-files';

// Create directory if it does not exist
if (!fs.existsSync(directory)){
    fs.mkdirSync(directory);
}

fs.createReadStream('items.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Create filename from title, convert to lowercase, replace spaces with dashes
    const filename = path.join(directory, `${slugify(row.title, { lower: true, strict: true })}.md`);
    
    // Create content for markdown file
    const content = `# ${row.title}\n\n` + 
                    `**Category**: ${row.category}\n\n` + 
                    `${row.content}`;

    // Write to markdown file
    fs.writeFile(filename, content, (err) => {
      if(err) {
        return console.log(err);
      }
    });
  })
  .on('end', () => {
    console.log('CSV file processed.');
  });
