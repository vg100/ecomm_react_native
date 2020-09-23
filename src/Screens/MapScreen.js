
//map/current location/set address/flat no/pin no/
import React from 'react';
// import Pin from "../Image/pin";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  ActivityIndicator,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
  StyleSheet,
  Dimensions,
  useWindowDimensions
} from 'react-native';
import MapComponent from '../Componets/mapComponent';

const MapScreen = (props) => {
  const [region,setregion]=React.useState({}) 
//   React.useEffect( async () =>{
//     await  Geolocation.getCurrentPosition(info =>{
//       setregion(info.coords)
//       });

// },[])
// if(!region) return (<ActivityIndicator color={'yellow'} size="large"/>)

function getLocation(props){
  setregion(props)

}

function truncate(str){
 return str.length >10 ? str.substring(0,41) + " ..." :str
}

  return (
   <>
   <MapComponent onSelectLocation={getLocation}/>
    <View style={{marginTop:useWindowDimensions().height/1.69,elevation:5,backgroundColor:'white',padding:10,paddingHorizontal:20,borderTopStartRadius:10,borderTopRightRadius:10}}>
      <View style={{flexDirection:'row',marginVertical:8,marginLeft:-20,justifyContent:'space-around'}}>
      <Text style={{fontSize: 18}}>Select delivery location</Text>
<Text style={{color:'indianred'}}>Where we deliver ?</Text>
      </View>
      <View style={{borderBottomWidth:0.5,marginBottom:6}}></View>
<Text>Your location</Text>

<View style={{borderBottomWidth:0.5,color:'gray',position:'relative',marginTop:5,overflow: 'hidden',textOverflow:'ellipsis'}}>
<Text style={{marginBottom:9}}>{truncate(region.formattedAddress ?region.formattedAddress:'')}</Text>
</View>
    
     <TouchableOpacity style={{position: 'absolute', right:25,bottom:90}}><Text style={{color:'green'}}>CHANGE</Text></TouchableOpacity>
<TouchableOpacity style={{elevation:1,margin:5,borderRadius:5,alignItems:'center',padding:10,marginTop:20,marginBottom:15,backgroundColor:'indianred'}}>
  <Text style={{color:'white',}}> Confirm Location & Proceed</Text>
</TouchableOpacity>
      </View>
   </>
  )}
export default MapScreen;

