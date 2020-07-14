import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import LodingScreen from '../screen/LodingScreen';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import Home from '../screen/Home';
import Session from '../screen/Session';


const Stack = createStackNavigator();

const AuthNavigator =()=>(
    <Stack.Navigator
          initialRouteName="Session">
        <Stack.Screen
            name="Session"
            component={Session}
            options={{ headerShown: false }}
        />
        
        
         <Stack.Screen
            name="Loding"
            component={LodingScreen}
            options={{ headerShown: false  }}
        /> 
         <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
        />
        <Stack.Screen
             name = "Register"
             component ={SignUp}
             options = {{headerShown:false}}
        />
        <Stack.Screen
            name ="Home"
            component={Home}
            options = {{headerShown:true}}
        />
    </Stack.Navigator>

)

export default AuthNavigator;