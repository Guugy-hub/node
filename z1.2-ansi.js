//CommonJS
const ansi = require('ansi');
const cursor = ansi(process.stdout);

cursor.white().bg.red().write('Welcome to HEEEEELLLLL!!!Ha-ha-ha-ha\n').reset().bg.reset().write('\n');