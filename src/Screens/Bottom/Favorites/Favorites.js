import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FadeInView} from '../../../Navigators/Animation';
import {searchIcon} from '../../../Assets/Image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {IconButton} from 'react-native-paper';
import {name as appName} from '../../../../app.json';
import {FlatList} from 'react-native-gesture-handler';
import {DATA, renderItem} from './renderStores';
import { renderBannerImage } from './renderBannerImage';

const listButtons = [
  {label: 'Daily', navigateTo: 'DailyList'},
  {label: 'Weekly', navigateTo: 'WeeklyList'},
  {label: 'Monthly', navigateTo: 'MonthlyList'},
];

export default function (props) {

  const renderListButtons = Data => {
    return Data.map((item, index) => {
      return (
        <TouchableOpacity style={styles.myListButton} key={index} onPress={() => {
          props.navigation.navigate(item.navigateTo)
        }}>
          <Text style={styles.myListButtonText}>{item.label}</Text>
        </TouchableOpacity>
      );
    });
  };
  return (
    <FadeInView>
      <ScrollView>
        <View style={styles.header}>
          <Text style={{fontWeight: 'bold', fontSize: hp(3)}}>{appName}</Text>
          <IconButton
            color="red"
            icon={searchIcon}
            style={{position: 'absolute', right: 10}}
          />
        </View>
        {renderBannerImage()}
        <View style={{marginLeft: 20, marginTop: 20}}>
          <View style={{marginBottom: hp(2)}}>
            <Text style={{color: 'green', fontSize: 25, fontWeight: 'bold'}}>
              My Lists
            </Text>
          </View>
          <View style={{alignSelf: 'center', flexDirection: 'row'}}>
            {renderListButtons(listButtons)}
          </View>
        </View>
        <View style={{marginLeft: 20, marginTop: 20}}>
          <View style={{marginTop: 20}}>
            <Text style={{color: 'green', fontSize: 25, fontWeight: 'bold'}}>
              Favorite Stores
            </Text>
            <View>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                nestedScrollEnabled={true}
                horizontal={true}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    padding: hp(1),
    marginLeft: wp(2),
  },

  bannerImage: {
    width: wp(99),
    height: hp(30),
    marginVertical: hp(2),
    alignSelf: 'center',
    elevation: 1,
    borderColor: 'green',
    justifyContent: 'center',
  },
  bannerConditionText: {
    position: 'absolute',
    color: 'black',
    bottom: 5,
    right: 2,
    fontSize: 12,
  },
  myListButton: {
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(5),
  },
  myListButtonText: {fontSize: 18, color: 'green'},
});
