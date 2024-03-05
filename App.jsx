import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import LanguageScreen from './components/LanguageChooser';
import LoginScreen from './components/LoginScreen';
import LoadingSet1Screen from './components/LoadingSet1';
import Set1Screen from './components/Set1';
import AllSetsScreen from './components/SetChooser';
import SettingsScreen from './components/Settings';
import CultureCorner from './components/CultureCorner';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="CultureCorner" component={CultureCorner} />
    </Tab.Navigator>
  );
};

const Dialectable = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LanguageChooser" component={LanguageScreen} />
        <Stack.Screen name="Homebase" component={HomeTab} />
        <Stack.Screen name="SetChooser" component={AllSetsScreen} />
        <Stack.Screen name="LoadingSet1" component={LoadingSet1Screen} />
        <Stack.Screen name="Set1" component={Set1Screen} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Dialectable

const styles = StyleSheet.create({})