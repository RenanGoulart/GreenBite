/* eslint-disable react/style-prop-object */
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { theme } from "@global/theme";
import { ThemeProvider } from "styled-components";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect } from "react";

import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useUpdate from "hooks/useUpdate";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const isLoading = useUpdate();

  const [fontsLoaded, fontsError] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    if (!isLoading && fontsLoaded && !fontsError) {
      SplashScreen.hideAsync();
    }
  }, [isLoading, fontsError, fontsLoaded]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <Slot />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
