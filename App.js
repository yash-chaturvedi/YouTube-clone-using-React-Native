import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'

import Home from './src/screens/Home'
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Subscribe from './src/screens/Subscribe';
import Explore from './src/screens/Explore';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const rootHome = () =>{
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = 'home'
            } else if (route.name === 'explore') {
              iconName = 'explore'
            }
            else if (route.name === 'subscribe') {
              iconName = 'subscriptions'
            }

            return <MaterialIcons name={iconName} color={color} size={28} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
          labelStyle : {textTransform : 'capitalize'},
          style: {
            paddingBottom : 5
          }
        }}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="explore" component={Explore} />
        <Tab.Screen name="subscribe" component={Subscribe} />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="root" component={rootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

