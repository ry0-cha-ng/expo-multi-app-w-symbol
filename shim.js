if (typeof __dirname === 'undefined') global.__dirname = '/';
if (typeof __filename === 'undefined') global.__filename = '';

if (typeof process === 'undefined') {
  global.process = require('process');
} else {
  const bProcess = require('process');
  for (const p in bProcess) {
    if (!(p in process)) {
      process[p] = bProcess[p];
    }
  }
}

process.browser = false;
process.env['NODE_ENV'] = typeof __DEV__ === 'boolean' && __DEV__ ? 'development' : 'production';

if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer;
}

if (typeof global.crypto === 'undefined') {
  global.crypto = require('./shims/crypto');
}
