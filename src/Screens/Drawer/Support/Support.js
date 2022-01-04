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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Orders, renderOrders} from '../Order/renderOrders';
import {HelpItems, renderHelpItems} from './helpItems';

export default function (props) {
  return (
    <FadeInView>
      <ScrollView>
        <ImageBackground style={styles.header} source={profileBackground}>
          <IconButton
            icon={leftIcon}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
          <View style={{margin: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Get 24X7 Support
            </Text>
          </View>
        </ImageBackground>

        <View style={{marginTop: 20}}>
          <Text style={styles.headings}>Recent Orders</Text>
          <View style={{alignItems: 'center'}}>
            <FlatList
              data={Orders}
              renderItem={renderOrders}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={styles.headings}>What can we help you with?</Text>
          <View style={{alignItems: 'center'}}>
            <FlatList
              data={HelpItems}
              renderItem={renderHelpItems}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          </View>
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
  headings: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
});
