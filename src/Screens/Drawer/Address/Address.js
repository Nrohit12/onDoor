import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {FadeInView} from '../../../Navigators/Animation';
import {leftIcon, profileBackground, addIcon} from '../../../Assets/Image';
import {IconButton} from 'react-native-paper';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Addresses, renderAddress} from './renderAddresses';

export default function (props) {
  return (
    <FadeInView>
      <View>
        <ImageBackground style={styles.header} source={profileBackground}>
          <IconButton
            icon={leftIcon}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </ImageBackground>
        <TouchableOpacity style={styles.addNew}>
          <IconButton
            icon={addIcon}
            size={15}
            color={'green'}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
          <Text style={{color: 'green', fontWeight: 'bold'}}>
            Add New Address
          </Text>
        </TouchableOpacity>

        <View style={{margin: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>My Address</Text>
        </View>
        <View>
          <FlatList
            data={Addresses}
            renderItem={renderAddress}
            keyExtractor={item => item.id}
            nestedScrollEnabled={true}
          />
        </View>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    width: wp(100),
  },
  addNew: {
    marginVertical: 20,
    borderWidth: 2,
    marginHorizontal: 1,
    borderColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
