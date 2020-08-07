import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import LodingScreen from '../screen/LodingScreen';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import Home from '../screen/Home';
import Session from '../screen/Session';
import UserChat from '../screen/UserChat';
import Setting from '../screen/Setting';
import UpdateProfile  from '../screen/UpdateProfile';
import ForgotPassword from '../screen/ForgotPassword';
import ChangePassword from '../screen/ChangePassword';

const Stack = createStackNavigator();

const AuthNavigator =({navigation})=>(
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#282f43',
            height:60,
            //borderWidth: 0.5,
            //borderColor:'grey'
        },
        
        headerTintColor:'#9da8a3',
        headerTitleStyle:{
            color:'#9da8a3',
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
             name="ForgotPassword"
             component={ForgotPassword}
             options ={{headerShown:false}}
        
        />
        <Stack.Screen
            name ="Home"
            component={Home}
            options = {{title:"TalkMore",headerShown:true,headerTitleAlign:'center'
        }} />
        <Stack.Screen
             name = "UserChat"
             component ={UserChat}
             options = {{headerShown:true}}
        />
        <Stack.Screen
             name = "setting"
             component ={Setting}
             options = {{headerShown:true}}
        />
        <Stack.Screen
             name = "updateProfile"
             component ={UpdateProfile}
             options = {{headerShown:true ,title:"Update Profile"}}
        />
        <Stack.Screen
             name = "changePassword"
             component ={ChangePassword}
             options = {{headerShown:true ,title:"Change Password"}}
        />



    </Stack.Navigator>

)

export default AuthNavigator;