#!/usr/bin/env node
'use strict';
var meow = require('meow');
var getNextProjectVersion = require('.');

var cli = meow(`
    Usage
      $ next-project-version [options]

    Options
      -i --increment [<level>]
              Increment a version by the specified level.  Level can
              be one of: major, minor, patch, premajor, preminor,
              prepatch, or prerelease.  Default level is 'patch'.
              Only one version may be specified.

      --preid <identifier>
              Identifier to be used to prefix premajor, preminor,
              prepatch or prerelease version increments.

    Examples
      $ next-project-version -i major
`, {
    flags: {
        increment: {
            type: 'string',
            alias: 'i',
            default: 'patch'
        },
        preid: {
            type: 'string',
            default: ''
        },
    }
});

process.stdout.write(getNextProjectVersion(cli.flags.increment, cli.flags.preid));
