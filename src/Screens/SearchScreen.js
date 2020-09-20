import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity,Animate } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from 'react-native-elements';
import Product from "../Componets/product";

const SearchScreen = (props) => {
  const product = useSelector((state) => state.reducer.items);
  const [search,setSearch]=React.useState();

console.warn(search);

  return (
    <View
      style={{
       
        flex: 1,
        padding: 20
      }}
    >
   
     <SearchBar
        placeholder="Type Here..."
        onChangeText={(val)=>setSearch(val)}
        value={search}
        clearIcon={true}
        cancelIcon={true}
      />
    
    </View>
   
  );
};

export default SearchScreen;
