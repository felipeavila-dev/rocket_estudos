import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Routes } from './src/routes';
import light from './src/theme/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes />
    </ThemeProvider>
  );
}
