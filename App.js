import React from 'react';
import Routes from './src/routes';
import { AppLoading } from 'expo'
import { useFonts, Raleway_800ExtraBold, Raleway_700Bold, Raleway_600SemiBold } from '@expo-google-fonts/raleway'
import { Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_300Light, Poppins_400Regular } from '@expo-google-fonts/poppins'

export default function App() {

  let [fontsLoaded] = useFonts({
    Raleway_800ExtraBold,
    Raleway_700Bold,
    Raleway_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Routes />
  );
}
