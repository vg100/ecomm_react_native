import React from "react";
import { View, FlatList } from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import { products } from "../data";

 import Products from "./product";
const ProductItem = (props) => {

  console.log('productitems',props)
  
  const Product = useSelector((state) => state.reducer.items).slice(0,5);

  return (
    <View>
      <FlatList
        data={Product}
        renderItem={({ item }) => {
          return <Products navigation={props.navigation} item={item} />;
        }}
      />
    </View>
  );
};

export default ProductItem;
