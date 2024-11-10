import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppNavigation from "./src/navigations";
import { THEME_COLOR } from "./src/data/colors";
import { useFonts } from "expo-font";

const queryClient = new QueryClient();

export default function App() {
  const [loaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const baseFont = {
    fontFamily: "Poppins-Regular",
  } as const;

  const baseVariants = configureFonts({ config: baseFont });

  const theme = {
    ...DefaultTheme,
    fonts: configureFonts({ config: { ...baseVariants } }),
    colors: {
      ...DefaultTheme.colors,
      primary: THEME_COLOR,
      accent: "yellow",
    },
  };

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppNavigation />
      </QueryClientProvider>
    </PaperProvider>
  );
}
