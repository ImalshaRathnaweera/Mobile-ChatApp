import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from "native-base";
const Setting = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('updateProfile')}>
                    <Text style={styles.topic}>Update Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.nameContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('changePassword')}>
                    <Text style={styles.topic}>Change Password</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.nameContainer}>
                <TouchableOpacity >
                    <Text style={styles.topic}>Account Infor</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default Setting;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282f43',
        flex: 1,
    },
    topic: {
        color: 'white',
        fontSize: 18,
    },
    nameContainer: {
        height: 30,
        marginLeft: 15,
        marginTop: 20
    }
})