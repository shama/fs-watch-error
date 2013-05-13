var fs = require('fs');
var spawn = require('child_process').spawn;
var glob = require('glob');

var limit = 999;

glob('**/*', function(err, files) {
  if (files.length > limit) files = files.slice(0, limit);
  console.log('watching ' + files.length + ' files...');
  files.forEach(function(file) {
    fs.watch(file, function() {});
  });
});

if (!process.argv[2]) {
  setTimeout(function() {
    console.log('spawning...');
    spawn(process.argv[0], [process.argv[1], 'secondrun'], {
      stdio: 'inherit',
    });
  }, 1000);
}
