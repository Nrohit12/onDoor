import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {shopKeeperImage} from '../../Assets/Image';
import {useNavigation} from '@react-navigation/native';

export const STORE = {
  name: 'Shopkeeper1',
  rating: 5,
  image: shopKeeperImage.shopkeeper1,
  location: 'Sector 25',
  type: 'Grocery',
  recentOrder: '5',
  orderCount: '500+',
};

function Store({item}) {
  return (
    <View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Image source={item.image} style={styles.shopImage} />
        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={{marginHorizontal: 10}}>{item.location}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {item.rating}🔅
          </Text>
          <Text style={{fontSize: 15}}>Rating</Text>
        </View>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {item.orderCount}
          </Text>
          <Text style={{fontSize: 15}}>Orders</Text>
        </View>

        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.type}</Text>
          <Text style={{fontSize: 15}}>Store Type</Text>
        </View>
      </View>
    </View>
  );
}

export const renderStore = Data => <Store item={Data} />;

const styles = StyleSheet.create({
  shopImage: {
    resizeMode: 'cover',
    width: wp(25),
    height: wp(25),
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
});
