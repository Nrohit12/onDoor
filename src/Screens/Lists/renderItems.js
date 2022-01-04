import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {addIcon, subtractIcon, itemImage} from '../../Assets/Image';

import {IconButton} from 'react-native-paper';
export const DATA = [
  {
    category:'Rice',
    name: 'Basmati Rice',
    quantity: 1,
    image: itemImage.item1,
    weight: '1 kg',
    price: 80,
  },
  {
    category:'Atta',
    name: 'Aashivaad Atta',
    quantity: 1,
    image: itemImage.item1,
    weight: '5 kg',
    price: 80,
  },
  {
    category:'Vegetables',
    name: 'Potato',
    quantity: 1,
    image: itemImage.item1,
    weight: '1 kg',
    price: 80,
  },
  {
    category:'Dairy',
    name: 'Verka Milk',
    quantity: 1,
    image: itemImage.item1,
    weight: '1 kg',
    price: 80,
  },
];

const Items = ({item}) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={{marginHorizontal: wp(4)}}>
      <View style={styles.item}>
      <Image
            source={item.image}
            style={styles.itemImage}
          />
        <View style={{flex: 2, marginLeft: 20}}>
          <Text
            style={styles.itemName}>
            {item.name}
          </Text>
          <Text style={{padding: 3}}>Weight: {item.weight}  <Text style={{fontWeight:'600',fontSize:14}}>  ₹{item.price}</Text></Text>
          
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          
          <View style={styles.itemQuantity}>
            <IconButton
              color="green"
              icon={subtractIcon}
              style={{width: 10, height: 15}}
            />
            <View
              style={styles.separator}></View>
            <Text style={{padding: 5, fontWeight: 'bold'}}>
              {item.quantity}
            </Text>
            <View
              style={styles.separator}></View>
            <IconButton
              color="green"
              icon={addIcon}
              style={{width: 15, height: 15}}
              onPress={() => console.log('hello')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export const renderItems = ({item,index})=> <Items item={item} key={index} />;

const styles = StyleSheet.create({
  item: {
    padding: wp(3),
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: wp(99),
  },
  ratingStyle: {
    position: 'absolute',
    right: 5,
    backgroundColor: 'green',
    borderRadius: 15,
    height: 25,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemQuantity: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 30,
    elevation: 1,
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
  },
  itemName:{
    fontSize: 18,
    fontWeight: 'bold',
    padding: 3,
    color: 'blue',
  },
  itemPrice:{
    paddingHorizontal: 10, 
    paddingVertical: 5, 
    fontSize: 25
  },
  itemImage:{
    resizeMode: 'cover', 
    width: 60, 
    height: 60
  },
  separator:{
    height: 30, 
    width: 1, 
    backgroundColor: '#FFCCD2'
  }
});
