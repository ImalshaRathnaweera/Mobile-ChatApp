import React from "react";
import { Image, View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ img, name, onImgTap, onEditImgTap }) => (
    <View>
      <View >
        <TouchableOpacity onPress={onImgTap} activeOpacity={0.8}>
          {img ? (
            <Image source={{ uri: img }} resizeMode="cover" />
          ) : (
            <View>
              <Text >{name.charAt(0)}</Text>
            </View>
          )}
        </TouchableOpacity>
        <View >
          <FontAwesome5
            name="user-edit"
            size={20}
            onPress={onEditImgTap}
           
          />
        </View>
      </View>
      <Text>{name}</Text>
    </View>
  );