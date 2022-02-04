import * as chokidar from 'chokidar'
import { exec } from 'child_process';

// chokidar config
const watcher = chokidar.watch(['./src/assets/dev/js','./src/assets/dev/img'], {
  ignored: /(^|[\/\\])\../, // ignore dotfiles
  ignoreInitial: true,
});
function change(e){
    if (e.match(/js/) != null) {
      // console.log('js change')
    exec('node app/babel')
    } else {
      // console.log('img change')
    exec('node app/image')
    }
}

// start watch
watcher
// on change
  .on("change", (path, stats) => {
    //exec babel
    change(path)
    console.log(`File ${path} changed size to ${stats.size}`);
  })
// add file
  .on("add", (path) => {
    //exec babel
    change(path)
    console.log(`File ${path} has been added`)
  });
