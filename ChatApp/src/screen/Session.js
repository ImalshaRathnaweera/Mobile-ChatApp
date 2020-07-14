import React, { useEffect } from 'react'
import {View,Image,StyleSheet} from 'react-native';
import images from '../utils/images'
import { getAsyncStorage, keys } from '../asyncStorage';
import { setUniqueValue } from '../utils/constant';

const Session =({navigation})=>{
    useEffect(()=>{
        const redirect = setTimeout(()=>{
            getAsyncStorage(keys.uuid)
            .then((uuid)=>{
                if(uuid){
                    setUniqueValue(uuid);
                    navigation.replace('Home');

                }else{
                    navigation.replace('Loding');
                }
            })
            .catch((err)=>{
                console.log(err);
                navigation.replace('Loding')
            });
        },3000);
        return ()=> clearTimeout(redirect);
    }),[navigation]
    return (
        <View style={styles.container}>
         <Image 
        source={images.LOGO} 
        style={styles.backgroundImg}
        />
        </View>
    )
}

export default Session;
const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'stretch'
    },
    backgroundImg:{
        justifyContent: 'center',
        alignSelf: 'center',
        width: 200, 
        height: 200,
    }

});