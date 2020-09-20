import React from 'react';
// import { connect } from "react-redux";

import {subtractQuantity, removeItem, addQuantity} from '../Redux/actions';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const DetailsScreen = (props) => {
  console.log('detaim,s', props.route.params.item);
  return (
    <View>
      <Text>{JSON.stringify(props.route.params.item)}</Text>
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
