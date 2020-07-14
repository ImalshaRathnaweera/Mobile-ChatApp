import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import Profile from '../screen/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
    // <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name= "Profile" component={Profile}/>
        </Drawer.Navigator>
    // </NavigationContainer>
    );
}

export default DrawerNavigator;
