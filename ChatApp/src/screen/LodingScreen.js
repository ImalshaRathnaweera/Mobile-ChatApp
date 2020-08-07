import React from 'react';
// import {CommonActions} from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LodingScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.welcom}>Welcome to the TalkMore!</Text>
            <Text style={styles.text}>Free and secure calls and message to any TalkMore user in the world</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Login')} >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <View style={styles.details}>
                <Text style={styles.detailsText}>Name : Rathnaweera I.S.</Text>
                <Text style={styles.detailsText}>Index No. : 17001422</Text>
            </View>
        </View>
    );
}
export default LodingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    welcom: {
        fontSize: 30,
        textAlign: 'center',
        padding: 50,

    },
    text: {
        fontSize: 17,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'grey'
    },
    buttonContainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#8d3fd2',
        paddingVertical: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 50,
        marginTop: 60,


    },
    buttonText: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',

    },
    details:{
      alignItems:'flex-end',
      justifyContent:'flex-end',
      marginTop:300,
      marginRight:25

    },

    detailsText:{
        fontSize:20,
        padding:5

    }



});