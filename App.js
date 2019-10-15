import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ResultScreen from './src/screens/ResultScreen';

const navigatorLinks = createStackNavigator(
  {
    Home: HomeScreen,
    Results: ResultScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);


export default createAppContainer(navigatorLinks);