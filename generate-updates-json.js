const fs = require('fs');
const { execSync } = require('child_process');

// Folders where your content is stored
const contentDirs = [
  './content/html',
  './content/css',
  './content/js',
  './content/electrical'
];

let updates = {};

contentDirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = `${dir}/${file}`;
    try {
      const log = execSync(`git log -1 --format="%cI" "${filePath}"`).toString().trim();
      const id = file.replace('.html', '');
      updates[id] = log;
    } catch (err) {
      console.error(`❌ Error fetching git log for ${filePath}`);
    }
  });
});

fs.writeFileSync('./updates.json', JSON.stringify(updates, null, 2));
console.log('✅ updates.json created!');
