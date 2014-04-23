// 'use strict';

var path = require('path');

function start(argv) {
    if (argv.help || argv.h) {
        var fs = require('fs'),
            filePath = path.join(__dirname, '..', 'doc', 'help.txt'),
            data = fs.readFileSync(filePath, 'utf8');
        console.log('\n' + data + '\n');
        process.exit(0);
    }

    if (argv.version || argv.v) {
        var pkg =  require(path.join(__dirname, '..', 'package.json'));
        console.log(pkg.version);
        process.exit(0);
    }
}

module.exports = {
    start: start
};
