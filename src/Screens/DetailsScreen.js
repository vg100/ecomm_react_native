import React from 'react';
// import { connect } from "react-redux";

import {subtractQuantity, removeItem, addQuantity} from '../Redux/actions';
import {View, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddToCart from './addtocart';
import AddToCartButton from '../Componets/addToCartButton';
const DetailsScreen = (props) => {
  console.log('detaim,s', props.route.params.item.img);
  const Cart = useSelector((state) => state.reducer.addedItems);
  const [quantity, setQuantity] = React.useState(0);
  const [isViable, setViable] = React.useState(false);
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
    setQuantity(props.route.params.item.quantity);
  };
  function _onAdd(id) {
    dispatch({
      type: 'ADD_QUANTITY',
      id: id,
    });
    setQuantity(props.route.params.item.quantity);
  }
  function _onSub(id) {
    dispatch({
      type: 'SUB_QUANTITY',
      id: id,
    });
    setQuantity(props.route.params.item.quantity);
    if (quantity === 1) {
      setViable(false);
    }
  }
  function truncate(str){
    return str.length >10 ? str.substring(0,97) + " ..." :str
   }
  return (
    <View>
      <View style={{width: 380, height: 200}}>
          <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false}>
            {props.route.params.item.img.map((image, index) => (
              <>
              <View style={{position: 'relative'}}>
                <Image
                  key={index}
                  source={{uri: image}}
                  style={{width: 380, height: 200, margin: 2, borderRadius: 10}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: -15,
                    left: 160,
                  }}>
                  {props.route.params.item.img.map((data, i) => (
                    <Text
                      style={{
                        fontSize: 40,
                        color: index === i ? 'white' : 'gray',
                      }}>
                      •
                    </Text>
                  ))}
                </View>
              </View>
              </>
            ))}
          </ScrollView>
        </View>
        <View>
          <View style={{padding:10}}>
                    <Text style={{position: 'relative'}}>{truncate(props.route.params.item.title)}</Text>
                    <Text style={{position: 'absolute',right:55,top:25,color:'blue'}}>{"more"}</Text>
          </View>
        
        <View style={{flexDirection:'row',marginLeft:10}}>
          <Text style={{marginRight:10}}>Rs 1,24,990</Text>
          <Text>681</Text>
        </View>
        <Text style={{marginLeft:10,marginTop:5,color:'red'}}>HUrry,Only 4 left</Text>
        {Cart.filter((item) => item.id === props.route.params.item.id).length <= 0 && (
           <AddToCartButton onPress={() => addtocart(props.route.params.item.id)} />
         )}

         {Cart.filter((item) => item.id === props.route.params.item.id).length > 0 && (
           <AddToCart
             onPress={(id) => _onAdd(props.route.params.item.id)}
             onSub={(id) => _onSub(props.route.params.item.id)}
             quantity={props.route.params.quantity}
           />
         )}
        </View>
     
     
    </View>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addQuantity: (data) => {
//       return dispatch(addQuantity(data));
//     },
//     removeItem: (item_id) => {
//       return dispatch(removeItem(item_id));
//     },

//     subtractQuantity: (item) => {
//       return dispatch(subtractQuantity(item));
//     }
//   };
// };
// const mapSateToprops = (state) => {
//   return state.reducer;
// };

export default DetailsScreen;
