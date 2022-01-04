import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Picker} from '@react-native-picker/picker';
import {addIcon, subtractIcon} from '../../../Assets/Image';

import {itemImage} from '../../../Assets/Image';
import {IconButton} from 'react-native-paper';
export const DATA = [
  {
    name: 'Basmati Rice 1 kg',
    quantity: 1,
    image: itemImage.item1,
    weight: '1 kg',
    price: 80,
  },
  {
    name: 'Chana Daal 1/2 kg',
    quantity: 1,
    image: itemImage.item1,
    weight: '1 kg',
    price: 80,
  },
  {
    name: 'White Chana 1 kg',
    quantity: 1,
    image: itemImage.item1,
    weight: '1 kg',
    price: 80,
  },
  {
    name: 'Urad Dal 1/2 kg',
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
        <View style={{flex: 2, marginLeft: 20}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              padding: 3,
              color: 'blue',
            }}>
            {item.name}
          </Text>
          <Text style={{padding: 3}}>Weight: {item.weight}</Text>
          <Text
            style={{paddingHorizontal: 10, paddingVertical: 5, fontSize: 25}}>
            ₹{item.price}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={item.image}
            style={{resizeMode: 'cover', width: 60, height: 60}}
          />
          <View style={styles.itemQuantity}>
            <IconButton
              color="green"
              icon={subtractIcon}
              style={{width: 10, height: 15}}
            />
            <View
              style={{height: 30, width: 1, backgroundColor: 'grey'}}></View>
            <Text style={{padding: 5, fontWeight: 'bold'}}>
              {item.quantity}
            </Text>
            <View
              style={{height: 30, width: 1, backgroundColor: 'grey'}}></View>
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
export const renderItems = ({item, index}) => <Items item={item} key={index} />;

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
});
