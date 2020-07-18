import React from "react";
import { Text, TouchableOpacity,StyleSheet,Image} from "react-native";
import { Card, CardItem, Left, Body, Thumbnail } from "native-base";
import images from '../utils/images';

const ShowUsers = ({ name, img, onImgTap, onNameTap }) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.cardItem} >
        <Left>
          <TouchableOpacity style={styles.logIma} onPress={onImgTap}>
            {img ? (
              <Thumbnail source={{ uri: img }} resizeMode="cover" />
            ) : (
              <Image 
              source={images.PERSON_LOGO} 
              style={styles.nameImage}
          />
            )}
          </TouchableOpacity>

          <Body>
            <Text style={styles.proName} onPress={onNameTap}>
              {name}
            </Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

export default ShowUsers;

const styles = StyleSheet.create({
  card:{
    backgroundColor:'#282f43',
    borderBottomWidth: 1,
    marginBottom:0,
    marginTop:0, 
    height: 80,
    borderColor: '#316798',
  
  },
  cardItem:{
    backgroundColor:'#282f43',
    
  },
  logIma:{
    height: 60,
    width: 60,
    borderColor: '#3bcb94',
    borderWidth: 2,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
  },
  nameImage:{
    height: 50,
    width: 50,
  },
  
  proName:{
     fontSize: 18,
     color: 'white', 
     fontWeight: "bold" 
  }
});