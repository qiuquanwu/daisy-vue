const fs = require('fs');

const indexPath = 'docs/.vitepress/dist/index.html';
fs.readFile(indexPath, 'utf-8', (err, data) => {
  if (err) throw err;
  const date = new Date().valueOf();
  const metaScript = '<script type="text/javascript" ss>console.log("Build Time: ", "' + date + '")</script>';
  const newData = data.replace('</body>', metaScript + '</body>');
  fs.writeFile(indexPath, newData, error => {
    if (error) throw error;
    console.log('File Meta has been saved!');
  });
});
