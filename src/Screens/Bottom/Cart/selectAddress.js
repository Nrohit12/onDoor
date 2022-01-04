import React, {useRef, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {FadeInView} from '../../../Navigators/Animation';
import {leftIcon, profileBackground} from '../../../Assets/Image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {IconButton} from 'react-native-paper';
import {ADDRESS, Addresses, renderAddress} from './renderAddress';

export default function (props) {
  return (
    <FadeInView>
      <ScrollView>
        <ImageBackground style={{width: wp(100)}} source={profileBackground}>
          <IconButton
            icon={leftIcon}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </ImageBackground>

        <View style={{marginVertical:10, marginHorizontal:15}}>
          <Text style={{fontSize:18, fontWeight:'600'}}>Select your address</Text>
        </View>
        <View>
          <FlatList
            data={Addresses}
            renderItem={renderAddress}
            keyExtractor={item => item.id}
            nestedScrollEnabled={true}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.checkOutButton}>
            <Text style={styles.checkOutText}>Select and Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  checkOutButton: {
    padding: 15,
    backgroundColor: 'green',
    width: wp(70),
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 5,
    borderRadius: 8,
    margin: 10,
  },
  checkOutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
