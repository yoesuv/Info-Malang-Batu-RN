import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppNavigation from "./src/navigations";
import { THEME_COLOR } from "./src/data/colors";
import { Platform } from "react-native";

const queryClient = new QueryClient();

const fontConfig = {
  customVariant: {
    fontFamily: Platform.select({
      ios: "Poppins-Regular",
      android: "Poppins-Regular",
      default: "Poppins-Regular",
    }),
    fontWeight: "400" as "400",
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...DefaultTheme.colors,
    primary: THEME_COLOR,
    accent: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppNavigation />
      </QueryClientProvider>
    </PaperProvider>
  );
}
