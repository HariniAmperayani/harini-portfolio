const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'reference');
const urls = new Set();
fs.readdirSync(dir).filter(name => name.endsWith('.html')).forEach(name => {
  const text = fs.readFileSync(path.join(dir, name), 'utf8');
  const regex = /https:\/\/static\.wixstatic\.com\/media\/[^"\)]+/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    urls.add(match[0]);
  }
});
fs.writeFileSync(path.join(dir, 'media_urls.txt'), Array.from(urls).sort().join('\n'));
