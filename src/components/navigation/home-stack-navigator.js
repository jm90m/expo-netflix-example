import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from 'components/screens/home-screen';
import ShowDetailsScreen from 'components/screens/show-details-screen';

const HomeStackNavigator = StackNavigator(
  {
    Main: { screen: Home },
    ShowDetails: { screen: ShowDetailsScreen },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

export default HomeStackNavigator;
