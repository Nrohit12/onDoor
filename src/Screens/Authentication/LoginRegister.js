import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
  Text,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const carouselItems = [
  {
    title: 'Local Stores',
    body: 'Find local stores near you.',
    image: require('../../Assets/Images/store.png'),
  },
  {
    title: 'Add items',
    body: 'Add items to cart and order directly from store.',
    image: require('../../Assets/Images/groceries.png'),
  },
  {
    title: 'Fast Delivery',
    body: 'Get superfast delivery wherever you want.',
    image: require('../../Assets/Images/delivery.png'),
  },
];

const LoginRegister = props => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  const [active, setActive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );

    if (slide !== active) {
      setActive(slide);
    }
    // console.log(active);
  };

  useEffect(() => {
    const interval = setInterval(() => {}, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{alignItems: 'center', backgroundColor: 'white', flex: 1}}>
      <View style={styles.logIn}>
        <TouchableOpacity
          style={{width: '100%'}}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={{fontSize: 22, color: 'green', width: '100%'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showHorizontalScrollIndicator={false}
        style={{position: 'absolute', top: 60}}>
        {carouselItems.map((item, index) => (
          <View style={{width, alignItems: 'center'}} key={index}>
            <Image
              source={item.image}
              style={{height: hp(50), resizeMode: 'cover', width: '90%'}}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: height * 0.18,
        }}>
        {carouselItems.map((i, k) => (
          <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
            •
          </Text>
        ))}
      </View>
      <View
        style={{
          marginVertical: hp(2),
          alignItems: 'center',
          position: 'absolute',
          bottom: height * 0.05,
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Register')}>
          <Text style={{fontSize: hp(3), color: 'white'}}>
            Create New Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logIn: {
    position: 'absolute',
    right: 10,
    elevation: 10,
    top: 20,
    width: wp(20),
    alignItems: 'center',
  },
  title: {
    fontSize: hp(5),
    color: 'green',
  },
  body: {
    fontSize: hp(2.4),
    padding: hp(1),
  },

  dot: {
    color: 'grey',
    fontSize: 50,
  },

  activeDot: {
    color: 'green',
    fontSize: 50,
  },
  button: {
    width: wp(70),
    padding: hp(1.2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(1),
    borderWidth: 2,
    backgroundColor: 'green',
  },
});

export default LoginRegister;
