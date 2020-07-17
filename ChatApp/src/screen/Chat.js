import React, { useEffect, useContext, useState } from 'react';
import {View,Text} from 'react-native';
import { Store } from '../context/store/store';
import firebase from '../firebase/config';
import { LOADING_START, LOADING_STOP } from '../context/action/type';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import ShowUsers from '../component/ShowUsers';
//import Profile from '../component/Profile';
import { uuid } from '../utils/constant';
const Chats = () =>{
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

    return(
        <SafeAreaView>
            <FlatList
            alwaysBounceVertical={false}
            data={allUsers}
            keyExtractor={(_,index)=>index.toString()}
            // ListHeaderComponent={
            //     <Profile
            //     img={profileImg}
            //     name={name}/>
            // }
            renderItem={({item})=>(
                <ShowUsers
                name={item.name}
                img={item.profileImg}/>
            )}

            />
        </SafeAreaView>
    );
}
export default Chats;