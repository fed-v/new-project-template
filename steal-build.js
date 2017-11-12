//build.js
var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
  config: __dirname + "/package.json!npm",
    bundleSteal: true
}, {

  // Set bundle destination path	
  dest: __dirname + "/builds/prod/js/dist/",
  bundleAssets: true

});





