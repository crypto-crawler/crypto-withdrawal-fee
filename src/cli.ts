#!/usr/bin/env node
import yargs from 'yargs';
import { myFunc } from './index';

const { argv } = yargs.options({
  a: { type: 'boolean', default: false },
  b: { type: 'string', demandOption: true },
  c: { type: 'number', alias: 'chill' },
  d: { type: 'array' },
  e: { type: 'count' },
  f: { choices: ['1', '2', '3'] },
});

console.log('Hello World');

console.info(argv);

myFunc();
