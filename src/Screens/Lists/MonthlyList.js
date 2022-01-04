import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {FadeInView} from '../../Navigators/Animation';
import {
  profileBackground,
  leftIcon,
} from '../../Assets/Image';
import {IconButton} from 'react-native-paper';
import {DATA, renderItems} from './renderItems'

export default function (props) {
  
  return (
    <FadeInView>
      <ScrollView style={{backgroundColor: 'white'}}>
        <ImageBackground style={{width: wp(100)}} source={profileBackground}>
          <IconButton
            icon={leftIcon}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
        </ImageBackground>
        <View style={{marginHorizontal:25,marginVertical:10}}>
            <Text style={styles.heading}>Your Monthly List Items</Text>
        </View>
        <View>
        <FlatList
            data={DATA}
            renderItem={renderItems}
            keyExtractor={item => item.id}
            nestedScrollEnabled={true}
          />
        </View> 
      </ScrollView>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: '800',
        marginBottom: 15,
      },
});
