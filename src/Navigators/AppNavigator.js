import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Cart, SelectAddress} from '../Screens/Bottom/Cart';
import {Favorites} from '../Screens/Bottom/Favorites';
import {Home, Notifications, SpecificCategories, OrderItems} from '../Screens/Bottom/Home';
import {Menu} from '../Screens/Bottom/Menu';
import Tabs from './BottomTabs';
import {Profile, Order, Support, About, Address} from '../Screens/Drawer';
import {CategoryItems, StoreDetails} from '../Screens/DetailsScreens';
import { DailyList, MonthlyList, WeeklyList } from '../Screens/Lists';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="DailyList" component={DailyList} />
      <Stack.Screen name="WeeklyList" component={WeeklyList} />
      <Stack.Screen name="MonthlyList" component={MonthlyList} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="SelectAddress" component={SelectAddress} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="OrderHistory" component={Order} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="SpecificCategories" component={SpecificCategories} />
      <Stack.Screen name="OrderItems" component={OrderItems} />
      <Stack.Screen name="StoreDetails" component={StoreDetails} />
      <Stack.Screen name="CategoryItems" component={CategoryItems} />

    </Stack.Navigator>
  );
};

export default AppNavigator;
