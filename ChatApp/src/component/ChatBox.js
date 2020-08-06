import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { Card, CardItem } from "native-base";
import uuid from '../utils/constant';
import { TouchableOpacity } from "react-native-gesture-handler";


const ChatBox = ({ userId, msg, img }) => {
  let isCurrentUser = userId === uuid ? true : false;

  const { width: deviceWidth } = Dimensions.get("window");
  return (
    <Card
      transparent
      style={{
        maxWidth: deviceWidth / 2 + 50,
        alignSelf: isCurrentUser ? "flex-start" : "flex-end",
      }}
    >
      <View
        style={[
          styles.chatContainer,
          isCurrentUser && {
            borderTopLeftRadius: 20,

          },
        ]}
      >
        {img ? (
          <CardItem cardBody>
            <TouchableOpacity>
              <Image
                source={{ uri: img }}
                resizeMode="cover"
                style={{ height: 400, borderColor: 'grey', borderWidth: 5, width: deviceWidth / 2 + 50 }}
              />
            </TouchableOpacity>
          </CardItem>
        ) : (
            <Text
              style={[styles.chatTxt, isCurrentUser && { color: 'white' }]}
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
  chatContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    // borderTopLeftRadius: 20,

  },

  chatTxt: {
    color: 'black',
    fontSize: 16,
    marginVertical: 5,
    padding: 8,

  }

})
