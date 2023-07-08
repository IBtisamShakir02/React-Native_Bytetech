import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListScreen from '../ListScreen';
import Icon from 'react-native-vector-icons/Entypo';
import Licon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HomeScreen from '../HomeScreen';

// create a component

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#1A72DD',
        tabBarStyle: {
          borderTopLeftRadius: wp('3%'),
          borderTopRightRadius: wp('3%'),
          height: hp('6%'),
          backgroundColor: 'white',
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Licon name="list" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
