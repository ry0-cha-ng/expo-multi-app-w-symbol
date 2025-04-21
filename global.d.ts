import type * as cryptoShim from './shims/crypto';

declare global {
  var crypto: typeof cryptoShim;
}
