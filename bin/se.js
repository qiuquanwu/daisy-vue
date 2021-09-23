#!/usr/bin/env node
const { exec, execSync, spawn } = require("child_process");
const fs = require("fs");

const execSyncHandler = (command) => {
  console.log("\n\x1b[32m$ " + command + "\x1b[0m");
  try {
    return execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.error(`${command} error: `, err);
  }
};

// let start1 = false;
// let start2 = false;
// const run_dev = spawn('yarn', ['dev']);
// run_dev.stdout.on('data', function (data) {
//   console.log('====yarn dev:', data.toString(), fs.existsSync('dist/yui.es.js'), data.toString().trim() === '$ rm -rf dist & rollup -cw');

//   if (!start1 && fs.existsSync('dist/yui.es.js') && data.toString().trim() === '$ rm -rf dist & rollup -cw') {
//     start1 = true;
//     exec('yarn docs:dev', { maxBuffer: 1024 * 1024 * 1024 }, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//       }
//       console.log(`stdout: ${stdout}`);
//       console.error(`stderr: ${stderr}`);
//       setTimeout(() => {
//         execSyncHandler('node bin/dev.js')
//       }, 4000);
//     });
//   }
// });

// run_dev.stderr.on('error', function(err) {
//   console.error('====yarn dev: err: ', err);
// })

// run_dev.on('message', function(data) {
//   console.error('====yarn dev: close: ', data);
// })
