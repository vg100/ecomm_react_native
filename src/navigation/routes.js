import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { HomeScreen } from "../Screens/HomeScreen";
import { AppSideDrawer } from "../navigation/Drawer";
import PhoneOtp from "../Screens/PhoneOtp";
import LoginScreen from "../Screens/LoginScreen";
import LoadingScreen from "../Screens/LoadingScreen";
import {View} from 'react-native'
const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen name="login" component={LoginScreen} />
      
    </Stack.Navigator>
   
  );
};

export const AppStack = () => {
  return <AppSideDrawer />;
};



// export const AuthStack = () => {
//   return (
//     <Stack.Navigator  screenOptions={{headerShown:false}}>
//       <Stack.Screen name="login" component={PhoneOtp} />
//     </Stack.Navigator>
//   );
// };