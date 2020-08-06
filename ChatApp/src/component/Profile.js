import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
// import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import images from '../utils/images';

export default ({ img, name, onImgTap, onEditImgTap }) => (
  <View style={styles.container}>
    <View style={styles.imgContiner}>
      <TouchableOpacity onPress={onImgTap} activeOpacity={0.8}>
        {img ? (
          <Image style={styles.img1} source={{ uri: img }} resizeMode="cover" />
        ) : (
            <View >
              <Image
                source={images.PERSON_LOGO}
                style={styles.nameImage}
              />
            </View>
          )}
      </TouchableOpacity>
      <View style={styles.editImgContainer}>
        <TouchableOpacity onPress={onEditImgTap}>
          <Image
            source={images.CAMARA_LOGO}
            style={styles.camaralogo}
          />
        </TouchableOpacity>
      </View>
    </View>
    <Text style={styles.name}>{name}</Text>

    {/* <TouchableOpacity style={styles.option}>
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
      <TouchableOpacity style={styles.option}>
      <Image 
        source={images.LOGOUT_LOGO} 
        style={styles.logo}/>
          <Text style={styles.optionName}>LogOut</Text>
      </TouchableOpacity> */}
  </View>

);


const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1
  },
  imgContiner: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: '#3bcb94',
    marginLeft: 130,
    marginRight: 150,

  },
  camaralogo: {
    height: 40,
    width: 40,

  },

  nameImage: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editImgContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    position: "absolute",
    right: 20,
    bottom: 10,
    color: 'white',
  },
  name: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: "bold",
    color: 'white',
    marginTop: 15,
  },
  // option:{
  //  marginBottom:20,
  //  height:50,
  // // backgroundColor:'white'

  // },
  // optionName:{
  //   fontSize: 19,
  //   fontWeight: "bold",
  //   color:'white',
  //   left:115
  // },
  // logo:{
  //   height:39,
  //   width:39,
  //   position:'absolute',
  //   left:55,
  // }


});