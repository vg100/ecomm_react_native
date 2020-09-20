import React from "react";
import { categories, products } from "./../data";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import CategoryItem from "../Componets/CategoryItem";
import HorizontalProductItem from "../Componets/HorizontalProductItem";
import SliderItem from "../Componets/SliderItem";
import ProductItem from "../Componets/ProductItem";
import Products from "../Componets/product";
import {MaterialCommunityIcons,Fontisto,AntDesign,Octicons,MaterialIcons,Feather} from '../Constants/Icons';
const HomeScreen = (props) => {
 const data=["trending","2020","30% OFF","40% OFF","50% OFF","60% OFF",'most Viewd']

  console.log(props);
  return (
    <>
   
      <ScrollView>
      <View style={{backgroundColor:'white', shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
      
        
        borderBottomEndRadius:10,
        borderBottomLeftRadius:10,
        }}>
  <FlatList
  showsHorizontalScrollIndicator={false}
horizontal
  data={data}
  renderItem={({item})=>{
return (
  <View style={{flexDirection:'row',borderStyle:'solid',borderWidth:1.5,marginLeft:4,marginRight:4,marginBottom:3,borderColor:'black',borderRadius:10,padding:8,borderColor:'orange'}}>
  <Text>{item}  </Text><MaterialIcons name="trending-up" color={"green"} size={18} />
  </View>
)
  }}
  />
    </View>
        <CategoryItem navigation={props.navigation} />
        <SliderItem />
        <HorizontalProductItem />

        <ProductItem navigation={props.navigation} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
