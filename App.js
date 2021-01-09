import React from 'react';
import {NavigationContainer, DefaultTheme, DarkTheme, useTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'
import {Provider, useSelector} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {reducer} from './src/reducers/reducer'

import Home from './src/screens/Home'
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Subscribe from './src/screens/Subscribe';
import Explore from './src/screens/Explore';
import { themeReducer } from './src/reducers/themeReducer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const rootReducer = combineReducers({
  searchResult : reducer,
  darkTheme : themeReducer
})
const store = createStore(rootReducer);

const customDarkTheme ={
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor : 'black',
    background : '#3b3e40',
    iconColor : 'white',
    tabIcon : 'white'
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor : 'white',
    iconColor : '#212121',
    tabIcon : 'red' 
  },
};

const rootHome = () =>{

  const {colors} = useTheme()

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
          activeTintColor: colors.tabIcon,
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

function App() {

  const darkTheme = useSelector(state => state.darkTheme)

  return (

    <NavigationContainer theme={darkTheme ? customDarkTheme : customDefaultTheme} >
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="root" component={rootHome} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="videoPlayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}