import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Detail, Favorite, Home, Profile, Search} from '../page';
import {fonts, primaryColor, secondaryColor, widthSize} from '../util';
import {TouchableOpacity, View} from 'react-native';
import {CurvePath} from '../assets';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SearchButton = props => {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        width: 75,
        height: 60,
        alignItems: 'center',
      }}>
      <CurvePath height={60} width={75} color="white" />
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: -25,
          width: 50,
          height: 50,
          borderRadius: 27,
          backgroundColor: primaryColor,
        }}
        onPress={() => props.onPress()}>
        <FontAwesome name="search" color="white" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const MyApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 60,
          backgroundColor: 'transparent',
          elevation: 0,
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarLabelStyle: {fontSize: 14, marginBottom: 10},
        tabBarActiveTintColor: primaryColor,
        tabBarLabelPosition: 'below-icon',
        tabBarIcon: ({focused, color, size}) => (
          <FontAwesome
            name={
              route.name === 'Home'
                ? 'home'
                : route.name === 'Profile'
                ? 'user-circle'
                : false
            }
            color={focused ? primaryColor : secondaryColor}
            size={25}
          />
        ),
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: 'white',
          tabBarInactiveBackgroundColor: 'white',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: 'white',
          tabBarInactiveBackgroundColor: 'white',
          tabBarButton: props => {
            return <SearchButton {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: 'white',
          tabBarInactiveBackgroundColor: 'white',
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyApp"
          component={MyApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
