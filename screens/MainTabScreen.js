import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen =() => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#005387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: '#534e5e',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#e8e005',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#82003b',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#005387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: { 
        fontWeight: 'normal',
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name ="ios-menu" size={25}
          backgroundColor="#005387" onPress={() => {navigation.openDrawer()}}
          ></Icon.Button>
        )
      }}/>
    </HomeStack.Navigator>
  );
  
  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions = {{
      headerStyle: {
        backgroundColor: '#534e5e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: { 
        fontWeight: 'normal',
      }
    }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button name ="ios-menu" size={25}
          backgroundColor="#534e5e" onPress={() => {navigation.openDrawer()}}
          ></Icon.Button>
        )  
      }}/>
    </DetailsStack.Navigator>
  );