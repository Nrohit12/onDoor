import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {verticalMenuIcon} from '../../../Assets/Image';
import {useNavigation} from '@react-navigation/native';
export const Addresses = [
  {
    name: 'User 1',
    phoneNum: '9545789855',
    pinCode: '200013',
    houseNum: 'D 123',
    sector: '5',
    landmark: '458 house villa',
    city: 'Chandigarh',
    state: 'Chandigarh',
  },
  {
    name: 'User 2',
    phoneNum: '9545789836',
    pinCode: '200015',
    houseNum: 'C 123',
    sector: '15',
    landmark: 'Mandir',
    city: 'Chandigarh',
    state: 'Chandigarh',
  },
];

function Item({item, index}) {
  const navigation = useNavigation();
  return (
    <View style={styles.item} key={index}>
      <View style={styles.iconStyle}>
        <IconButton
          icon={verticalMenuIcon}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>

      <View style={{marginRight: 60}}>
        <Text style={styles.name}>{item.name} </Text>
        <Text style={{padding: 3}}>
          {item.houseNum}, {item.sector}, {item.landmark}, {item.city},{' '}
          {item.state}
        </Text>
        <Text style={{padding: 3}}>{item.pinCode}</Text>
        <Text style={styles.price}>{item.phoneNum}</Text>
      </View>
    </View>
  );
}

export const renderAddress = props => (
  <Item item={props.item} key={props.index} />
);

const styles = StyleSheet.create({
  item: {
    padding: wp(3),
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    elevation: 5,
    marginVertical: 8,
  },
  iconStyle: {
    position: 'absolute',
    right: 5,
  },
  timeStyle: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  price: {padding: 3, fontWeight: 'bold', fontSize: 15},
  name: {fontSize: 16, fontWeight: 'bold', padding: 3},
});
