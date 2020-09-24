import React from 'react';
import {categories, products} from './../data';
import axios from 'axios';
import Modal from 'react-native-modal';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import CategoryItem from '../Componets/CategoryItem';
import HorizontalProductItem from '../Componets/HorizontalProductItem';
import SliderItem from '../Componets/SliderItem';
import ProductItem from '../Componets/ProductItem';
import Products from '../Componets/product';
import {
  MaterialCommunityIcons,
  Fontisto,
  AntDesign,
  Octicons,
  MaterialIcons,
  Feather,
} from '../Constants/Icons';
import LoginScreen from './LoginScreen';
const HomeScreen = (props) => {
  console.log('callled');
  const [isModalVisible, setisModalVisible] = React.useState(true);
  const data = [
    'trending',
    '2020',
    '30% OFF',
    '40% OFF',
    '50% OFF',
    '60% OFF',
    'most Viewd',
  ];
  // const clcik_me= async() => {
  //   axios({
  //     method: 'GET',
  //     url: 'http://192.168.1.6:8000/api/app/',
  //   }).then((res)=>{
  //     console.log(res.data)
  //   }).catch((err)=>console.log(err))
  // }

  // console.log(props.route.params.modal);

  // if(props.route.params.modal){
  //   setisModalVisible(true)

  // }
  const toggleModal = () => {
    setisModalVisible(!isModalVisible);
  };
  // React.useEffect(() => {

  // },[])
function _getUser(value){
console.log(value,'current users');
}
  return (
    <>
      {/* <Button onPress={clcik_me} title="click me" /> */}
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},

            borderBottomEndRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    borderStyle: 'solid',
                    borderWidth: 1.5,
                    marginLeft: 4,
                    marginRight: 4,
                    marginBottom: 3,
                    borderColor: 'black',
                    borderRadius: 10,
                    padding: 8,
                    borderColor: 'orange',
                  }}>
                  <Text>{item} </Text>
                  <MaterialIcons name="trending-up" color={'green'} size={18} />
                </View>
              );
            }}
          />
        </View>
        <KeyboardAvoidingView behavior={'paddingx'}>
          <View style={{flex: 1}}>
            {/* <Button title="Show modal" onPress={toggleModal} /> */}
            <Modal
              backdropOpacity={0.5}
              onBackButtonPress={() => setisModalVisible(false)}
              animationIn={'slideInUp'}
              isVisible={isModalVisible}
              onBackdropPress={() => setisModalVisible(false)}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 250,
                  elevation: 2,
                  borderRadius: 5,
                }}>
                <Text style={{fontSize: 25, alignSelf: 'center', padding: 10}}>
                  LOGIN!
                </Text>
                <TouchableOpacity
                  onPress={() => setisModalVisible(false)}
                  style={{position: 'absolute', right: 20, marginTop: 10}}>
                  <Text style={{fontSize: 20, color: 'indianred'}}>X</Text>
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: 'row',
                    elevation: 2,
                    borderRadius: 5,
                    marginHorizontal: 20,
                  }}>
                  <Text style={{margin: 15}}>+91</Text>
                  <Text style={{marginLeft: -10,fontSize:25,marginTop:7}}>|</Text>
                  <TextInput keyboardType={'number-pad'} placeholder={'Enter mobile Number'} />
                </View>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    elevation: 2,
                    borderRadius: 4,
                    padding: 10,
                    margin: 20,
                    width: 285,
                    backgroundColor: 'indianred',
                  }}>
                  <Text style={{color: 'white', alignSelf: 'center'}}>
                    Confirm
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{justifyContent:'center',alignSelf:'center',elevation: 2, borderRadius: 5,padding:10,width:300,backgroundColor:'indianred',}}>
      <Text style={{color:'white',alignSelf:'center'}}>Login with Google</Text>
    </TouchableOpacity> */}
                <LoginScreen getUser={_getUser}/>
              </View>
            </Modal>
          </View>
        </KeyboardAvoidingView>

        <CategoryItem navigation={props.navigation} />
        <SliderItem />
        <HorizontalProductItem />

        <ProductItem navigation={props.navigation} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
