import React from 'react';
import {Image,StyleSheet} from 'react-native';
import UserProfile from '../screen/UserProfile';
import Call  from '../screen/Call';
import Chats from '../screen/Chat';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import images from '../utils/images';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
    return(
        <Tab.Navigator
        
        initialRouteName="Home"
        tabBarOptions={{
          style:{height:60,backgroundColor:'#282f43'},
          tabStyle:{
              backgroundColor:'#282f43',
              borderColor:'#282f43',
              height:60,
            
          },
            activeTintColor: '#8d3fd2',
            labelStyle: {
                fontSize: 14,
                margin: 0,
                padding: 0,
              },
          }}>
            <Tab.Screen name="Chats" component={Chats}
            options={{
                tabBarLabel: 'Chats',
                tabBarIcon: ({}) => (
                  <Image 
                  source={images.CHAT_LOGO} 
                  style={styles.Logo}/>
                  //<MaterialCommunityIcons name="account" color="#8d3fd2"  size={40} />
                ),
              }}/>
            <Tab.Screen name ="Call" component ={Call}
            options={{
                tabBarLabel: 'Calls',
                tabBarIcon: ({}) => (
                  <Image 
                  source={images.CALL_LOGO} 
                  style={styles.Logo}/>
                  // <MaterialCommunityIcons name="account" color="#8d3fd2" size={40} />
                ),
              }}/>
            <Tab.Screen name ="UserProfile" component={UserProfile}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <Image 
                  source={images.PROFILE_LOGO} 
                  style={styles.Logo}/>
                  // <MaterialCommunityIcons name="account" color="#8d3fd2" size={40}/>
                ),
              }}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;


const styles = StyleSheet.create({
  Logo:{
    height:30,
    width:30,
  }
});