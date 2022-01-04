import React from 'react';
import {
  ImageBackground,
  ScrollView,

  StyleSheet,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {FadeInView} from '../../Navigators/Animation';
import {
  profileBackground,
  leftIcon,

} from '../../Assets/Image';
import {IconButton} from 'react-native-paper';


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
      </ScrollView>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  
});
