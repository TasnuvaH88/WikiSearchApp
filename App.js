import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import ResultsDetailScreen from './src/screens/ResultsDetailScreen';

const navigatorLinks = createStackNavigator(
  {
    Home: HomeScreen,
    Results: ResultsScreen,
    ResultsDetail: ResultsDetailScreen
  },
  {
    initialRouteName: 'Home',
  }
);


export default createAppContainer(navigatorLinks);