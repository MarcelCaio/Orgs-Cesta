import { SafeAreaView, StatusBar, View } from 'react-native';

import Cesta from './src/pages/Cesta';
import mocks from './src/mocks/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontcarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontcarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mocks} />
    </SafeAreaView>
  );
}


