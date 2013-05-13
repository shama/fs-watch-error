var fs = require('fs');
var glob = require('glob');

var limit = 9999;

glob('**/*', function(err, files) {
  if (files.length > limit) files = files.slice(0, limit);
  console.log('watching ' + files.length + ' files...');
  files.forEach(function(file) {
    fs.watch(file, function() {});
  });
});
