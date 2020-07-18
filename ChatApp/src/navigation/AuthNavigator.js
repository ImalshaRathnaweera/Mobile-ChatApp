import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import LodingScreen from '../screen/LodingScreen';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import Home from '../screen/Home';
import Session from '../screen/Session';
import UserChat from '../screen/UserChat'

const Stack = createStackNavigator();

const AuthNavigator =({navigation})=>(
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#282f43',
            height:75,
            borderWidth: 0.5,
            borderColor:'grey'
        },
        headerTintColor:'white',
        headerTitleStyle:{
            color:'white',
            fontSize:25,
             
        }
    }}
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
            options = {{title:"ChatApp",headerShown:true,headerTitleAlign:'center'   
        }} />
        <Stack.Screen
             name = "UserChat"
             component ={UserChat}
             options = {{headerShown:false}}
        />

    </Stack.Navigator>

)

export default AuthNavigator;