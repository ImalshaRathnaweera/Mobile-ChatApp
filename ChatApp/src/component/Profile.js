import React, { useContext } from 'react';
import {View,Text, Button} from 'react-native';
//zimport AuthContext from '../context/AuthContext';


const Profile = () =>{
    // const logout=()=>{
    //     // console.log()
    //     setUser(null);
    // }
    // const {user,setUser} = useContext(AuthContext);

    return(
        <View>
            {/* <Button onPress={logout} title="Logout" /> */}
            {/* <Text>{user.name}</Text> */}
            <Text>profile</Text>
        </View>
    );
}
export default Profile;