import React, {useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {FadeInView} from '../../../Navigators/Animation';
import {profileRightIcon, userIcon} from '../../../Assets/Image';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {IconButton} from 'react-native-paper';

const navigations = [
  {label: 'Profile', navigateTo: 'Profile'},
  {label: 'Order History', navigateTo: 'OrderHistory'},
  {label: 'Address', navigateTo: 'Address'},
  {label: 'Support', navigateTo: 'Support'},
  // {label: 'About Us', navigateTo: 'About'},
];

export default function (props) {
  const navigationsItems = () => {
    return navigations.map((item, index) => {
      return (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 15,
            elevation: 10,
            margin: 1,
          }}>
          <TouchableOpacity
            style={{padding: 2}}
            onPress={() => {
              props.navigation.navigate(item.navigateTo);
            }}>
            <Text style={{fontSize: 18}}>{item.label}</Text>
          </TouchableOpacity>
          <IconButton
            color="black"
            icon={profileRightIcon}
            style={{position: 'absolute', right: 10, padding: 2}}
          />
        </View>
      );
    });
  };

  return (
    <FadeInView>
      <ScrollView style={{backgroundColor: 'white', height: hp(100)}}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={userIcon} style={{width: 90, height: 90}} />
          </View>
          <View style={styles.headerRight}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>User Name</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              user@gmail.com
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            marginVertical: 12,
          }}>
          {navigationsItems()}
        </View>
      </ScrollView>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flex: 1,
    padding: hp(5),
    backgroundColor: 'white',
    elevation: 5,
  },
  headerLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  headerRight: {
    flex: 2,
    justifyContent: 'center',
    padding: 20,
  },
});
