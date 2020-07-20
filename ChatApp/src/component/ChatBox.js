import React from "react";
import { View, Text, Image,Dimensions,StyleSheet} from "react-native";
import { Card, CardItem } from "native-base";
import uuid from '../utils/constant';
import { TouchableOpacity } from "react-native-gesture-handler";

 
const ChatBox = ({ userId, msg, img, onImgTap }) => {
  let isCurrentUser = userId === uuid ? true : false;

  const { width: deviceWidth } = Dimensions.get("window" );
  return (
    <Card
      transparent
      style={{
        maxWidth: deviceWidth / 2 + 10,
        alignSelf: isCurrentUser ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={[
          styles.chatContainer,
          isCurrentUser && {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 0,
            backgroundColor:'white',
          },
        ]}
      >
        {img ? (
          <CardItem cardBody>
            <TouchableOpacity onPress={onImgTap}>
              <Image
                source={{ uri: img }}
                resizeMode="cover"
                style={{ height: 200, width: deviceWidth / 2 }}
              />
            </TouchableOpacity>
          </CardItem>
        ) : (
          <Text
            style={[styles.chatTxt, isCurrentUser && { color:'white' }]}
          >
            {msg}
          </Text>
        )}
      </View>
    </Card>
  );
};

export default ChatBox;


const styles = StyleSheet.create({
    chatContainer:{
        backgroundColor: 'white', 
        borderTopRightRadius: 20

    },

    chatTxt:{
    color: 'black',
    fontSize: 18,
    marginVertical: 5,
    fontWeight: "500",
    padding: 8,

    }

})
