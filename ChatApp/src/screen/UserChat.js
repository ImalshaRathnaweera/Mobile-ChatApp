import React, { useLayoutEffect, Fragment, useState, useEffect } from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList,TextInput} from 'react-native-gesture-handler';
import images from '../utils/images';
import ChatBox from '../component/ChatBox';
import firebase from '../firebase/config';
import ImagePicker from "react-native-image-picker";
import { recieverMsg,senderMsg } from '../connection';

const UserChat = ({route,navigation}) => {
    const {params} = route;
    const{name,img,guestUserId,currentuserId} = params;
    const [msgValue,setMsgValue] =useState('');
    const [messeges,setMessege] = useState([]);
    useLayoutEffect(()=>{
        navigation.setOptions({
        headerTitle:<Text>{name}</Text>
        });
    },[navigation]);

    useEffect(()=>{
      //console.log("start" + currentUserId);
        try {
            firebase
              .database()
              .ref("messeges")
              .child(currentuserId)
              .child(guestUserId)
              .on("value", (dataSnapshot) => {
                let msgs = [];
                dataSnapshot.forEach((child) => {
                  msgs.push({
                    sendBy: child.val().messege.sender,
                    recievedBy: child.val().messege.reciever,
                    msg: child.val().messege.msg,
                    img: child.val().messege.img,
                  });
                });
               
                setMessege(msgs.reverse());
              });
          }catch(error){
            
            console.log( error);
            alert(error);

        }
       
    },[]);

    
    const handleCamara =()=>{
        const option = {
            storageOptions: {
              skipBackup: true,
            },
          };
      
          ImagePicker.showImagePicker(option, (response) => {
            if (response.didCancel) {
              console.log("User cancel image picker");
            } else if (response.error) {
              console.log(" image picker error", response.error);
            } else {
              //image
              let source = "data:image/jpeg;base64," + response.data;
      
              senderMsg(msgValue, currentuserId, guestUserId, source)
                .then(() => {})
                .catch((err) => alert(err));
      
              // guest user
      
              recieverMsg(msgValue, currentuserId, guestUserId, source)
                .then(() => {})
                .catch((err) => alert(err));
            }
          });
    };

    const handleSend=()=>{
        setMsgValue('');
        if (msgValue) {
        senderMsg(msgValue, currentuserId, guestUserId,'')
        .then(() => {})
        .catch((err) => alert(err));

      // * guest user

      recieverMsg(msgValue, currentuserId, guestUserId,'')
        .then(() => {})
        .catch((err) => alert(err));
    }
};
const handleOnChange =(text)=>{
    setMsgValue(text);
};

    return (
       <SafeAreaView style={styles.continer}>
           <Fragment>
           <FlatList 
           inverted
           data={messeges}
           keyExtractor={(_,index)=>index.toString()}
           renderItem={({item})=>(
            <ChatBox
            msg={item.msg}
            userId ={item.sendBy}
            img={item.img}
            // onImgTap={()=>imgTap(item.img)}
            />
           )}
           />

           <View style={styles.sendMsg}>
               <TextInput style={styles.input}
               placeholder="Type a message..."
               numberOfLines={10}
               value={msgValue}
               onChangeText={(text)=>handleOnChange(text)}
               /> 
            <View>
           <TouchableOpacity onPress={()=>handleCamara()}>   
           <Image 
             source={images.CAMARA_LOGO} 
             style={styles.camaralogo}
             />
            </TouchableOpacity>
           </View>             
           <View>
            <TouchableOpacity onPress={()=>handleSend()}>   
           <Image 
             source={images.SENDMSG_LOGO} 
             style={styles.logo}
            />
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