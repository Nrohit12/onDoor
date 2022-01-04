import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import {FadeInView} from '../../../Navigators/Animation';
import {leftIcon, profileBackground} from '../../../Assets/Image';
import {IconButton} from 'react-native-paper';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Orders, renderOrders} from './renderOrders';

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
        <View style={{margin: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Recent Order</Text>
        </View>
        <View>
          <FlatList
            data={Orders}
            renderItem={renderOrders}
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
});
