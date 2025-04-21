const ExpoCrypto = require('expo-crypto');
const hmac = require('create-hmac');
const cryptoBrowserify = require('crypto-browserify');

function randomBytes(size) {
  if (typeof window !== 'undefined' && window.crypto?.getRandomValues) {
    return window.crypto.getRandomValues(new Uint8Array(size));
  }
  return ExpoCrypto.getRandomValues(new Uint8Array(size));
}


function createHash(algorithm) {
  return cryptoBrowserify.createHash(algorithm);
}

function createHmac(algorithm, data) {
  if (data instanceof ArrayBuffer || data instanceof Uint8Array) {
    data = Buffer.from(data);
  }
  return hmac(algorithm, data);
}

function createCipheriv(algorithm, key, iv, options) {
  return cryptoBrowserify.createCipheriv(algorithm, key, iv, options);
}

function createDecipheriv(algorithm, key, iv, options) {
  return cryptoBrowserify.createDecipheriv(algorithm, key, iv, options);
}

module.exports = {
  randomBytes,
  createHash,
  createHmac,
  createCipheriv,
  createDecipheriv,
};
