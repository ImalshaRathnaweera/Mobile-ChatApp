import React, { useState, useContext } from 'react';
import {View,Text,StyleSheet, TouchableOpacity,TextInput, Image} from 'react-native';
import images from '../utils/images'
import { Store } from '../context/store/store';
import { LOADING_START, LOADING_STOP } from '../context/action/type';
// import {  } from 'react-native-gesture-handler';


const Login = ({navigation}) =>{
    const globalState = useContext(Store);
    const { dispatchLoaderAction } = globalState;
    const[credentials,setCredentials] = useState({
        email :'',
        password:'',

    });
    const{email,password} = credentials;
//  password and email required msg 
    onLoginPress=() => {
        if(!email){
             alert('Email is required');
        }else if(!password){
            alert('Password is required')

        }else{
            // alert(JSON.stringify(credentials)); 
            dispatchLoaderAction({
                type:LOADING_START,

            });
            setTimeout(()=>{
                dispatchLoaderAction({
                    type:LOADING_STOP,
    
                });
            },2000)
        }
       
    };

    const handleOnChange = (name,value)=>{
        setCredentials({
            ...credentials,
            [name]:value,
        })
    }
    return(
        <View style={styles.container}>
        <Image 
        source={images.LOGING_BACKGROUND} 
        style={styles.topImage}
        />
            
        
            <Text style={styles.login}>Login</Text>
          <View> 
            <TextInput style={styles.input}
            name="email"
            placeholder="Enter Email Or User name"
            value={email}
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText ={(text)=>handleOnChange('email',text)}
            />

            <TextInput style ={styles.input}
            name ="password"
            placeholder="Enter Password"
            value={password}
            returnKeyType="go"
            secureTextEntry
            autoCorrect={false}
            onChangeText ={(text)=>handleOnChange('password',text)}
            />

            <TouchableOpacity style ={styles.buttonContainer} onPress={()=>onLoginPress()}>
                <Text style ={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.createButtonContainer} onPress={()=>navigation.navigate('Register')}>
                <Text style ={styles.createbuttonText}>Create Account </Text>
            </TouchableOpacity>
            </View> 
            
        </View>
    );
}

export default Login;
const styles = StyleSheet.create({
    container:{
        padding: 20,
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'stretch'
        
    },
    topImage:{
        width: 300, height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        // marginBottom:100,
        
    },
    login:{
        fontSize: 40,
        marginBottom:40,
        justifyContent: 'center',
        alignSelf: 'center',
        
    },
    input:{
        paddingLeft:20,
        borderRadius:50,
        height: 50,
        fontSize:18,
        backgroundColor:'white',
        borderColor:'#800080',
        borderWidth:1,
        marginBottom:10,
        color:'#34495e',
        

    },
    buttonContainer:{
        height :30,
        borderRadius:50,
        backgroundColor:'#800080',
        paddingVertical:25,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:50,
        marginRight:50,
        marginTop:40,
        
    },
    buttonText:{
         textAlign:'center',
         fontSize:25,
         color:'white'

    },
    createButtonContainer:{
         height:30,
         borderRadius:50,
         backgroundColor:'white',
         paddingVertical:25,
         borderColor:'#800080',
         borderWidth:1,
         marginTop:20,
         justifyContent:'center',
         alignItems:'center',
         marginLeft:50,
         marginRight:50,
    },
    createbuttonText:{
        textAlign:'center',
        fontSize:20,
        color:'#800080',
    }

});



