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
      const key = path.basename(entry.name, '.html'); // e.g. "index"
      updates[key] = stats.mtime.toISOString();       // e.g. "2025-04-04T12:00:00Z"
    }
  }
}

walk(scanDir);

fs.writeFileSync('updates.json', JSON.stringify(updates, null, 2));
console.log('✅ updates.json generated.');
