import React,{useState, useContext} from 'react';
import {View,Text,StyleSheet, TouchableOpacity,TextInput, Image} from 'react-native';
import images from '../utils/images';
import { Store } from '../context/store/store';
import { LOADING_START, LOADING_STOP } from '../context/action/type';
import {setAsyncStorage,keys} from '../asyncStorage';
import {setUniqueValue} from '../utils/constant';
import {SignUpRequest,AddUser} from '../connection';
import firebase from '../firebase/config';
//import auth from '@react-native-firebase/auth';


const SignUp = ({navigation}) =>{
    const globalState = useContext(Store);
    const { dispatchLoaderAction } = globalState;
    const[credentials,setCredentials] = useState({
        name: '',
        email :'',
        password:'',
        confirmPassword:'',

    });
    const{name,email,password,confirmPassword} = credentials;
//  name, password and email required msg 
    onSignUpPress=() => {
        if(!name){
             alert('Name is required');
        }else if(!email){
            alert('Email is required')

        }else if(!password){
            alert('Password is required')
            
        }else if(password !==confirmPassword){
            alert('password did not match')

        }else{
           // alert(JSON.stringify(credentials));
           dispatchLoaderAction({
            type:LOADING_START,

        });
        // SignUpRequest(email,password)
        // .then(()=>{
        //     console.log(firebase.auth().currentUser);
       
        firebase.auth().createUserWithEmailAndPassword(email,password).then(function(result){
            let uid = result.user.uid;
            let profileImg = '';
            AddUser(name,email,uid,profileImg)
            .then(()=>{
                setAsyncStorage(keys.uuid,uid);
                setUniqueValue(uid);
                dispatchLoaderAction({
                    type:LOADING_STOP,
                });
                navigation.replace('Home');
            })
            .catch((err)=>{
                dispatchLoaderAction({
                    type:LOADING_STOP,
                });
                alert(err);
            });
        
        })
        .catch((err)=>{
            dispatchLoaderAction({
                type:LOADING_STOP,
            });
            alert(err);
        });
        // setTimeout(()=>{
        //     dispatchLoaderAction({
        //         type:LOADING_STOP,

        //     });
        // },1000)
       
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
            
        
            <Text style={styles.account}>Create Account</Text>
          <View> 
            <TextInput style={styles.input}
            // name="name"
            placeholder=" Enter User name"
            value={name}
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText ={(text)=>handleOnChange('name',text)}

            />
             <TextInput style={styles.input}
            //name="email"
            placeholder="Enter Email"
            value={email}
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText ={(text)=>handleOnChange('email',text)}

            />

            <TextInput style ={styles.input}
           // name ="password"
            placeholder="Enter Password"
            value={password}
            returnKeyType="next"
            secureTextEntry
            autoCorrect={false}
            onChangeText ={(text)=>handleOnChange('password',text)}

           
            />
             <TextInput style ={styles.input}
            // name ="password"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            returnKeyType="go"
            secureTextEntry
            autoCorrect={false}
            onChangeText ={(text)=>handleOnChange('confirmPassword',text)}

           
            />


            <TouchableOpacity style ={styles.buttonContainer} onPress={()=>onSignUpPress()}>
                <Text style ={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
            </View> 
            
        </View>
    );
}

export default SignUp;
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
    account:{
        fontSize: 30,
        marginBottom:40,
        marginTop:20,
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



