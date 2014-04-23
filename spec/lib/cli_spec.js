var fs = require('fs'),
    path = require('path'),
    cli = require(path.join(__dirname, '..', '..', 'lib', 'cli'));

describe('$ cli --version', function () {
    var version = require(path.join(__dirname, '..', '..', 'package.json')).version;

    beforeEach(function () {
        spyOn(console, 'log');
        spyOn(process, 'exit');
    });

    it('should output version with -v', function () {
        cli.start({v: true});
        expect(console.log).toHaveBeenCalledWith(version);
        expect(process.exit).toHaveBeenCalledWith(0);
    });

    it('should output version with --version', function () {
        cli.start({version: true});
        expect(console.log).toHaveBeenCalledWith(version);
        expect(process.exit).toHaveBeenCalledWith(0);
    });
});

describe('$ cli --help', function () {
    var data = '\n' + fs.readFileSync(path.join(__dirname, '..', '..', 'doc', 'help.txt'), 'utf8') + '\n';

    beforeEach(function () {
        spyOn(console, 'log');
        spyOn(process, 'exit');
    });

    it('should output help message with --help', function () {
        cli.start({help: true});
        expect(console.log).toHaveBeenCalledWith(data);
        expect(process.exit).toHaveBeenCalledWith(0);
    });

    it('should output help message with -h', function () {
        cli.start({h: true});
        expect(console.log).toHaveBeenCalledWith(data);
        expect(process.exit).toHaveBeenCalledWith(0);
    });
});
