const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'app/data/projects.ts');
let content = fs.readFileSync(p, 'utf8');

const projectBlocks = content.split('// ─────────────────────────────────────────────');

for (let i = 1; i < projectBlocks.length; i++) {
  let block = projectBlocks[i];
  
  const extract = (key) => {
    const match = block.match(new RegExp(`${key}:\\s*\\"(.*?)\\",`, 's'));
    return match ? match[1] : '';
  };

  const overview = extract('overview');
  const problem = extract('problem');
  const solution = extract('solution');
  const impact = extract('impact');
  
  const featuresMatch = block.match(/features:\s*\[(.*?)\]/s);
  let features = [];
  if (featuresMatch) {
    features = featuresMatch[1].split(',').map(s => s.trim().replace(/^\"|\"$/g, '')).filter(Boolean);
  }
  
  if (overview && problem) {
    let newOverview = `${overview}\n\nThe Challenge:\n${problem}\n\nThe Solution:\n${solution}\n\nKey Features:\n${features.map(f => '• ' + f).join('\n')}\n\nImpact:\n${impact}`;
    
    // Replace the old overview with the new one
    block = block.replace(/overview:\s*\".*?\",/s, `overview:\n        ` + '`' + newOverview.replace(/`/g, '\\`') + '`,');
    projectBlocks[i] = block;
  }
}

fs.writeFileSync(p, projectBlocks.join('// ─────────────────────────────────────────────'), 'utf8');
console.log('Successfully updated projects.ts');
