const fs = require('fs');
const { resolve } = require('path');
const camelCase = require('camelcase');
const { execSync } = require('child_process');
const capitalize = require('lodash/capitalize');

const execSyncHandler = (command) => {
  console.log('\n\x1b[32m$ ' + command + '\x1b[0m');
  try {
    return execSync(command, { stdio: 'inherit' });
  } catch (e) {
    console.error(`${command} error: `, e);
  }
};

function updateMdByComponentName(componentName) {
  return new Promise((res, rej) => {
    let mdFile = fs.readFileSync(resolve(__dirname, `../src/components/${componentName}/demo/index.md`), 'utf-8');

    if (mdFile && /<!-- ([a-zA-Z-]*) -->/.test(mdFile)) {
      let scripts = [];
      let importNames = [];
      mdFile = mdFile.replace(/<!-- ([a-zA-Z-]*) -->/g, ($1) => {
        const demoName = $1.replace(/<!-- ([a-zA-Z-]*) -->/, '$1');

        try {
          const mdFile = fs.readFileSync(
            resolve(__dirname, `../src/components/${componentName}/demo/${demoName}.vue`),
            'utf-8'
          );
          const importName = `${capitalize(componentName)}${camelCase(demoName, { pascalCase: true })}`;
          importNames.push(importName);
          scripts.push(`import ${importName} from '../../src/components/${componentName}/demo/${demoName}.vue';`);

          return `\n## ${capitalize(
            demoName
          )}\n\n<code-wrapper>\n<${importName} />\n\n \`\`\`vue\n${mdFile}\n\`\`\`\n\n</code-wrapper>\n\n`;
        } catch (e) {
          console.log('e', e);
          return '';
        }
      });

      mdFile += `\n\n<script>\n${scripts.join('\n')}\nexport default {\n\tcomponents: {\n\t\t${importNames.join(
        ',\n\t\t'
      )}\n\t}\n}\n</script>\n\n`;

      try {
        const mdApiFile = fs.readFileSync(resolve(__dirname, `../src/components/${componentName}/README.md`), 'utf-8');

        mdFile += mdApiFile;
        fs.writeFile(resolve(__dirname, `../docs/components/${componentName}.md`), mdFile, (error) => {
          if (error) {
            rej(error);
            return;
          }
          res();
        });
      } catch (e) {
        rej(e);
      }
    }
  });
}

function updateMdByPath(event, path) {
  if (event === 'change' && /\/components\/([a-z_]+)\/README.md$/.test(path)) {
    const [_, componentName] = path.match(/\/components\/([a-z_]+)\/README.md$/);
    return updateMdByComponentName(componentName);
  }
  if (/\/([a-z]+)\/demo\/([a-z_]+).[vue|.md]/.test(path)) {
    const [_, componentName] = path.match(/\/([a-z]+)\/demo\/([a-z_]+).[vue|.md]/);
    return updateMdByComponentName(componentName);
  }

  return Promise.resolve();
}

function lowerHyphenate(s) {
  return s
    .replace(/([A-Z])/g, '-$1')
    .replace(/(\/|^)-/, '$1')
    .toLowerCase();
}

module.exports = {
  updateMdByPath,
  execSyncHandler,
  lowerHyphenate,
};
