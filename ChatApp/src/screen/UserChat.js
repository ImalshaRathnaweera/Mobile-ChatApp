import React, { useLayoutEffect, Fragment } from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import images from '../utils/images';



const UserChat = ({route,navigation}) => {
    const {params} = route;
    const{name,guestUserId,currentuserId} = params;
    useLayoutEffect(()=>{
        navigation.setOptions({
        headerTitle:<Text>{name}</Text>
        });
    },[navigation])
    return (
       <SafeAreaView style={styles.continer}>
           <Fragment>
           <FlatList 
        //    data={(1,2,3)}
           keyExtractor={(_,index)=>index.toString()}
           renderItem={({item})=><Text style={styles.name}>{name}</Text>}/>

           <View style={styles.sendMsg}>
               <TextInput style={styles.input}
               placeholder="Type a message..."
               numberOfLines={10}/> 
            <View>
           <TouchableOpacity>   
           <Image 
             source={images.CAMARA_LOGO} 
             style={styles.camaralogo}/>
            </TouchableOpacity>
           </View>             
           <View>
            <TouchableOpacity>   
           <Image 
             source={images.SENDMSG_LOGO} 
             style={styles.logo}/>
            </TouchableOpacity>
           
           </View>
           </View>
           </Fragment>
       </SafeAreaView>
    );
}

export default UserChat;

const styles = StyleSheet.create({
continer:{
    flex:1,
    backgroundColor:'#282f43',
    
},
name:{
    backgroundColor:'#34495e'
},
sendMsg:{
    flexDirection:'row',
    backgroundColor:'white',
    height:50,
    borderRadius:50,
    width:"100%",
},
logo:{
    height:45,
    width:45,
    marginTop:5
    
},
camaralogo:{
    height:40,
    width:40,
    marginTop:5,
    marginRight:5
},
input:{
    fontSize:20,
    width: "75%",
    

}
});