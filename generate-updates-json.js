const fs = require('fs');
const { execSync } = require('child_process');

const groups = {
  html: ['./content/html'],
  css: ['./content/css'],
  js: ['./content/js'],
  eca1: ['./content/electrical/eca1_startingtips.html', './content/electrical/eca1_CENO1.html'],
  electronics1: ['./content/electrical/electronics1.html'],
  // Add more subjects and their related files
};

let updates = {};

Object.entries(groups).forEach(([id, files]) => {
  let latest = 0;
  files.forEach(filePath => {
    try {
      const log = execSync(`git log -1 --format="%ct" "${filePath}"`).toString().trim(); // epoch
      const timestamp = parseInt(log);
      if (timestamp > latest) latest = timestamp;

      // Also save subcontent update
      const fileName = filePath.split('/').pop().replace('.html', '');
      updates[fileName] = new Date(timestamp * 1000).toISOString();
    } catch (err) {
      console.error(`❌ Couldn't read: ${filePath}`);
    }
  });
  if (latest) updates[id] = new Date(latest * 1000).toISOString();
});

fs.writeFileSync('./updates.json', JSON.stringify(updates, null, 2));
console.log('✅ updates.json written!');
