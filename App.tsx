import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppNavigation from './src/navigations';
import { THEME_COLOR } from './src/data/colors';

const queryClient = new QueryClient();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: THEME_COLOR,
    accent: 'yellow',
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppNavigation />
      </QueryClientProvider>
    </PaperProvider>
  );
}
