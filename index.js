var export_module = require('./lib/paperboy');
for (var i in export_module)
  exports[i] = export_module[i];
