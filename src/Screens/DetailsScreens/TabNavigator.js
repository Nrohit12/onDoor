import * as React from 'react';
import {SafeAreaView, FlatList, View,Text, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import OrderScreen from './feedScreen';
import { CATEGORIES, renderCategories } from './renderCategories';


function CategoriesScreen(props) {

  const numColumns = 2

  return (
      <View style={{backgroundColor: 'white'}}>
        
        <View style={{justifyContent:'center',marginVertical:10}}>
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
            nestedScrollEnabled={true}
            numColumns={numColumns}
          />
        </View>
         
      </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#1E5128',
        tabBarLabelStyle: {fontSize: 15, fontWeight:'500'},
      }}>
      <Tab.Screen
        name="Feed"
        component={OrderScreen}  
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
      />
      
    </Tab.Navigator>
  );
}

export default function TabNavigator(props) {
  return (
    <SafeAreaView style={{width:wp(100), height:hp(100)}}>
      <NavigationContainer independent={true}>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}
