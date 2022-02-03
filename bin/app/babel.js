import fs from 'fs'
import babel from '@babel/core'

// file params
let js_file=[
  '../src/assets/dev/js/main.js',
  '../src/assets/dev/js/ts.js',
  '../src/assets/dev/js/tambah.js',
]
// merger code
let data=[]

// read file and push to source
js_file
  .forEach(e=>{
    // console.log(e)
    data.push(fs.readFileSync(e,'utf8'))
})
let source=data.join('')
// console.log(source)

// Load and compile file normally, but skip code generation.
const { ast } = babel.transformSync(source, {
  ast: true,
  code: false,
});

// Minify the file in a second pass and generate the output code here.
const { code, map } = babel.transformFromAstSync(ast, source, {
  presets: ["minify"],
  babelrc: false,
  configFile: false,
});
// console.log(code)

// write result to file/folder destination
fs.writeFileSync('../src/assets/main.js', code);
