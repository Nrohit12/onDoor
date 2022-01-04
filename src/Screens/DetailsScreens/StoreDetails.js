import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {FadeInView} from '../../Navigators/Animation';
import {
  profileBackground,
  leftIcon,
  markFavoriteIcon,
} from '../../Assets/Image';
import {IconButton} from 'react-native-paper';
import {renderStore, STORE} from './renderStore';
import TabNavigator from './TabNavigator';

export default function (props) {

  const [favorite, setFavorite] = useState(false);

  
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
          <IconButton
            icon={markFavoriteIcon}
            color={favorite ? 'green' : 'black'}
            onPress={() => {
              setFavorite(!favorite);
            }}
            style={{position: 'absolute', right: 10}}
          />
        </ImageBackground>
        <View style={{marginTop: 20, marginHorizontal: 20}}>
          {renderStore(STORE)}
        </View>
        
        <View style={{marginTop:10}}>
          <TabNavigator />
        </View>
      </ScrollView>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  myListButton: {
    borderColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(5),
  },
  myListButtonText: {
    fontSize: 18,
    color: 'green',
    margin: 2,
  },
  orderFrom: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
