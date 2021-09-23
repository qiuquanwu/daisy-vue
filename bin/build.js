#!/usr/bin/env node
const { resolve } = require("path");
const chokidar = require("chokidar"); //监测目录变化
const { updateMdByPath, execSyncHandler } = require("./util");

const watcher = chokidar.watch(
  resolve(__dirname, "../src/components/*/demo/index.md")
);

watcher.on("add", (path) => {
  updateMdByPath("add", path)
    .then(() => {
      execSyncHandler("yarn docs:build");
      execSyncHandler("yarn docs:serve");
    })
    .catch((e) => {
      console.log("build error", e);
    })
    .finally(() => {
      watcher.close();
    });
});
