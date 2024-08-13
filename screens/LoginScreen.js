import {
  View,
  Text,
  Pressable,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputElement from "../components/UI/InputElement";
import Checkbox from "expo-checkbox";
import ButtonElement from "../components/UI/ButtonElement";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);

  const validateInput = () => {
    if (!username || username.length === 0) {
      Alert.alert("Invalid username", "Username cannot be empty.");
      return false;
    }
    if (!password || password.length === 0) {
      Alert.alert("Invalid Password", "Password is required.");
      return false;
    }
    return true;
  };

  const oAuthHandler = (service) => {
    Alert.alert(
      `${service} login success`,
      `You have sucessfully logged in to Sekeron using ${service}`
    );
  };
  const loginHandler = async () => {
    if (validateInput()) {
      Alert.alert(
        "Login Success",
        "You have sucessfully logged in to Sekeron."
      );
    }
  };

  const forgotPasswordHandler = () => {
    Alert.alert("Password Reset", "A password recent email has been sent.");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="p-10 flex-1"
    >
      <ScrollView className="flex-grow">
        <Text className="pt-24 text-3xl text-white font-bold">Log In</Text>
        <View>
          <InputElement
            icon="user"
            placeholder="Username"
            value={username}
            stateUpdater={setUsername}
            secure={false}
          />
          <InputElement
            icon="lock"
            placeholder="Password"
            value={password}
            stateUpdater={setPassword}
            secure={true}
          />
        </View>
        <View className="flex-row items-center p-5 justify-between ">
          <View className="flex-row items-center gap-2 ">
            <Checkbox value={isChecked} onValueChange={setChecked} />
            <Pressable onPress={() => setChecked((prev) => !prev)}>
              <Text className="text-white">Remember Me</Text>
            </Pressable>
          </View>
          <Pressable onPress={forgotPasswordHandler}>
            <Text className="text-red-600">Forgot Password?</Text>
          </Pressable>
        </View>
        <ButtonElement onPress={loginHandler}>Login</ButtonElement>
        <View className="mt-10">
          <Text className="text-xl font-bold text-white text-center">
            Or Sign in with
          </Text>
          <View className="flex-row items-center justify-center gap-5 my-5">
            <AntDesign
              onPress={() => oAuthHandler("Facebook")}
              name="facebook-square"
              size={36}
              color="white"
            />
            <AntDesign
              onPress={() => oAuthHandler("Google")}
              name="google"
              size={36}
              color="white"
            />
            <AntDesign
              onPress={() => oAuthHandler("Twitter")}
              name="twitter"
              size={36}
              color="white"
            />
            <AntDesign
              onPress={() => oAuthHandler("Instagram")}
              name="instagram"
              size={36}
              color="white"
            />
          </View>
          <View className="flex-row items-center justify-center gap-1 my-5">
            <Text className="text-white font-semibold">
              Don't have an account?
            </Text>
            <Pressable onPress={() => navigation.replace("signup")}>
              <Text className="text-red-600 font-semibold">Sign up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
