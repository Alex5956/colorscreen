import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView ,StyleSheet} from 'react-native';
import { ScreenStack } from 'react-native-screens';
import { startClock } from 'react-native-reanimated';

export default function App() {
  return (
    <SafeAreaView styles={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component ={HomeScreen}/>
        <Stack.Screen  name="Color" component={ColorScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App ; 