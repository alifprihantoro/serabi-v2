const fs = require("fs");
let config_param =[
  'site.toml'
]; 
let config=[]
config_param
  .forEach(e=>{
    config.push(fs.readFileSync(`blog/config/${e}`, "utf8"));
  })

fs.writeFileSync('blog/config.toml', config);
