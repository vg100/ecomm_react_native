import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import PlusMinusBtn from './UI/Plus&MinusBtn';
import {
  MaterialCommunityIcons,
  Fontisto,
  AntDesign,
  Octicons,
  MaterialIcons,
  Feather,
} from '../Constants/Icons';
import {useDispatch, useSelector} from 'react-redux';
import AddToCart from '../Screens/addtocart';
import AddToCartButton from './addToCartButton';

const Products = (props) => {
  const Cart = useSelector((state) => state.reducer.addedItems);
  const [isViable, setViable] = React.useState(false);
  const [isSelected, setisSelected] = React.useState(false);
  const [quantity, setQuantity] = React.useState(0);

  // React.useEffect(()=>{
  // if(Cart.length>0){
  //   setViable(true)
  // }
  // },[cart])

  const dispatch = useDispatch();
  const addtocart = (id) => {
    console.log(id);
    dispatch({
      type: 'ADD_TO_CART',
      id: id,
    });

    dispatch({
      type: 'IF_ADDED',
      id: id,
    });
    setViable(true);
    setQuantity(props.item.quantity);
  };
  function _onAdd(id) {
    dispatch({
      type: 'ADD_QUANTITY',
      id: id,
    });
    setQuantity(props.item.quantity);
  }
  function _onSub(id) {
    dispatch({
      type: 'SUB_QUANTITY',
      id: id,
    });
    setQuantity(props.item.quantity);
    if (quantity === 1) {
      setViable(false);
    }
  }

  function truncate(str){
    return str.length >10 ? str.substring(0,50) + " ..." :str
   }
  return (
    <>
      <TouchableOpacity
     
      activeOpacity={0.7}
        onPress={() => props.navigation.navigate('Detail', {item: props.item,quantity:quantity})}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            borderColor: '#E5E5E5',
            borderWidth: 1,
            borderEndColor:'red',
            margin: 5,
            borderWidth: 1,
            borderRadius: 5,
            shadowColor: 'red',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 2,
            margin: 5,
          }}>
          <Image
            style={{
              width: 120,
              height: 150,
              borderTopRightRadius: 9,
              borderBottomRightRadius: 9,
            }}
            source={{uri: props.item.image}}
          />
          <View style={{position: 'absolute', left: 90, top: 6}}>
            {!isSelected ? (
              <TouchableOpacity onPress={() => setisSelected(true)}>
                <Fontisto name="heart-alt" color={'black'} size={20} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setisSelected(false)}>
                <Fontisto name="heart-alt" back color={'red'} size={20} />
              </TouchableOpacity>
            )}
          </View>
         
          <View style={{marginHorizontal: 10, marginTop: 8}}>
            <View style={{justifyContent: 'center',width:210}}>
              <Text style={{fontSize: 16,overflow: 'hidden',textOverflow:'ellipsis'}}>{truncate(props.item.title)}</Text>
            </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{}} >
              <Text style={null}>{'Saved ' + props.item.saved}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'green',
                  width: 45,
                  paddingLeft: 8,
                  borderRadius: 3,
                }}>
                <Text style={{color: 'white', marginTop: 1.5}}>4.4</Text>
                <Text style={{color: 'white', marginLeft: 4, marginBottom: 4}}>
                  ★
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={{marginRight: 5}}>{'₹ ' + props.item.price}</Text>
                <Text
                  style={{textDecorationLine: 'line-through', color: 'gray'}}>
                  {props.item.mrp}
                </Text>
              </View>

              <Text style={null}>{'Unit ' + props.item.kg || 0}</Text>
            </View>
            <View style={{margin:20}}>
              
              {Cart.filter((item) => item.id === props.item.id).length <= 0 && (
           <AddToCartButton onPress={() => addtocart(props.item.id)} />
         )}

         {Cart.filter((item) => item.id === props.item.id).length > 0 && (
           <AddToCart
             onPress={(id) => _onAdd(props.item.id)}
             onSub={(id) => _onSub(props.item.id)}
             quantity={quantity}
           />
         )}</View>
            </View>
           
           
          </View>
         

         
        </View>
       
      </TouchableOpacity>
    </>
  );
};

export default Products;

// {
//   Cart.length >0 ?(
//     <View style={{marginTop:40}}>
//     {!isViable ? (
//       <AddToCartButton onPress={() => addtocart(props.item.id)} />
//     ) : null}

//     {isViable ? (
//       <AddToCart
//         onPress={(id) => _onAdd(props.item.id)}
//         onSub={(id) => _onSub(props.item.id)}
//         quantity={quantity}
//       />
//     ) : null}
//     </View>
//   ):( <AddToCartButton onPress={() => addtocart(props.item.id)} />)
// }
