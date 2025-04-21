/* eslint-env node */
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);
/** @type {import('expo/metro-config').MetroConfig} */
const config = {
  ...defaultConfig,
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      if ('./ed25519_wasm.js' === moduleName) {
        return { type: 'empty' };
      }

      const SYMBOL_SDK_SUBPATH_IMPORT = 'symbol-sdk/';
      if (moduleName.startsWith(SYMBOL_SDK_SUBPATH_IMPORT)) {
        moduleName = `symbol-sdk/src/${moduleName.substring(SYMBOL_SDK_SUBPATH_IMPORT.length)}`;
      }

      return context.resolveRequest(context, moduleName, platform);
    },
    extraNodeModules: {
      ...defaultConfig.resolver.extraNodeModules,
      crypto: path.resolve(__dirname, 'shims/crypto.js'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
      events: require.resolve('events'),
      assert: require.resolve('assert'),
      url: require.resolve('url'),
      process: require.resolve('process'),
    },
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg', 'cjs'],
  },
};

module.exports = config;
