import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import {Cart} from '../Screens/Bottom/Cart';
import {Favorites} from '../Screens/Bottom/Favorites';
import {Home} from '../Screens/Bottom/Home';
import {Menu} from '../Screens/Bottom/Menu';
import {IconButton} from 'react-native-paper';

import {homeIcon, favoritesIcon, cartIcon, menuIcon} from '../Assets/Image';

const Tab = createBottomTabNavigator();

const tabDetails = [
  {
    name: 'Home',
    component: Home,
    label: 'Home',
    icon: homeIcon,
  },
  {
    name: 'Favorites',
    component: Favorites,
    label: 'Favorites',
    icon: favoritesIcon,
  },
  {
    name: 'Cart',
    component: Cart,
    label: 'Cart',
    icon: cartIcon,
  },
  {
    name: 'Menu',
    component: Menu,
    label: 'Menu',
    icon: menuIcon,
  },
];

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}
      shifting="false">
      {tabDetails.map((item, index) => {
        return (
          <Tab.Screen
            name={item.name}
            component={item.component}
            key={index}
            options={{
              tabBarLabel: item.label,
              tabBarIcon: ({color, size}) => (
                <IconButton color={color} icon={item.icon} size={size} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Tabs;
