const fs = require('fs');
const { execSync } = require('child_process');

// Define your groups and the related files (adjust paths as needed)
const groups = {
  html: [
    './content/html/startingtips.html',
    './content/html/CENO1.html'
  ],
  css: [
    './content/css/basics.html'
  ],
  javascript: [
    './content/js/intro.html'
  ]
};

let updates = {};

// For each group, determine the most recent update
Object.entries(groups).forEach(([groupId, files]) => {
  let latestTimestamp = 0;
  files.forEach(filePath => {
    try {
      const log = execSync(`git log -1 --format="%ct" "${filePath}"`).toString().trim(); // Unix epoch time
      const timestamp = parseInt(log);
      // Save individual subcontent update
      const fileName = filePath.split('/').pop().replace('.html', '');
      updates[fileName] = new Date(timestamp * 1000).toISOString();

      if (timestamp > latestTimestamp) {
        latestTimestamp = timestamp;
      }
    } catch (err) {
      console.error(`Error fetching git log for ${filePath}:`, err);
    }
  });
  if (latestTimestamp) {
    updates[groupId] = new Date(latestTimestamp * 1000).toISOString();
  }
});

fs.writeFileSync('./updates.json', JSON.stringify(updates, null, 2));
console.log('updates.json created:', updates);
