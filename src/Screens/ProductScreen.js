import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity,ScrollView, } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {MaterialCommunityIcons,Fontisto,AntDesign,Octicons,MaterialIcons,Feather,Ionicons} from '../Constants/Icons';
import Product from "../Componets/product";


const ProductScreen = (props) => {
  const product = useSelector((state) => state.reducer.items);
  console.log(product);

  const filter = product.filter((data) => {
    return data.category === props.route.params.category;
  });

  console.log(filter);
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{flexDirection:'row',paddingHorizontal:15,paddingVertical:5,justifyContent:'space-between'}}>
    <Text>{filter.length} Products</Text>
    <View  style={{flexDirection:'row'}}>
    <Ionicons name="grid-outline" color={"black"} size={20} /><Feather name="meh" color={"black"} size={20} />
    </View>
   
    </View>
    <View
      style={{
      
        
      }}
    >
      <FlatList
        data={filter}
        renderItem={({ item }) => {
          console.log("items", item);
          return <Product item={item} />;
        }}
        //Setting the number of column
        // numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    </ScrollView>
    </>
  );
};

export default ProductScreen;
