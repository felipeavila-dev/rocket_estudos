import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
  
    colors: {
      yellow_dark: string;
      yellow: string;
      yellow_light: string;

      purple_dark: string;
      purple: string;
      purple_light: string;

      title: string;
      subtitle: string;
      text: string;
      label: string;

      hover: string;
      button: string;
      input: string;
      card: string;

      background: string;
      white: string;


    }
  }
}