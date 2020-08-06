import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import firebase from '../firebase/config';

const ChangePassword = () => {
    const [userDetail, setUserDetail] = useState({
        id: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const { currentPassword, newPassword, confirmPassword } = userDetail;

    reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }
    const onUpdatePassword = () => {
        reauthenticate(currentPassword).then(() => {
            var user = firebase.auth().currentUser;
            user.updatePassword(newPassword).then(() => {
                if (newPassword !== confirmPassword) {
                    alert("password did not match");
                } else {
                    alert("Password was change");
                }

            }).catch((err) => {
                alert(err);

            });
        }).catch((err) => {
            alert(err);
        });

    };

    const handleOnChange = (newPassword, value) => {
        setUserDetail({
            ...userDetail,
            [newPassword]: value,
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput style={styles.input}
                    placeholder="Enter Current Password"
                    returnKeyType="next"
                    secureTextEntry
                    autoCorrect={false}
                    onChangeText={(text) => handleOnChange('currentPassword', text)}


                />
                <TextInput style={styles.input}
                    placeholder="Enter New Password"
                    returnKeyType="next"
                    secureTextEntry
                    autoCorrect={false}
                    onChangeText={(text) => handleOnChange('newPassword', text)}


                />

                <TextInput style={styles.input}
                    placeholder="Enter Confirm Password"
                    returnKeyType="next"
                    secureTextEntry
                    autoCorrect={false}
                    onChangeText={(text) => handleOnChange('confirmPassword', text)}


                />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => onUpdatePassword()} >
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>

            </View>
        </View>
    );

}

export default ChangePassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282f43',

    },
    formContainer: {
        marginTop: 50,

    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 18,
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
    },
    buttonContainer: {
        height: 20,
        borderRadius: 50,
        backgroundColor: 'white',
        paddingVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100,
        marginRight: 100,
        marginTop: 40,


    },
    buttonText: {
        fontSize: 20,
    }

})