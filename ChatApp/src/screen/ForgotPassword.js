import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ResetPasswordRequest } from '../connection';
import firebase from '../firebase/config';
import { Store } from '../context/store/store';

const ForgotPassword = () => {
    // const [credentials, setCredentials] = useState({
    //     email: '',
    // });
    // const { email } = credentials;
    // const onSendLink = () => {
    //     firebase.auth().sendPasswordResetEmail(email)
    //         .then(function (result) {
    //         });

    // };

    // const handleOnChange = () => {
    //     setCredentials({
    //         ...credentials,
    //         // [email]:value,
    //     })
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.topic}>Reset Password</Text>
            <View>
                <Text style={styles.senten}>If you have forgotten your password enter your email address and we send you a verification code, then your can reset your password</Text>
                <TextInput style={styles.input}
                    name="email"
                    placeholder="Enter Valid Email"
                    //value={email}
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    // onChangeText={(text) => handleOnChange('email', text)}
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Send Link</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: 'white',
    },
    topic: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 40,
        marginTop: 30,

    },
    senten: {
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 40,
        color: 'grey'
    },
    btnText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 18,
        backgroundColor: 'white',
        borderColor: '#8d3fd2',
        borderWidth: 1,
        marginBottom: 10,

    },
    btn: {
        height: 30,
        borderRadius: 50,
        backgroundColor: '#8d3fd2',
        paddingVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50,
        marginTop: 40,

    }

})