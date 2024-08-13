import {
  View,
  Text,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import InputElement from "../components/UI/InputElement";
import Checkbox from "expo-checkbox";
import ButtonElement from "../components/UI/ButtonElement";

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const validateInput = () => {
    if (!firstName || firstName.length === 0) {
      Alert.alert("Invalid First Name", "First Name is required.");
      return;
    }
    if (!lastName || lastName.length === 0) {
      Alert.alert("Invalid Last Name", "Last Name is required.");
      return;
    }
    if (!email || email.length === 0) {
      Alert.alert("Invalid email", "Email cannot be empty.");
      return false;
    }
    if (!password || password.length === 0) {
      Alert.alert("Invalid Password", "Password is required.");
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match", "Please type same passwords.");
      return false;
    }
    return true;
  };
  const signupHandler = async () => {
    if (validateInput()) {
      Alert.alert(
        "Signup Success",
        "You have sucessfully signed email to Sekeron."
      );
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className=" flex-1"
    >
      <ScrollView className="flex-grow p-10">
        <Text className="pt-24 text-3xl text-white font-bold">Sign Up</Text>
        <View>
          <View className="flex-row justify-between">
            <InputElement
              small={true}
              placeholder="First Name"
              value={firstName}
              stateUpdater={setFirstName}
              secure={false}
            />
            <InputElement
              small={true}
              placeholder="Last Name"
              value={lastName}
              stateUpdater={setLastName}
              secure={false}
            />
          </View>
          <InputElement
            placeholder="Email"
            value={email}
            stateUpdater={setEmail}
            secure={false}
          />
          <InputElement
            placeholder="Password"
            value={password}
            stateUpdater={setPassword}
            secure={true}
          />
          <KeyboardAvoidingView behavior="height">
            <InputElement
              placeholder="Confirm Password"
              value={confirmPassword}
              stateUpdater={setConfirmPassword}
              secure={true}
            />
          </KeyboardAvoidingView>
        </View>
        <View className="flex-row items-center p-5 justify-center ">
          <View className="flex-row items-center gap-2 ">
            <Checkbox value={isChecked} onValueChange={setChecked} />
            <Pressable onPress={() => setChecked((prev) => !prev)}>
              <Text className="text-white">I agree with</Text>
            </Pressable>
          </View>
          <Pressable>
            <Text className="text-red-600 ml-1">privacy and policy</Text>
          </Pressable>
        </View>
        <ButtonElement onPress={signupHandler}>Sign up</ButtonElement>

        <View className="flex-row items-center justify-center gap-1">
          <Text className="text-white font-semibold">
            Already have an account?
          </Text>
          <Pressable onPress={() => navigation.replace("login")}>
            <Text className="text-red-600 font-semibold">Log in</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
