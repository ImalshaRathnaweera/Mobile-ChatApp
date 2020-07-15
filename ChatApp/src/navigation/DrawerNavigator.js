import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import Profile from '../component/Profile';
import Home from '../screen/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
    // <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name= "Home" component={Home}/>
        </Drawer.Navigator>
    // </NavigationContainer>
    );
}

export default DrawerNavigator;
