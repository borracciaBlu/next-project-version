'use strict';
var readPkg = require('read-pkg');
var inc = require('semver/functions/inc');

function getCurrentVersion() {
    return readPkg.sync().version;
}

function getNextProjectVersion(increment, preid) {
    return inc(
        getCurrentVersion(),
        increment,
        preid
    );
}

module.exports = getNextProjectVersion;