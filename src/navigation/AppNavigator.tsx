import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import NewsPostScreen from '../screens/NewsPostScreen';
import CreatePostScreen from '../screens/CreatePostScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          gestureEnabled: false,
          animation: 'none',
        }}
      />
      <Stack.Screen
        name="NewsPost"
        component={NewsPostScreen}
        options={{gestureEnabled: false, animation: 'none'}}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{gestureEnabled: false, animation: 'none'}}
      />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default AppNavigator;
