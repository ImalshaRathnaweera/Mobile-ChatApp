import React from 'react';
import Profile from '../screen/Profile';
import Call  from '../screen/Call';
import Chats from '../screen/Chat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
    return(
        <Tab.Navigator
        initialRouteName="Home">
            <Tab.Screen name="Chats" component={Chats}/>
            <Tab.Screen name ="Call" component ={Call}/>
            <Tab.Screen name ="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;