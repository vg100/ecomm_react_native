import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Animate,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  MaterialCommunityIcons,
  Fontisto,
  AntDesign,
  MaterialIcons,
} from '../Constants/Icons';
import Product from '../Componets/product';

const SearchScreen = (props) => {
  const product = useSelector((state) => state.reducer.items);
  const [search, setSearch] = React.useState(null);
  const [filted, setFilted] = React.useState([]);

  function searchHandle(text) {
    setSearch(text);
    if (text.length > 0) {
      const itemfilter = product.filter((item) => {
        return item.title.includes(text);
      });
      setFilted(itemfilter);
    } else {
      setFilted([]);
    }
  }

  return (
    <>
    <View
      style={{
       
        paddingHorizontal: 20,
        paddingTop:15,
        marginBottom:10
      }}>
      <View style={{flexDirection: 'row', elevation: 2, borderRadius: 5}}>
        <MaterialIcons
          style={{marginTop: 13, marginLeft: 7}}
          name="search"
          color={'black'}
          size={26}
        />
        <TextInput
          value={search}
          autoCorrect={false}
          onChangeText={(val) => searchHandle(val)}
          style={{fontSize: 15}}
          placeholder="Search"
        />
      </View>
      
    </View>
    {
      filted.length >0 ?(<FlatList
        data={filted.length > 0 ? filted : []}
        renderItem={({item}) =><Product item={item} />}
      />):(
        <View style={{justifyContent: 'center',alignSelf:'center',alignItems: 'center',marginTop:160}}>
    <Image style={{height:120,width:120}} source={{uri:'https://www.jing.fm/clipimg/full/113-1139744_database-clipart-computer-inventory-inventory-database-icon.png'}} />
  </View>
      )
    }
   
  
  
    </>
  );
};

export default SearchScreen;
