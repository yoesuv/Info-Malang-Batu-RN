import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import AppNavigation from './src/navigations';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigation />
    </PaperProvider>
  );
}
