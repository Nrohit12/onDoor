import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {FadeInView} from '../../../../Navigators/Animation';
import {
  notificationIcon,
  searchIcon,
  shopCategoryImage,
} from '../../../../Assets/Image';
import {IconButton} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Stores, renderStore} from './renderStores';

const categoriesItems = [
  {image: shopCategoryImage.kirana, name: 'Kirana'},
  {image: shopCategoryImage.fruits, name: 'Fruits'},
  {image: shopCategoryImage.dairy, name: 'Dairy'},
  {image: shopCategoryImage.vegetables, name: 'Vegetables'},
];

export default function (props) {
  const categoriesScroll = () => {
    return categoriesItems.map((item, index) => {
      return (
        <View key={index}>
          <TouchableOpacity
            style={{margin: 15, alignItems: 'center'}}
            onPress={() => {
              props.navigation.navigate('SpecificCategories', {
                category: item.name,
              });
            }}>
            <Image source={item.image} style={styles.categoriesImage} />
            <Text style={{fontSize: 16, flex: 1, padding: 5}}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      );
    });
  };
  return (
    <FadeInView>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.header}>
          <Text style={{fontWeight: 'bold', fontSize: hp(3.4), marginTop: 10}}>
            Explore
          </Text>
          <IconButton
            color="red"
            icon={notificationIcon}
            style={{position: 'absolute', right: 10}}
            onPress={() => {
              props.navigation.navigate('Notifications');
            }}
          />
        </View>
        <View style={{width: wp(100)}}>
          <TouchableOpacity 
          style={styles.search} 
          onPress={() => props.navigation.navigate('OrderItems')}
          >
            <Text style={{fontSize: 16}}>Enter store or item name...</Text>
            <Image
              source={searchIcon}
              style={{position: 'absolute', right: 10}}
            />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoriesScroll()}
        </ScrollView>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: hp(2.4), margin: 10}}>
            Nearby Shops
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
    flex: 1,
    flexDirection: 'row',
    height: hp(10),
    padding: hp(1),
    marginLeft: wp(2),
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
