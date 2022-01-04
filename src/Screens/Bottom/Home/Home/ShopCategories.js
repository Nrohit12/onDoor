import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import {FadeInView} from '../../../../Navigators/Animation';
import {
  leftIcon,
  categoryImage,
  profileBackground,
} from '../../../../Assets/Image';
import {IconButton} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Stores, renderStore} from './renderStores';

const categoriesItems = [
  {image: categoryImage.kirana, name: 'Kirana'},
  {image: categoryImage.fruits, name: 'Fruits'},
  {image: categoryImage.dairy, name: 'Dairy'},
  {image: categoryImage.vegetables, name: 'Vegetables'},
];

export default function (props, {route}) {
  return (
    <FadeInView>
      <ScrollView nestedScrollEnabled={true}>
        <ImageBackground style={styles.header} source={profileBackground}>
          <IconButton
            icon={leftIcon}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </ImageBackground>

        <View>
          <Text style={{fontWeight: 'bold', fontSize: hp(2.4), margin: 10}}>
            {props.route.params.category} Stores near you
          </Text>
        </View>

        <View>
          <FlatList
            data={Stores}
            renderItem={renderStore}
            keyExtractor={item => item.id}
            nestedScrollEnabled={true}
          />
        </View>
      </ScrollView>
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
  search: {
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: '#D6D2C4',
    height: 45,
    justifyContent: 'center',
    padding: 5,
  },
  categoriesImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(10),
    flex: 2,
  },
});
