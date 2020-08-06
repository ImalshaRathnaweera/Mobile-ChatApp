import React, { useEffect, useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Store } from '../context/store/store';
import firebase from '../firebase/config';
import { uuid } from '../utils/constant';
import { LOADING_START, LOADING_STOP } from '../context/action/type';
import { UpdateDetails } from '../connection';


const UpdateProfile = ({ navigation }) => {
  const globalState = useContext(Store);
  const { dispatchLoaderAction } = globalState;

  const [userDetail, setUserDetail] = useState({
    id: "",
    name: "",
  });
  const { name } = userDetail;
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
          };
          dataSnapshot.forEach((child) => {
            if (uuid === child.val().uuid) {
              currentUser.id = uuid;
              currentUser.name = child.val().name;
            } else {
              users.push({
                id: child.val().uuid,
                name: child.val().name,
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

  const onUpdate = () => {
    UpdateDetails(uuid, name)
      .then(() => {
        setUserDetail({
          ...userDetail,
          name: name,
        });
        alert("Name change successful");
      })
      .catch((err) => {
        dispatchLoaderAction({
          type: LOADING_STOP
        });
        alert(err)
      })
  };

  const handleOnChange = (name, value) => {
    setUserDetail({
      ...userDetail,
      [name]: value,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput style={styles.input}
          placeholder=" Enter User name"
          value={name}
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => handleOnChange('name', text)}

        />
        {/* <TextInput style={styles.input}
            placeholder="Enter Email"
            // value={email}
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText ={(text)=>handleOnChange('email',text)}

            /> */}
        <TouchableOpacity style={styles.buttonContainer} onPress={() => onUpdate()}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

      </View>
    </View>
  );

}

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282f43',

  },
  formContainer: {
    marginTop: 50,

  },
  input: {
    paddingLeft: 20,
    borderRadius: 50,
    height: 50,
    fontSize: 18,
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  buttonContainer: {
    height: 20,
    borderRadius: 50,
    backgroundColor: 'white',
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 40,


  },
  buttonText: {
    fontSize: 20,
  }

})