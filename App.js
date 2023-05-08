import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ActivityIndicator, Button,Modal,Pressable,StatusBar,Platform } from 'react-native';
import {NavigationContainer}from '@react-navigation/native'
import{createNativeStackNavigator}from'@react-navigation/native-stack'
import Profile from './profile';


const App = () => {
const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Profile' component={Profile} options={{
          headerShown:false,
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )}
 

export default App;