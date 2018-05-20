'use strict';

exports.get = function(req, res) {
    var config = process;
    res.json(config ? process.env.mongoPassword : 'config not found...');
    // res.json('found route!');
};