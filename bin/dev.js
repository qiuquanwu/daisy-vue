#!/usr/bin/env node
const { resolve } = require("path");
const chokidar = require("chokidar"); //监测目录变化
const throttle = require("lodash/throttle");
const browserSync = require("browser-sync").create();
const { updateMdByPath } = require("./util");

chokidar
  .watch([
    resolve(__dirname, "../src/components/*/README.md"),
    resolve(__dirname, "../src/components/*/demo/*"),
  ])
  .on("all", (event, path) => {
    updateMdByPath(event, path)
      .then(() => {
        if (
          (event === "change" ||
            (event === "add" && path.endsWith("index.md"))) &&
          browserSync.reload
        ) {
          const reload = throttle(browserSync.reload, 1000);
          reload("online");
        }
      })
      .catch((e) => {
        console.log("build error", e);
      });
  })
  .on("ready", () => {
    console.log("Initial scan complete. Ready for changes");
    browserSync.init({
      port: 3002,
      proxy: "http://localhost:3000", //this is the port where express server works
      reloadDelay: 500,
    });
  });
