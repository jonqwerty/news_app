import React, {FC, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './src/navigation/AppNavigator';
import {Colors} from './src/common/style';

const App: FC = () => {
  useEffect(() => {
    // avoid blink between splash screen and screen
    setTimeout(() => SplashScreen.hide(), 10);
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

export default App;
