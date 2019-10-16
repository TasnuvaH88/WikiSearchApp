import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ResultScreen from './src/screens/ResultScreen';
import ResultsDetailScreen from './src/screens/ResultsDetailScreen';

const navigatorLinks = createStackNavigator(
  {
    Home: HomeScreen,
    Results: ResultScreen,
    ResultsDetail: ResultsDetailScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Wiki Search App'
    }
  }
);


export default createAppContainer(navigatorLinks);