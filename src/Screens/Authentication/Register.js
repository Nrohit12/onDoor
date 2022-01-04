import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {introBackground} from '../../Assets/Image';
import {userSignup} from '../../Store/User/actions';

const formItems = [
  {value: '', key: 'name'},
  {value: '', key: 'email'},
  {value: '', key: 'password'},
];

const Register = props => {
  const dispatch = useDispatch();

  const [form, setForm] = useState(formItems);

  const formFields = () => {
    return form.map((item, index) => {
      return (
        <TextInput
          style={styles.input}
          onChangeText={text => {
            const temp = form;
            temp[index].value = text;
            setForm(temp);
          }}
          placeholder={`Enter your ${item.key}`}
          placeholderTextColor="grey"
          key={index}
        />
      );
    });
  };

  const signUp = detail => {
    const user = {};
    detail.forEach(item => {
      user[item.key] = item.value;
    });
    // console.log(user);
    dispatch(userSignup(user));
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ImageBackground
        source={introBackground}
        style={{width: wp(100), height: hp(100), resizeMode: 'cover'}}>
        <View style={{backgroundColor: 'white'}}>
          <View style={styles.logIn}>
            <TouchableOpacity
              style={{width: '100%', backgroundColor: 'white'}}
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={{fontSize: 22, color: 'green', width: '100%'}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: wp(100),
              marginTop: hp(5),
              marginLeft: wp(10),
            }}>
            <Text style={{fontSize: hp(5), fontWeight: 'bold'}}>
              Create account
            </Text>
            <Text style={{fontSize: hp(2.2), paddingVertical: 5}}>
              Sign up and start shopping
            </Text>
          </View>
          <View
            style={{
              marginVertical: hp(3),
              alignItems: 'center',
            }}>
            {formFields()}
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity style={styles.button} onPress={() => signUp(form)}>
            <Text style={{fontSize: hp(2.4), color: 'white'}}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            style={{
              borderColor: 'green',
              borderWidth: 1,
              width: wp(70),
              padding: hp(1.2),
              justifyContent: 'center',
              alignItems: 'center',
            }}
            // onPress={() => props.navigation.navigate('Register')}
          >
            <Text style={{fontSize: hp(2.4), color: 'green'}}>
              Sign up with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>By signing up I agree to </Text>
          <TouchableOpacity

          // onPress={() => props.navigation.navigate('Register')}
          >
            <Text style={{color: 'green', marginVertical: hp(2)}}>
              Terms and conditions
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logIn: {
    position: 'absolute',
    right: 10,
    elevation: 10,
    top: 10,
    width: wp(20),
    alignItems: 'center',
  },
  input: {
    margin: 12,
    width: wp(80),
    borderBottomWidth: 2,
    padding: 10,
    color: '#000',
    fontSize: 18,
    borderBottomColor: 'green',
  },

  button: {
    width: wp(70),
    padding: hp(1.2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(1),
    borderWidth: 2,
    backgroundColor: 'green',
    marginVertical: hp(2.5),
  },
});

export default Register;
