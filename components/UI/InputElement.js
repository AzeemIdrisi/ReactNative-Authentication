import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const InputElement = ({
  icon,
  placeholder,
  value,
  stateUpdater,
  secure,
  small,
}) => {
  const [show, setShow] = useState(true);
  return (
    <View className="flex-row items-center justify-between mt-6 px-4 py-4 pb-5 text-xl border-2 border-red-600 rounded-full">
      <View className="flex-row items-center">
        {icon && <FontAwesome name={icon} size={24} color="grey" />}
        <TextInput
          className={`text-[20px] pb-0 pt-0  font-semibold  text-neutral-400 ml-2 ${
            small ? "w-[115]" : "w-56"
          }`}
          placeholderTextColor={"grey"}
          placeholder={placeholder}
          value={value}
          onChangeText={stateUpdater}
          secureTextEntry={secure && show}
        />
      </View>
      {secure && (
        <Pressable onPress={() => setShow((prev) => !prev)}>
          <Text className="font-semibold text text-neutral-400">
            {show ? "Show" : "Hide"}
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default InputElement;
