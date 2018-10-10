import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Home from './src/screens/Home';

console.disableYellowBox = true;

const ScreenStackNavigator = createStackNavigator({
  Home:Home,
},
{
  headerMode: "none",
  initialRouteName: "Home",
});

const AppStackNavigator = createStackNavigator({
  MainPage: ScreenStackNavigator
}, { 
  mode: 'modal', 
  headerMode: 'none',
});


class App extends Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

export default App;
