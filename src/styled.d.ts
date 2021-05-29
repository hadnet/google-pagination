import 'styled-components';

// extends DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      active: string;
      activeFont: string;
      font: string;
      background: string;
      roundBtns?: string;
    };
  }
}
