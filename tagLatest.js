#!/usr/bin/env node

/* @flow */
const cp = require('child_process');
const {version} = require('./package.json');

function gitTagLatest() {
    cp.execFileSync('git', [
        'tag',
        '-a',
        `publish/${
            process.env.PUBLISH_DESTINATION === 'npm' ? 'npm' : 'gpr'
        }/${version}`,
        '-m',
        `Publish @yevhenpashutin/react-native-slider v${version}`,
    ]);
}

process.on('SIGINT', () => process.exit(0));
process.on('unhandledRejection', (e) => {
    throw e;
});

gitTagLatest();
