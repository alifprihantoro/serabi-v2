var path = require("path");
fs = require("fs");
const { exec } = require("child_process");
// const mypath = [];
function fromDir(startPath, filter) {
  //console.log('Starting from dir '+startPath+'/');

  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    // console.log(stat)
    if (stat.isDirectory()) {
      // console.log(filename)
      fromDir(filename, filter); //recurse
    } else if (filename.indexOf(filter) >= 0) {
      // image processing----------------
      exec(
        `convert ${filename} -resize 100x100 -quality 50 ${filename.replace(
          ".png",
          ".min.png"
        )}`
      );
      console.log('get :'+filename);
      console.log('to :'+filename.replace(".png",".min.png"));
      // fs.writeFileSync('./test.txt', filename+"\n");
      // mypath.push(`/${filename}`);
    }
  }
}
fromDir("./src/static/img/", ".png");
// console.log(mypath)
