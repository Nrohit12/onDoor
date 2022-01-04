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
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>About us</Text>
          </View>
        </ImageBackground>
        <View>
          <Text>Our Services</Text>
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
