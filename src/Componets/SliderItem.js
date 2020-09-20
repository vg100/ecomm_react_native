import React from "react";
import { View, TouchableOpacity, Image, StyleSheet ,FlatList,Text} from "react-native";
import { banner } from "../data";
const SliderItem = (props) => {

  var reff=React.useRef(null)

// React.useEffect(()=>{
//   setInterval(()=>{
//     if(reff !== null){
//       reff.scrollToIndex({animated: true,index:5})
//     }
//   },5000)

// },[])


  return (
    
    <View >
    <Text style={{marginTop:10,alignSelf:'center',fontSize:20}}>------------------------ New Arrival ------------------------</Text>
<FlatList
keyExtractor = {(item) => item.id}
ref={reff}
showsHorizontalScrollIndicator={false}
horizontal data={banner} renderItem={({item})=>{
  return(
    <TouchableOpacity style={{margin:10}}>
    <Image
      style={{height:200,width:300,borderRadius:20}}
      source={{
        uri:item.image
}}
    />
  </TouchableOpacity>
  )
}} />
     
    </View>
  );
};

export default SliderItem;
