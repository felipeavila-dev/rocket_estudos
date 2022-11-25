import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import light from './src/theme/light';

import { Routes } from './src/routes';

export default function App() {
  // Implementar validacao do carregamento de fontes depois
  useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={light}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {/* {fontsLoaded ? <Routes /> : ''} */}
      <Routes />

    </ThemeProvider>
  );
}
