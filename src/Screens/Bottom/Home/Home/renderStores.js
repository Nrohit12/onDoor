import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {shopKeeperImage} from '../../../../Assets/Image';
import {useNavigation} from '@react-navigation/native';

export const Stores = [
  {
    name: 'Shopkeeper1',
    rating: 5,
    image: shopKeeperImage.shopkeeper1,
    distance: '0.6km',
    type: 'Grocery',
    recentRating: '5',
    orderCount: '500+ orders in last hour',
    storeId: 'Store1',
  },
  {
    name: 'Shopkeeper2',
    rating: 5,
    image: shopKeeperImage.shopkeeper1,
    distance: '0.6km',
    type: 'Fruits',
    recentRating: '5',
    orderCount: '600+ orders in last hour',
    storeId: 'Store2',
  },
  {
    name: 'Shopkeeper3',
    rating: 5,
    image: shopKeeperImage.shopkeeper1,
    distance: '0.6km',
    type: 'Dairy',
    recentRating: '5',
    orderCount: '50+ orders in last hour',
    storeId: 'Store3',
  },
  {
    name: 'Shopkeeper3',
    rating: 5,
    image: shopKeeperImage.shopkeeper1,
    distance: '0.6km',
    type: 'Vegetables',
    recentRating: '5',
    orderCount: '50+ orders in last hour',
    storeId: 'Store4',
  },
];

function Item({item, index}) {
  const navigation = useNavigation();
  return (
    <View
      style={{elevation: 5, marginVertical: 8, marginHorizontal: wp(4)}}
      key={index}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('StoreDetails', {item})}>
        <View style={{flex: 1}}>
          <Image
            source={item.image}
            style={{resizeMode: 'cover', width: wp(22), height: wp(22)}}
          />
        </View>
        <View style={{flex: 2}}>
          <View style={styles.ratingStyle}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {item.rating}🔅
            </Text>
          </View>

          <Text style={{fontSize: 20, fontWeight: 'bold', padding: 3}}>
            {item.name}
          </Text>
          <Text style={{padding: 3}}>{item.type} Store</Text>
          <Text style={{padding: 3}}> Recent Rating {item.recentRating}🔅</Text>
          <Text style={{padding: 3}}>{item.distance} from you</Text>
        </View>
      </TouchableOpacity>
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
  );
}

export const renderStore = ({item, index}) => <Item item={item} key={index} />;

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
});
