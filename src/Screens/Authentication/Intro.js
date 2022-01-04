import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {introBackground, rightIcon} from '../../Assets/Image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FadeInView} from '../../Navigators/Animation';

const Intro = props => {
  return (
    <FadeInView>
      <ScrollView>
        <ImageBackground
          source={introBackground}
          style={styles.backgroundImage}>
          <View style={[styles.view, {top: hp(6)}]}>
            <Text
              style={{fontSize: hp(3), paddingVertical: 8, color: 'yellow'}}>
              Welcome,
            </Text>
            <Text
              style={{
                fontSize: hp(2.2),
                paddingHorizontal: 10,
                color: 'white',
              }}>
              One of its kind grocery shopping experience.
            </Text>
          </View>
          <View style={[styles.view, {bottom: hp(8), alignItems: 'center'}]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate('LoginRegister');
              }}>
              <Text style={{fontSize: hp(2.5), color: 'white'}}>
                Get Started
              </Text>
              <Image source={rightIcon} style={{marginLeft: 5}} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: wp(100),
    height: hp(100),
    backgroundColor: '#D3D3D3',
  },
  view: {
    padding: 20,
    position: 'absolute',
    width: '100%',
  },
  button: {
    width: wp(60),
    padding: wp(1),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'pink',
    borderRadius: wp(1),
    borderWidth: 2,
    backgroundColor: 'red',
    flexDirection: 'row',
    flex: 1,
  },
});

export default Intro;
