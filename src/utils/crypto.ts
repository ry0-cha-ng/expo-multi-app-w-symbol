import { Platform } from 'react-native';

export function getRandomBytes(length: number): Uint8Array {
  if (Platform.OS === 'web') {
    return window.crypto.getRandomValues(new Uint8Array(length));
  } else {
    return crypto.randomBytes(length); // IDE上でnot existエラーが発生しているがshim.jsで定義したglobal.cryptoを利用するため動作に問題はない
  }
}
