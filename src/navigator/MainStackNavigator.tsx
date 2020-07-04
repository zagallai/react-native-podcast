import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../components/home/HomeScreen';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="About" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
