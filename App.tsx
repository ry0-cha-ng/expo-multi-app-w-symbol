import './shim';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrivateKey } from 'symbol-sdk';
import { Network, SymbolAccount, SymbolFacade } from 'symbol-sdk/symbol';

export default function App() {
  const [account, setAccount] = useState<SymbolAccount | null>(null);

  const generateAccount = () => {
    const facade = new SymbolFacade(Network.MAINNET);
    // ランダムな秘密鍵を生成
    const privateKey = PrivateKey.random();
    
    // アカウントを生成
    const account = facade.createAccount(privateKey);
    return account;
  }

  useEffect(() => {
    const account = generateAccount();
    setAccount(account);
  }, []);

  return (
    <View style={styles.container}>
      <Text>generateAccount</Text>
      <Text>address: {account?.address.toString()}</Text>
      <Text>publicKey: {account?.publicKey.toString()}</Text>
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
