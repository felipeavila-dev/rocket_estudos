import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import light from './src/theme/light';

import { Routes } from './src/routes';
import { LoadingComponent } from './src/components/LoadingIcon/styles';
import { LoadingIcon } from './src/components/LoadingIcon';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={light}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />

      {fontsLoaded ? <Routes /> : <LoadingIcon />}
    </ThemeProvider>
  );
}
