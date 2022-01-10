#!/usr/bin/env node
const { resolve } = require('path');
const chokidar = require('chokidar'); //监测目录变化
const { updateMdByPath } = require('./util');

// 更新doc
const watcher = chokidar.watch([
  resolve(__dirname, '../src/components/*/README.md'),
  resolve(__dirname, '../src/components/*/demo/*'),
]);
watcher
  .on('add', (path) => {
    updateMdByPath('add', path).catch((e) => {
      console.log('build error', e);
    });
  })
  .on('ready', () => {
    console.log('Initial docs complete. Ready for build');
    watcher.close().then(() => console.log('Build success!'));
  });
