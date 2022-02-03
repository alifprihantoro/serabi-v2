import * as chokidar from 'chokidar'
import { exec } from 'child_process';

// compile
// exec('node app/babel')

// chokidar config
const watcher = chokidar.watch(['~/zzz/web/serabi-v2/src/'], {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  ignoreInitial: true,
});

// start watch
watcher
// on change
  .on("change", (path, stats) => {
    //exec babel
    exec('node app/bin/babel')
    console.log(`File ${path} changed size to ${stats.size}`);
  })
// add file
  .on("add", (path) => {
    //exec babel
    exec('node app/bin/babel')
    console.log(`File ${path} has been added`)
  });
