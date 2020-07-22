import React, { useEffect, useContext, useState } from 'react';
import {StyleSheet,Image} from 'react-native';
import { Store } from '../context/store/store';
import firebase from '../firebase/config';
import { LOADING_START, LOADING_STOP } from '../context/action/type';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import ShowUsers from '../component/ShowUsers';
import { uuid } from '../utils/constant';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import {Header, Item,Icon, Input} from 'native-base';
import images from '../utils/images';


const Chats = ({navigation}) =>{
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

      const nameTap = (profileImg,name,guestUserId)=>{
        if(!profileImg){
          navigation.navigate('UserChat',{
            name,
            guestUserId,
            currentuserId:uuid,
          });
        }else{
            navigation.navigate('UserChat',{
            name,
            guestUserId,
            currentuserId:uuid,
          });
        }
      };

    return(
        <SafeAreaView style={styles.container}>
          <Header searchBar rounded style={styles.searchBar}>
            <Item style={styles.itembar}>
              <Input 
              placeholder="Search....."
              autoCorrect={false}
              returnKeyType="done"
              style={styles.input}/>
            <Image 
             source={images. SEARCH_LOGO} 
             style={styles.logo}
            />
            </Item>
          </Header>
            <FlatList
            alwaysBounceVertical={false}
            data={allUsers}
            keyExtractor={(_,index)=>index.toString()}
            renderItem={({item})=>(
                <ShowUsers
                name={item.name}
                img={item.profileImg}
                onNameTap={()=> nameTap(item.profileImg,item.name,item.id)}/>
            )}

            />
        </SafeAreaView>
    );
}
export default Chats;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#282f43',
    height:'100%',
    // alignItems:'center',

  },
  searchBar:{
    backgroundColor:'#282f43',
    borderRadius:70,
  },
  itembar:{
    borderRadius:70,
    flexDirection:'row',
    backgroundColor:'grey'
  },
  logo:{
    height:30,
    width:30,
    marginRight:6   
},
input:{
  fontSize:20,
  marginLeft:10
}


});