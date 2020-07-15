import React from "react";
// import { Text, TouchableOpacity } from "react-native";
// import {  } from "native-base";
import {Text,StyleSheet, TouchableOpacity,Card, CardItem, Left, Body, Thumbnail} from 'react-native';
// import styles from "./styles";

const ShowUsers = ({ name, img, onImgTap, onNameTap }) => {
  return (
    <Card style={styles.cardStyle}>
      <CardItem style={styles.cardItemStyle}>
        <Left>
          <TouchableOpacity style={[styles.logoContainer]} onPress={onImgTap}>
            {img ? (
              <Thumbnail source={{ uri: img }} resizeMode="cover" />
            ) : (
              <Text style={styles.thumbnailName}>{name.charAt(0)}</Text>
            )}
          </TouchableOpacity>

          <Body>
            <Text style={styles.profileName} onPress={onNameTap}>
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
    cardStyle: {
        // backgroundColor: color.SEMI_TRANSPARENT,
        borderBottomWidth: 1,
        // borderColor: color.SILVER,
      },
      cardItemStyle: {
        // backgroundColor: color.SEMI_TRANSPARENT,
      },
    
      logoContainer: {
        height: 60,
        width: 60,
        borderWidth: 2,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
      },
      thumbnailName: { fontSize: 30, fontWeight: "bold" },
      profileName: { fontSize: 20, fontWeight: "bold" },
});