import React from "react"
import { 
    ImageBackground, 
    Text, 
    View, 
    StyleSheet
} from "react-native"
import { bannerImage} from '../../../Assets/Image';
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp 
} from "react-native-responsive-screen"
import {name as appName} from '../../../../app.json';

export const renderBannerImage = () => {
    
    return <ImageBackground source={bannerImage} style={styles.bannerImage}>
          <View
            style={{
              width: wp(50),
              padding: wp(5),
            }}>
            <Text style={{color: 'black', fontSize: 22}}>
              {appName} Grocery Lists
            </Text>
            <Text style={{color: 'black', fontSize: 15, marginVertical: hp(7)}}>
              Customize your lists to get extra 5% off.
            </Text>
          </View>
          <Text style={styles.bannerConditionText}>
            *Valid on purachase of ₹199 or above.
          </Text>
        </ImageBackground>
}

const styles = StyleSheet.create({
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

  });
  