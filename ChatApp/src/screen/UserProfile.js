import React, { useEffect, useContext, useState } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Store } from '../context/store/store';
import firebase from '../firebase/config';
import { LOADING_START, LOADING_STOP } from '../context/action/type';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import Profile from '../component/Profile';
import { uuid } from '../utils/constant';
import ImagePicker from 'react-native-image-picker';
import UpdateProfile from '../connection/user';


const UserProfile = () =>{
    const globalState = useContext(Store);
    const { dispatchLoaderAction } = globalState;

    const [userDetail, setUserDetail] = useState({
        id: "",
        name: "",
        profileImg: "",
      });
      const{name,profileImg}=userDetail;
      const [allUsers, setAllUsers] = useState([]);
      useEffect(() => {
        dispatchLoaderAction({
          type: LOADING_START,
        });
        try {
          firebase
            .database()
            .ref("users")
            .on("value", (dataSnapshot) => {
              let users = [];
              let currentUser = {
                id: "",
                name: "",
                profileImg: "",
              };
              dataSnapshot.forEach((child) => {
                if (uuid === child.val().uuid) {
                  currentUser.id = uuid;
                  currentUser.name = child.val().name;
                  currentUser.profileImg = child.val().profileImg;
                } else {
                  users.push({
                    id: child.val().uuid,
                    name: child.val().name,
                    profileImg: child.val().profileImg,
                  });
                }
              });
              setUserDetail(currentUser);
              setAllUsers(users);
              dispatchLoaderAction({
                type: LOADING_STOP,
              });
            });
        } catch (error) {
          alert(error);
          dispatchLoaderAction({
            type: LOADING_STOP,
          });
        }
      }, []);



      const choicePhoto =()=>{
        const option ={
          storageOptions:{
            skipBakup:true
          }
        };
        ImagePicker.showImagePicker(option,(response)=>{
          if(response.didCancel){
            console.log('user cancle image picker')
          }else if(response.error){
            console.log('image picker',response.error)
          }else{
            let source = 'data:image/jpeg;base64,'+ response.data;
            dispatchLoaderAction({
              type:LOADING_START
            });
            UpdateProfile(uuid,source)
            .then(()=>{
              setUserDetail({
                ...userDetail,
                profileImg:source,
              })
            })
            .catch((err)=>{
              dispatchLoaderAction({
                type:LOADING_STOP
              });
              alert(err)
            })
          }
        })
      }
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
            alwaysBounceVertical={false}
            data={allUsers}
            keyExtractor={(_,index)=>index.toString()}
            ListHeaderComponent={
                <Profile
                img={profileImg}
                name={name}
                onEditImgTap={()=>choicePhoto()}/>
            }
            />
          
        </SafeAreaView>
    );
}
export default UserProfile;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#282f43'

  }

});