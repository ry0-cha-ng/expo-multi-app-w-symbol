import './shim';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import sampleCode from './services/symbol';
// import { Configuration, NodeRoutesApi } from './services/NodeClientService';
// import { getRandomBytes } from './src/utils/crypto';
import { PrivateKey } from 'symbol-sdk';
import { Network, SymbolFacade } from 'symbol-sdk/symbol';

export default function App() {
  const generateAccount = () => {
    const facade = new SymbolFacade(Network.MAINNET);
    // ランダムな秘密鍵を生成
    const privateKey = PrivateKey.random();
    console.log('privateKey created', privateKey);
    
    // アカウントを生成
    const account = facade.createAccount(privateKey);
    console.log('generateAccount end', account);
  }
  useEffect(() => {
    // Run sample code
    // sampleCode();
    console.log('generateAccount start');
    generateAccount();
    console.log('generateAccount end');
    // Create Node Client Sample
    // const config = new Configuration({ basePath: 'https://symbolnode.blockchain-authn.app:3001' });
    // const nodeClient = new NodeRoutesApi(config);
    // nodeClient
    //   .getNodeHealth()
    //   .then((e) => console.log(e))
    //   .catch(() => console.log('node unhealthy'));
  }, []);

  return (
    <View style={styles.container}>
      <Text>symbol-sdk-expo-sample</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
