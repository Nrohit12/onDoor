import { useNavigationBuilder } from '@react-navigation/core';
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {shopKeeperImage} from '../../../Assets/Image';
import { useNavigation } from '@react-navigation/native';
export const DATA = [
  {
    name: 'Shopkeeper1',
    rating: 5,
    image: shopKeeperImage.shopkeeper1,
    distance: '0.6km',
    type: 'Grocery Store',
    recentOrder: '5',
    orderCount: '500+ orders in last hour',
  },
  {
    name: 'Shopkeeper2',
    rating: 5,
    image: shopKeeperImage.shopkeeper1,
    distance: '0.6km',
    type: 'Grocery Store',
    recentOrder: '5',
    orderCount: '500+ orders in last hour',
  },
  {
    name: 'Shopkeeper3',
    rating: 5,
    image: shopKeeperImage.shopkeeper1,
    distance: '0.6km',
    type: 'Grocery Store',
    recentOrder: '5',
    orderCount: '500+ orders in last hour',
  },
  {
    name: 'Shopkeeper4',
    rating: 5,
    image: shopKeeperImage.shopkeeper1,
    distance: '0.6km',
    type: 'Grocery Store',
    recentOrder: '5',
    orderCount: '500+ orders in last hour',
  },
  {
    name: 'Shopkeeper5',
    rating: 5,
    image: shopKeeperImage.shopkeeper1,
    distance: '0.6km',
    type: 'Grocery Store',
    recentOrder: '5',
    orderCount: '500+ orders in last hour',
  },
  {
    name: 'Shopkeeper6',
    rating: 5,
    image: shopKeeperImage.shopkeeper1,
    distance: '0.6km',
    type: 'Grocery Store',
    recentOrder: '5',
    orderCount: '500+ orders in last hour',
  },
];

function Item  ({item, index}) { 

  const navigation = useNavigation()

  return ( <View
    style={{elevation: 5, marginVertical: 8, marginHorizontal: wp(4)}}
    key={index}>
    <View style={styles.item}>
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{resizeMode: 'cover', width: wp(20), height: wp(20)}}
        />
      </View>
      <TouchableOpacity 
        style={{flex: 2, marginLeft: 20}} 
        onPress={() => navigation.navigate('StoreDetails', {item})}
      >
        <Text style={{fontSize: 20, fontWeight: 'bold', padding: 3}}>
          {item.name}
        </Text>
        <Text style={{padding: 3}}>{item.type}</Text>
        <View style={styles.ratingStyle}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {item.rating}🔅
          </Text>
        </View>
      </TouchableOpacity>
    </View>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 5,
      }}>
      <Text style={{color: 'white'}}>{item.orderCount}</Text>
    </View>
  </View>
);}

export const renderItem = ({item, index}) => <Item item={item} key={index} />;

const styles = StyleSheet.create({
  item: {
    padding: wp(3),
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    width: wp(60),
  },
  ratingStyle: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    backgroundColor: 'green',
    borderRadius: 15,
    height: 25,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
