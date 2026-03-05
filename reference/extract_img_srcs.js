const fs = require('fs');
const path = require('path');
const html = fs.readFileSync('reference/home.html','utf8');
const regex = /<img[^>]+src="([^"]+)"/g;
let match; const results = [];
while((match = regex.exec(html))!==null){
  if(match[1].includes('static.wixstatic.com')) results.push(match[1]);
}
console.log([...new Set(results)].join('\n'));
