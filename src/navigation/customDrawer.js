import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{height: 120,marginTop: -3.8,marginBottom:-20}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 40,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
          onPress={() =>props.navigation.navigate('HomeScreen',{modal:true})}
            style={{
              elevation: 1.5,
              borderRadius: 4,
              padding: 9,
              paddingHorizontal: 20,
              marginRight: 9,
              backgroundColor:'indianred',
             
            }}>
            <Text style={{color:'white'}}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              elevation: 1.5,
              borderRadius: 4,
              padding: 9,
              paddingHorizontal: 20,
              backgroundColor:'indianred'
            }}>
            <Text style={{color:'white'}}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={{position: 'absolute', right: 10,top:5}}>
        <Text style={{fontSize: 25}}>X</Text>
      </TouchableOpacity>
      <View style={{ alignSelf:'center',borderBottomWidth: 2,width:250,marginTop:-5,marginBottom:-10}}></View>

      <DrawerItemList {...props} />

      <View
        style={{
          flex: 1,
          // backgroundColor: 'red',
          marginTop: -20,
          height: useWindowDimensions().height / 1.7,
         
        }}>
          <View >
            <TouchableOpacity style={{elevation:1,margin:5,borderRadius:5,alignItems:'center',padding:5}}  ><Text style={{fontSize: 25}}>X</Text></TouchableOpacity>
            <TouchableOpacity style={{elevation:1,margin:5,borderRadius:5,alignItems:'center',padding:5}}  ><Text style={{fontSize: 25}}>X</Text></TouchableOpacity>
            <TouchableOpacity style={{elevation:1,margin:5,borderRadius:5,alignItems:'center',padding:5}}  ><Text style={{fontSize: 25}}>X</Text></TouchableOpacity>
            <TouchableOpacity style={{elevation:1,margin:5,borderRadius:5,alignItems:'center',padding:5}}  ><Text style={{fontSize: 25}}>X</Text></TouchableOpacity>
            <TouchableOpacity style={{elevation:1,margin:5,borderRadius:5,alignItems:'center',padding:5}}  ><Text style={{fontSize: 25}}>X</Text></TouchableOpacity>
            <TouchableOpacity style={{elevation:1,margin:5,borderRadius:5,alignItems:'center',padding:5}}  ><Text style={{fontSize: 25}}>X</Text></TouchableOpacity>
            <TouchableOpacity style={{elevation:1,margin:5,borderRadius:5,alignItems:'center',padding:5}}  ><Text style={{fontSize: 25}}>X</Text></TouchableOpacity>
            </View>
        <View style={{ alignSelf:'center',borderBottomWidth: 2,width:250,marginTop:15}}></View>
      </View>
      <View style={{flexDirection:'row',paddingHorizontal:2,justifyContent:'center',alignItems:'center'}}>
            <DrawerItem style={{elevation:1,borderRadius:5,marginRight:-1,width:120}} label="Orders" />
            <DrawerItem style={{elevation:1,borderRadius:5,width:120}} label="Orders" />
            </View>
    </DrawerContentScrollView>
  );
};
