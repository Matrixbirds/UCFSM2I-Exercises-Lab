const repl = require("repl");
const fs = require("fs");
const path = require("path");
const lib = {};
const filePath = path.join(__dirname, "..", "lib");
fs.readdir(filePath, (err, files) => {
  if (err)
    throw err;
  files.reduce((pre, cur) => {
    pre[cur.replace(/\.js/, '')] = require(`${filePath}/${cur}`);
    return pre;
  }, lib);
  Object.assign(repl.start("> ").context, lib);
});
