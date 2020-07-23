import React from 'react';
import {View ,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';


const ChangePassword =({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
            <TextInput style ={styles.input}
            placeholder="Enter Current Password"
            // value={password}
            returnKeyType="next"
            secureTextEntry
            autoCorrect={false}
           // onChangeText ={(text)=>handleOnChange('password',text)}

           
            />
            <TextInput style ={styles.input}
            placeholder="Enter New Password"
           // value={password}
            returnKeyType="next"
            secureTextEntry
            autoCorrect={false}
            // onChangeText ={(text)=>handleOnChange('password',text)}

           
            />
            
            <TextInput style ={styles.input}
             placeholder="Enter Confirm Password"
            //  value={password}
             returnKeyType="next"
             secureTextEntry
             autoCorrect={false}
            //  onChangeText ={(text)=>handleOnChange('password',text)}
 
            
             />
             <TouchableOpacity style ={styles.buttonContainer} onPress>
                <Text style ={styles.buttonText}>Save</Text>
            </TouchableOpacity>

            </View>
        </View>
    );

}

export default ChangePassword;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#282f43',

    },
    formContainer:{
        marginTop:50,

    },
    input:{
        paddingLeft:20,
        borderRadius:50,
        height: 50,
        fontSize:18,
        backgroundColor:'white',
        borderWidth:1,
        marginBottom:30,
        marginLeft:30,
        marginRight:30,
    },
    buttonContainer:{
        height :20,
        borderRadius:50,
        backgroundColor:'white',
        paddingVertical:25,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:100,
        marginRight:100,
        marginTop:40,
        

    },
    buttonText:{
        fontSize:20,
    }

})