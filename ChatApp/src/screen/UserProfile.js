import React, { useEffect, useContext, useState } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { Store } from '../context/store/store';
import firebase from '../firebase/config';
import { LOADING_START, LOADING_STOP } from '../context/action/type';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList ,TouchableOpacity} from 'react-native-gesture-handler';
import Profile from '../component/Profile';
import { uuid } from '../utils/constant';
import ImagePicker from 'react-native-image-picker';
import UpdateProfile from '../connection/user';
import images from '../utils/images';


const UserProfile = ({navigation}) =>{
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
            <View style={styles.bottmcontainer}>
            <TouchableOpacity style={styles.option} onPress={()=>navigation.navigate('setting')}>
            <Image 
              source={images.SETTING_LOGO} 
              style={styles.logo}/>
              <Text style={styles.optionName}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
            <Image 
              source={images.PRIVACY_LOGO} 
              style={styles.logo}/>
              <Text style={styles.optionName}>Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
            <Image 
              source={images. NOTIFICATION_LOGO} 
              style={styles.logo}/>
                <Text style={styles.optionName}>Notification</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
            <Image 
              source={images.HELP_LOGO} 
              style={styles.logo}/>
                <Text style={styles.optionName}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
            <Image 
              source={images.INVITE_LOGO} 
              style={styles.logo}/>
                <Text style={styles.optionName}>Invite Friends</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.option}>
            <Image 
              source={images.LOGOUT_LOGO} 
              style={styles.logo}/>
                <Text style={styles.optionName}>LogOut</Text>
            </TouchableOpacity> */}
            </View>
          
        </SafeAreaView>
    );
}
export default UserProfile;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#282f43',
    flex:1

  },
  logo:{
    height:39,
    width:39,
    position:'absolute',
    left:55,
  },
  optionName:{
    fontSize: 19,
    fontWeight: "bold",
    color:'white',
    left:115
  },
   option:{
     marginBottom:30,
     height:50,

    },
    bottmcontainer:{
     
    }

});