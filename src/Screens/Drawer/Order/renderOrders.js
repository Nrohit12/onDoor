import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {shopKeeperImage} from '../../../Assets/Image';
export const Orders = [
  {
    name: 'Shopkeeper1',
    date: '27 July 2021',
    time: '4:25 pm',
    orderId: 'HUYT56648',
    total: 345,
    rating: 5,
    items: 'Chana and 5 other items',
  },
  {
    name: 'Shopkeeper3',
    date: '27 July 2021',
    time: '4:25 pm',
    orderId: 'HUYT56648',
    total: 360,
    rating: 4,
    items: 'Chana and 5 other items',
  },
  {
    name: 'Shopkeeper2',
    date: '27 July 2021',
    time: '4:25 pm',
    orderId: 'HUYT56648',
    total: 345,
    rating: 5,
    items: 'Chana and 5 other items',
  },
];

const Item = ({item, index}) => (
  <View
    style={{elevation: 5, marginVertical: 8, marginHorizontal: 10}}
    key={index}>
    <TouchableOpacity style={styles.item}>
      <View style={{marginRight: 10}}>
        <Image
          source={shopKeeperImage.shopkeeper1}
          style={{resizeMode: 'cover', width: wp(16), height: wp(16)}}
        />
      </View>
      <View style={{flex: 2}}>
        <View style={styles.ratingStyle}>
          <Text style={{color: 'black'}}>{item.rating}🔅</Text>
        </View>
        <View style={styles.timeStyle}>
          <Text style={{color: 'black'}}>{item.time}</Text>
        </View>
        <View style={{marginRight: 60}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={{padding: 3}}> {item.items}</Text>
          <Text style={{padding: 3}}>{item.date}</Text>
          <Text style={styles.price}>Price: {item.total}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export const renderOrders = ({item, index}) => <Item item={item} key={index} />;

const styles = StyleSheet.create({
  item: {
    padding: wp(3),
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
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
  timeStyle: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  price: {padding: 3, fontWeight: 'bold', fontSize: 15},
  name: {fontSize: 16, fontWeight: 'bold', padding: 3},
});
