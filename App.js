
import { Text, View, Icon, Dimensions } from 'react-native'

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { DraweItems, createDrawerNavigator } from 'react-navigation-drawer'

import LogIn from './app/screen/LogIn';
import Launch from './app/screen/Launch';
import AllTabs from './app/screen/AllTabs';




const ScreenStack = createStackNavigator(
  {
    
    Home:Launch,
    Login:LogIn,
    AllTabs:AllTabs,
   

  },
  {
    initialRouteName: 'Home',
     headerMode : 'none'
  }
);

const AppContainer = createAppContainer(ScreenStack);



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isVisible: true,
    }
  }

  // componentDidMount() {
  //   // do stuff while splash screen is shown
  //   // After having done stuff (such as async tasks) hide the splash screen
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 3000);

  // }



  render() {
    return (


      <AppContainer />
      
    )
  }
}


