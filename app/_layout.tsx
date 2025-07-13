import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "../global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    // Playfair Display fonts
    'PlayfairDisplay-Regular': require('../assets/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf'),
    'PlayfairDisplay-Bold': require('../assets/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf'),
    'PlayfairDisplay-Medium': require('../assets/fonts/Playfair_Display/static/PlayfairDisplay-Medium.ttf'),
    'PlayfairDisplay-SemiBold': require('../assets/fonts/Playfair_Display/static/PlayfairDisplay-SemiBold.ttf'),
    
    // Poppins fonts
    'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    
    // Space Grotesk fonts
    'SpaceGrotesk-Regular': require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk-Regular.ttf'),
    'SpaceGrotesk-Bold': require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk-Bold.ttf'),
    'SpaceGrotesk-Medium': require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk-Medium.ttf'),
    'SpaceGrotesk-SemiBold': require('../assets/fonts/Space_Grotesk/static/SpaceGrotesk-SemiBold.ttf'),
    
    // Tagesschrift
    'Tagesschrift-Regular': require('../assets/fonts/Tagesschrift/Tagesschrift-Regular.ttf'),
    
    // Space Mono
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{
    headerShown: false,
  }} />;
}
