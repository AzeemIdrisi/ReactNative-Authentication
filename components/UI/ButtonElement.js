import { View, Text, Pressable } from "react-native";
import React from "react";

const ButtonElement = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      className=" bg-red-500 rounded-full overflow-hidden my-10 py-4 active:bg-red-600"
    >
      <Text className="text-xl font-bold text-white text-center">
        {children}
      </Text>
    </Pressable>
  );
};

export default ButtonElement;
