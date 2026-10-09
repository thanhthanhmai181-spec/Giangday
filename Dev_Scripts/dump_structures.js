const fs = require('fs');
const content = fs.readFileSync('./script.js', 'utf8');

// Find N3 index
const n3Pos = content.indexOf('N3: [');
const n3Block = content.substring(n3Pos);

const lessonRegex = /\{\s*name:\s*"Bài\s+(\d+)"/g;
let match;
const lessonStarts = [];
while ((match = lessonRegex.exec(n3Block)) !== null) {
  lessonStarts.push({ num: parseInt(match[1]), index: match.index });
}

lessonStarts.sort((a, b) => a.num - b.num);

let output = '';

for (let i = 0; i < lessonStarts.length; i++) {
  const start = lessonStarts[i].index;
  const end = (i < lessonStarts.length - 1) ? lessonStarts[i+1].index : n3Block.length;
  const block = n3Block.substring(start, end);
  
  output += `\n================ Bài ${lessonStarts[i].num} ================\n`;
  
  const structMatches = [...block.matchAll(/structure:\s*"([^"]+)"/g)];
  structMatches.forEach((sm, idx) => {
    if (!sm[1].startsWith('<')) {
      output += `  Item ${idx+1}: ${sm[1]}\n`;
    }
  });
}

fs.writeFileSync('./Dev_Scripts/all_structures_report.txt', output, 'utf8');
console.log('Finished writing all_structures_report.txt');
