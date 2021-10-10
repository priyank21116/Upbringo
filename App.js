/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import InputItemsScreen from './screens/InputItemsScreen';
import ReceiptScreen from './screens/ReceiptScreen';

import store from './store'

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer >
        <Provider store={store} >
          <SafeAreaProvider>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
              style={{ flex: 1 }}
            >

              <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }} >

                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="InputItemsScreen" component={InputItemsScreen} />
                <Stack.Screen name="ReceiptScreen" component={ReceiptScreen} />

              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </Provider>
      </NavigationContainer>
    </>
  );
};



export default App;
