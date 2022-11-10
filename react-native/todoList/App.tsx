import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { MainArea } from './src/components/MainArea';

import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <MainArea />

      <StatusBar style="auto" />
    </View>
  );
}

