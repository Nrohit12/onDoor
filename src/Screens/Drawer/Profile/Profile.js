import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {FadeInView} from '../../../Navigators/Animation';
import {
  userIcon,
  leftIcon,
  profileBackground,
  submitButton,
} from '../../../Assets/Image';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {IconButton} from 'react-native-paper';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const navigations = [
  {label: 'Name', value: 'name', isDisabled: true},
  {label: 'Phone Number', value: 'phoneNum', isDisabled: false},
  {label: 'Email Id', value: 'emailId', isDisabled: false},
  {label: 'Location', value: 'Chandigarh', isDisabled: true},
];

export default function (props) {
  const navigationsItems = () => {
    return navigations.map((item, index) => {
      return (
        <View
          key={index}
          style={{
            justifyContent: 'center',
            width: wp(80),
          }}>
          <Text style={styles.label}>{item.label}</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              const temp = form;
              temp[index].value = text;
              setForm(temp);
            }}
            value={item.value}
            key={index}
            editable={item.isDisabled}
          />
        </View>
      );
    });
  };

  return (
    <FadeInView>
      <View style={{backgroundColor: 'white'}}>
        <ImageBackground
          source={profileBackground}
          style={{width: wp(100), height: hp(25), marginBottom: 30}}>
          <View style={styles.header}>
            <IconButton
              icon={leftIcon}
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={userIcon} style={styles.image} />
          </View>
        </ImageBackground>
        <View>
          <Text style={styles.profileDetails}>Profile Details</Text>
        </View>
        <View style={{marginHorizontal: wp(10)}}>{navigationsItems()}</View>
        <ImageBackground
          source={submitButton}
          style={{
            width: wp(40),
            padding: 12,
            marginVertical: hp(10),
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
              Submit
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: wp(100),
  },
  image: {
    width: 90,
    height: 90,
    backgroundColor: 'yellow',
    borderRadius: 45,
  },

  input: {
    borderBottomWidth: 1,
    color: '#555',
    fontSize: 18,
    padding: 5,
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 15,
    padding: 4,
  },
  profileDetails: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
