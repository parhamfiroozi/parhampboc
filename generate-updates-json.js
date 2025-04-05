const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const scanDir = './';
const updates = {};

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && !['node_modules', '.git', '.github'].includes(entry.name)) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      const relativePath = path.relative('.', fullPath).replace(/\\/g, '/');
      const key = relativePath.replace(/\.html$/, '');

      try {
        const lastCommitDate = execSync(
          `git log -1 --format="%cI" -- "${relativePath}"`
        ).toString().trim();
        updates[key] = lastCommitDate;
      } catch (err) {
        console.warn(`⚠️ Could not get date for ${relativePath}`);
      }
    }
  }
}

walk(scanDir);

fs.writeFileSync('updates.json', JSON.stringify(updates, null, 2));
console.log('✅ updates.json generated from git history');
