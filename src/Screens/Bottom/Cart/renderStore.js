import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {shopKeeperImage} from '../../../Assets/Image';
export const STORE = {
  name: 'Shopkeeper1',
  rating: 5,
  image: shopKeeperImage.shopkeeper1,
  distance: '0.6km',
  type: 'Grocery Store',
  recentOrder: '5',
  orderCount: '500+ orders in last hour',
};

const Store = ({item}) => (
  <View style={{elevation: 5, marginVertical: 8, marginHorizontal: wp(4)}}>
    <View style={styles.item}>
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{resizeMode: 'cover', width: '80%', height: '90%'}}
        />
      </View>
      <TouchableOpacity style={{flex: 2, marginLeft: 20}}>
        <View style={styles.ratingStyle}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {item.rating}🔅
          </Text>
        </View>
        <Text style={{fontSize: 20, fontWeight: 'bold', padding: 3}}>
          {item.name}
        </Text>
        <Text style={{padding: 3}}>{item.type}</Text>
        <Text style={{padding: 3}}> Recent Rating {item.recentOrder}🔅</Text>
        <Text style={{padding: 3}}>{item.distance} from you</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export const renderStore = Data => <Store item={Data} />;

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
});
