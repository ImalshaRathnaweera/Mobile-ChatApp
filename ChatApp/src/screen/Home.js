import React, { useLayoutEffect } from 'react';
import {Alert} from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { LogOut } from '../connection';
import { clearAsyncStorage } from '../asyncStorage';
import TabNavigator from '../navigation/TabNavigator';


const Home = ({navigation}) =>{
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>(
                <SimpleLineIcon
                 name ="logout"
                  size={40} 
                 color='black'
                style={{ right: 10 }}
                  onPress={()=>Alert.alert('Logout','Are you sure to logout',[
                     {
                         text:'Yes',
                         onPress:()=> logout(),
                     }, 
                     {
                         text:'No',
                        
                     },
                  ],
                  {
                      cancelable:false,
                  },
                  )
                }/>
            ),
        });
    },[navigation]);

    const logout = ()=>{
        LogOut()
        .then(()=>{
            clearAsyncStorage()
            .then(()=>{
                navigation.replace('Loding');
            })
            .catch((err)=>alert(err))
        })
        .catch((err)=>alert(err))
    }
    return(
        
        <TabNavigator/>
       
    );
}
export default Home;