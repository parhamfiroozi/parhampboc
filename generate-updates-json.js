const fs = require('fs');
const path = require('path');

// Directory to scan (you can adjust if needed)
const scanDir = './';

// Object that will hold our update data
const updates = {};

/*
  This function walks through the directory tree.
  It looks for HTML files and, using our naming convention:
  - Files without an underscore in the base name are considered subject pages.
  - Files with an underscore are considered subcontent pages; the part before
    the first underscore is taken as the subject key.
  
  For each subject group, we store:
    - "subject": timestamp of the subject file (if available)
    - "subcontent": an object mapping each subcontent file’s base name to its timestamp
    - "updated": the latest timestamp among the subject and its subcontent pages
*/
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && !['node_modules', '.git', '.github'].includes(entry.name)) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      const stats = fs.statSync(fullPath);
      const mtime = stats.mtime.toISOString();
      const base = path.basename(entry.name, '.html');

      // Check if this file is a subcontent file (contains an underscore)
      if (base.includes('_')) {
        // Extract the subject key from before the first underscore
        const subjectKey = base.split('_')[0];
        if (!updates[subjectKey]) {
          // Initialize with no subject file yet
          updates[subjectKey] = { updated: mtime, subject: null, subcontent: {} };
        }
        // Record this subcontent's update time
        updates[subjectKey].subcontent[base] = mtime;
        // Update the overall updated time if this file is more recent
        if (new Date(mtime) > new Date(updates[subjectKey].updated)) {
          updates[subjectKey].updated = mtime;
        }
      } else {
        // File is considered a subject page
        const subjectKey = base;
        if (!updates[subjectKey]) {
          updates[subjectKey] = { updated: mtime, subject: mtime, subcontent: {} };
        } else {
          // Update the subject's own timestamp if this file is newer
          if (!updates[subjectKey].subject || new Date(mtime) > new Date(updates[subjectKey].subject)) {
            updates[subjectKey].subject = mtime;
          }
          if (new Date(mtime) > new Date(updates[subjectKey].updated)) {
            updates[subjectKey].updated = mtime;
          }
        }
      }
    }
  }
}

// Start the directory walk
walk(scanDir);

// Write out the updates JSON file (pretty-printed)
fs.writeFileSync('updates.json', JSON.stringify(updates, null, 2));
console.log('✅ updates.json generated.');
