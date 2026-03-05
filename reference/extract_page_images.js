const fs = require('fs');
const path = require('path');
const dir='reference';
const pages=['home','projects','case','resume','contact'];
for(const page of pages){
  const file=path.join(dir,`${page}.html`);
  if(!fs.existsSync(file)) continue;
  const html=fs.readFileSync(file,'utf8');
  const regex=/<img[^>]+src="([^"]+)"/g;
  const urls=new Set();
  let match;
  while((match=regex.exec(html))!==null){
    if(match[1].includes('static.wixstatic.com')) urls.add(match[1]);
  }
  fs.writeFileSync(path.join(dir,`${page}_images.txt`),Array.from(urls).join('\n'));
}
