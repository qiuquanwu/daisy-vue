const fs = require('fs');
const path = require('path');

const filePath = 'docs/learns';
function readDir(filePath, results = []) {
  fs.readdir(filePath, (err, files) => {
    if (err) throw err;
    files.forEach(filename => {
      //获取当前文件的绝对路径
      const dir = path.join(filePath, filename);
      //根据文件路径获取文件信息，返回一个fs.Stats对象
      fs.stat(dir, (error, stats) => {
        if (error) throw error;
        if (stats.isFile() && dir.indexOf('.md') > -1) {
          results.push(dir);
        } else if (stats.isDirectory()) {
          readDir(dir, results)
        }
      });
    });
  });
}

function groupBy(array, property) {
  return array.reduce(function (acc, obj) {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

let results = [];
readDir(filePath, results);
setTimeout(() => {
  const allFiles = results.map(item => {
    const relatives = item.slice(filePath.length + 1).split('/');
    const group = relatives.length === 2 ? relatives[0] : '';
    const content = fs.readFileSync(item, 'utf-8').match(/(# )(.*)/);
    const text = content ? content[2] : null;
    return {
      text,
      group,
      link: item.slice(4, item.length - 3),
    };
  });
  const groups = groupBy(allFiles, 'group');
  const links = Object.keys(groups).map(key => {
    if (key) {
      return {
        text: key.toUpperCase(),
        children: groups[key]
      };
    }
  }).filter(Boolean);
  fs.writeFile('docs/.vitepress/routes.json', JSON.stringify(links), err => {
    if (err) throw err;
    console.log('Doc routes update...')
  })
}, 1000)
