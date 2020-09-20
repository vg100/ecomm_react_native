import * as React from "react";
import { HomeStackScreen, CartStackScreen } from "./stack";
import OderScreen from "../Screens/OderScreen";
import Products from "../Componets/ProductItem";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CartItem from "../Componets/CartItem";
import Category from "../Componets/CategoryItem";
import SearchScreen from '../Screens/SearchScreen';
import {MaterialCommunityIcons,Fontisto,AntDesign} from '../Constants/Icons';
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SliderItem from "../Componets/SliderItem";
import HorizontalProductItem from "../Componets/HorizontalProductItem";
import PhoneOtp from "../Screens/PhoneOtp";
import Home from "../Screens/Home";
import { Text } from "react-native";
import MapScreen from "../Screens/MapScreen";
// import AddProduct from "../Admin/AddProduct";
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
 const AppBottomTab = () => {
  

  return (
    <Tab.Navigator activeColor="green"
    inactiveColor="black"
    barStyle={{ backgroundColor: '#ffff' }}>
       
      <Tab.Screen name="Home" component={HomeStackScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <AntDesign name="home" color={color} size={26} />
         
        ),
      }}
      />
       <Tab.Screen options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (
          <Fontisto name="search" color={color} size={26} />
          
        ),
      }} name="slider" component={SearchScreen} />
      {/* <Tab.Screen name="Cart2" component={CartItem} />
      <Tab.Screen name={`Cart (${Cart.length})`} component={CartStackScreen} /> */}
      <Tab.Screen  options={{
        tabBarLabel: 'Oder',
        tabBarIcon: ({ color }) => (
          <Fontisto name="opencart" color={color} size={26} />
          
        ),
      }} name="Order" component={Products} />
      <Tab.Screen options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color }) => (
          <Fontisto name="person" color={color} size={26} />
          
        ),
      }} name="map" component={Category} />
      <Tab.Screen options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ color }) => (
          <Fontisto name="person" color={color} size={26} />
          
        ),
      }} name="Profile" component={MapScreen} />
      
    {/*  <Tab.Screen name="Horizotal" component={HorizontalProductItem} /> */}
     
    </Tab.Navigator>
    
  );
};

export default AppBottomTab