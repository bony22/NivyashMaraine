import { Text, View, Icon, Dimensions } from 'react-native'
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {Root} from 'native-base';

import { DraweItems, createDrawerNavigator } from 'react-navigation-drawer'

import LogIn from './app/screen/LogIn';
import Launch from './app/screen/Launch';
import AllTabs from './app/screen/AllTabs';
import AllTab2 from './app/screen/AllTab2';
import  Loader from "./app/screen/Loading/Loader";
import NavigationService from './app/service/Navigation';
import Auth from './app/service/Auth';
import NewTab from './app/screen/NewTab';
import WorkPlan from './app/screen/WorkPlan';
import Vessel from './app/screen/Vessel';
import Yard from './app/screen/Yard';
import Enviorment from './app/screen/Enviorment';
import Work from './app/screen/Work';


// const ScreenStack = createStackNavigator(
//   {
    
//     // Home:Launch,
//     Login:LogIn,
//     AllTabs:AllTabs,
//    // AllTab2:AllTab2
   

//   },
//   {
//     initialRouteName: 'Login',
//      headerMode : 'none'
//   }
// );

// const AppContainer = createAppContainer(ScreenStack);



// export default class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       isVisible: true,
//     }
//   }

  



//   render() {
//     return (


//       <AppContainer />
      
//     )
//   }
// }






 


const MainNavigator = createStackNavigator(

  {
    
        // Home:Launch,
       //  Login:LogIn,
       NewTab:NewTab,
       // AllTab2:AllTab2
       WorkPlan:WorkPlan,
       Vessel:Vessel,
       Yard:Yard,
       Enviorment:Enviorment,
      },
      {
        initialRouteName: 'NewTab',
         headerMode : 'none'
      }
    );
   

//my auth start
  const AuthStack= createAppContainer(
 
    createStackNavigator(
      {
        
        // Home : {
          
        //   screen : Launch
        // },
        Login : {
          
          screen : LogIn
        },
        
        
      },
      {
        headerMode: "none",
       initialRouteName: "Login"
      }
    )
  );
  class AppLoading extends Component {
  
    constructor(props) {
      super(props);
         this._logData();
     }
  
     _logData = async() => {
      let data = await Auth.getAccount();
      this.props.navigation.navigate(data != null ? 'App' : 'Auth');
    
     }
     render() {
      return (
         <Loader/>
       );
     }
    } 
  
     const SanDeal= createAppContainer(
      createSwitchNavigator(
      {
        AuthLoading: AppLoading,
        App: MainNavigator,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    ));
    
  






//  const AppRoot = createAppContainer(MainNavigator);

export default class App extends Component {

 
  render() {
 
    return (
      
        <Root>
          {/* <AppRoot ref={(r) => {NavigationService.setTopLevelNavigator(r)}}/> */}

          <SanDeal ref={(r) => {NavigationService.setTopLevelNavigator(r)}}/>
          
          
        </Root>
       
    );
  }
}



