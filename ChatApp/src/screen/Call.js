import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
const Call = () =>{

    return(
        <View style={styles.container}>
            <View>
               <Text>Call</Text> 
            </View>
        </View>
    );
}
export default Call;

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#282f43',
    }
})