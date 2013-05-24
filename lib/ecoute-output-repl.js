/* global require module */
var repl = require('repl');

function Output (config) {
    config = config || {};
    this.key = config.key || 'output';
}

Output.prototype.initialize = function (done) {
    this.instance = repl;
    this.start = new Date();

    return done();
};

Output.prototype.execute = function (output, done) {
    console.log([
        'Ready!',
        // calculate the time it took from initialization to output
        '(Got here in',((new Date()) - this.start)+'ms)'
    ].join(' '));

    this.instance.start('> ');
    this.instance.repl.context[this.key] = output;

    return done();
};


module.exports = function (config) {
    return (new Output(config));
}
