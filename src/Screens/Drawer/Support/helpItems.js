import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {supportItems} from '../../../Assets/Image';
import {useNavigation} from '@react-navigation/native';

export const HelpItems = [
  {
    title: 'Payments',
    icon: supportItems.paymentIcon,
    description: 'Recent payments',
    id: 1,
  },
  {
    title: 'Profile',
    icon: supportItems.profileIcon,
    description: 'Change Email, Contact Number',
    id: 2,
  },
  {
    title: 'Delivered Products',
    icon: supportItems.deliveredProductIcon,
    description: 'Problem with items delivered.',
    id: 3,
  },
];

function Item({item, index}) {
  const navigation = useNavigation();
  return (
    <View style={styles.item} key={index}>
      <TouchableOpacity style={{marginVertical: 12, width: wp(25)}}>
        <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
      </TouchableOpacity>
      <View style={styles.iconStyle}>
        <IconButton
          icon={item.icon}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <TouchableOpacity style={{marginTop: 10}}>
        <Text>{item.description}</Text>
      </TouchableOpacity>
    </View>
  );
}

export const renderHelpItems = props => (
  <Item item={props.item} key={props.index} />
);

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: wp(5),
    backgroundColor: 'white',
    elevation: 5,
    margin: wp(2),
    width: wp(40),
    height: 140,
  },

  iconStyle: {
    position: 'absolute',
    right: 8,
  },
});
