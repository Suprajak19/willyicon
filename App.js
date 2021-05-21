import React ,{Component}from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import Transaction from './screens/transaction';
import Search from './screens/search';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
export default class App extends Component {
  render(){
  return (
   
     
  <AppContainer/>
   
  );
}
}
const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName;
      console.log(routeName);
      if(routeName==='Transaction'){
        return(<Image source={require("./assets/transactionScreenimg.png")} style={{width:40,height:40}}/>)
      }
      else if(routeName==='Search'){
        return(<Image source={require("./assets/searchScreenimg.png")} style={{width:40,height:40}}/>)
      }
    }
  })
})
const AppContainer=createAppContainer(TabNavigator);

