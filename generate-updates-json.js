// generate-updates-json.js
const fs = require('fs');
const path = require('path');

const scanDir = './';
const updates = {};

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && !['node_modules', '.git', '.github'].includes(entry.name)) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      const stats = fs.statSync(fullPath);
      const key = path.relative('.', fullPath).replace(/\\/g, '/').replace(/\.html$/, '');
      updates[key] = stats.mtime.toISOString();
    }
  }
}

walk(scanDir);

fs.writeFileSync('updates.json', JSON.stringify(updates, null, 2));
console.log('✅ updates.json generated.');
