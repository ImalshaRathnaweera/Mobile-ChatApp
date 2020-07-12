import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import LodingScreen from '../screen/LodingScreen';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import Home from '../screen/Home';


const Stack = createStackNavigator();

const AuthNavigator =()=>(
    <Stack.Navigator> 
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
             option = {{headerShown:false}}
        />
        <Stack.Screen
            name ="Home"
            component={Home}
            options={{headerShown:false}}
        />
    </Stack.Navigator>

)

export default AuthNavigator;