import React from 'react';
import {
  View, 
  StyleSheet, 
  Text,
  Image, 
  TouchableOpacity
  } from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {doneIcon} from '../../../../Assets/Image';
export const Notifications = [
  {
    title: 'Your order has been successfully placed.',
    date: '27 July 2021',
    time: '4:25 pm',
    orderId: 'HUYT56648',
  },
  {
    title: 'Your order has been successfully placed.',
    date: '27 July 2021',
    time: '4:25 pm',
    orderId: 'HUYT56648',
  },
  {
    title: 'Your order has been successfully placed.',
    date: '27 July 2021',
    time: '4:25 pm',
    orderId: 'HUYT56648',
  },
  {
    title: 'Your order has been successfully placed.',
    date: '27 July 2021',
    time: '4:25 pm',
    orderId: 'HUYT56648',
  },
  {
    title: 'Your order has been successfully placed.',
    date: '27 July 2021',
    time: '4:25 pm',
    orderId: 'HUYT56648',
  },
  {
    title: 'Your order has been successfully placed.',
    date: '27 July 2021',
    time: '16:25 pm',
    orderId: 'HUYT56648',
  },
];

const Item = ({item, index}) => (
  <View style={{elevation: 5, marginVertical: 8}} key={index}>
    <TouchableOpacity style={styles.item}>
      <View style={{marginRight: 10}}>
        <Image
          source={doneIcon}
          style={{resizeMode: 'cover', width: wp(16), height: wp(16)}}
        />
      </View>
      <View style={{flex: 2}}>
        <View style={styles.time}>
          <Text style={{color: 'black'}}>{item.time}</Text>
        </View>
        <View style={{marginRight: 60}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', padding: 3}}>
            {item.title}
          </Text>
          <Text style={{padding: 3}}>{item.date}</Text>
          <Text style={{padding: 3}}> Order id: {item.orderId}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export const renderNotification = ({item, index}) => (
  <Item item={item} key={index} />
);

const styles = StyleSheet.create({
  item: {
    padding: wp(3),
    flexDirection: 'row',
    flex: 1,

    backgroundColor: 'white',
  },
  time: {
    position: 'absolute',
    right: 5,
  },
});
