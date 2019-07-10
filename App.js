import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import AppNavigator from './navigation/AppNavigator';
import { ApplicationProvider } from 'react-native-ui-kitten';
import IntroScreen from './screens/IntroScreen';
import PageScreen from './screens/PageScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const AppContainer = createAppContainer(
    createStackNavigator(
      {
        Intro: IntroScreen,
        Page: PageScreen,
      },
      {
        initialRouteName: 'Intro',
      }
    )
  );

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <ApplicationProvider
        mapping={mapping}
        theme={lightTheme}>
        <AppContainer/>
      </ApplicationProvider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginVertical: 16,
  },
});

