import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity,Animate,ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from 'react-native-elements';
import Product from "../Componets/product";

const SplashScreen = (props) => {
  const product = useSelector((state) => state.reducer.items);
  const [search,setSearch]=React.useState();

console.warn(search);


  return (
    <View
      style={{
       
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
       backgroundColor:'indianred'

      }}
    >
      
   <Image style={{height:200,width:200,marginTop:-60}} source={{uri:'https://images-platform.99static.com//fjILSfboITx4fszG5uWdX2xXfm8=/0x0:1200x1200/fit-in/500x500/99designs-contests-attachments/99/99241/attachment_99241670'}} />
    <ActivityIndicator size={"large"} color={'yellow'}/>
    
    </View>
   
  );
};

export default SplashScreen;
