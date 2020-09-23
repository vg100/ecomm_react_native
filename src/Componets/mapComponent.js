
//map/current location/set address/flat no/pin no/
import React from 'react';
// import Pin from "../Image/pin";
import Geocoder from 'react-native-geocoder'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  ActivityIndicator,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
  StyleSheet,
  Dimensions
} from 'react-native';

const MapComponent = (props) => {
  var mapStyle = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}],
    },
  ];



 
 const [marginB,setmarginB]=React.useState(1)
 
  const [latitude,setlatitude]=React.useState(0)
  const [longitude,setlongitude]=React.useState(0)
  const [map,setmap]=React.useState(false)

 

  React.useEffect(() =>{
        Geolocation.getCurrentPosition(info =>{
            setlatitude(info.coords.latitude)
            setlongitude(info.coords.longitude)
            setmap(!map)
            
          });
    
    },[])



    Geocoder.geocodePosition({lat:latitude,lng:longitude}).then(res => {
      props.onSelectLocation(res[2])
    
  })
  



  return (
   <>
   <View style={styles.container}>
     
        {
            (map && (
                <MapView
          provider={PROVIDER_GOOGLE}
          style={[styles.map,{margin:0.3,marginBottom:marginB}]}
          zoomEnabled={true}
          mapType={'hybrid'}
          initialRegion={{
            latitude:latitude,
            longitude:longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,

          }}
          onRegionChangeComplete={(data)=>{
            setlatitude(data.latitude);
            setlongitude(data.longitude);
           
          }}
          showsCompass={true}
          showsMyLocationButton={true}
          showsUserLocation={true}
          onMapReady={()=>{setmarginB(0)}}
        //   customMapStyle={mapStyle}
        >
    
        </MapView>
            ))
        }


{
            (!map && (
                <MapView
       
          style={[styles.map,{margin:0.3,marginBottom:marginB}]}
          initialRegion={{
            latitude:37.78825,
            longitude:-122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,

          }}
          onRegionChangeComplete={(data)=>{
            setlatitude(data.latitude);
            setlongitude(data.longitude);
           
          }}
          showsCompass={true}
          showsMyLocationButton={true}
          showsUserLocation={true}
          onMapReady={()=>{setmarginB(0)}}
        // customMapStyle={mapStyle}
        >
    
        </MapView>
            ))
 }
    
    <View style={{flex: 1,justifyContent:'center',alignItems:'center',top:-30}}>
        <Text style={{color:'indianred'}}>{"You are here!"}</Text>
      <Image resizeMode="contain" style={{height:55,width:50}} source={require('../Image/pin.png')}/>
        </View>

        
        <TouchableOpacity style={{position:'absolute',top:0,left:8,}}>
      <Image resizeMode="contain" style={{height:40,width:40}} source={{uri:'https://www.freeiconspng.com/uploads/return-button-png-26.png'}}/>
        </TouchableOpacity>
      </View>
     
 </>
  );
};
const styles = StyleSheet.create({
    container: {
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
      alignItems: 'center',
      justifyContent: 'flex-end',
        height:Dimensions.get('window').height/1.68,
        width:Dimensions.get('window').width,
      
    
     
    },
    map: {
      position:'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
    
   
    },
  });
export default MapComponent;

