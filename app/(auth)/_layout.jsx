import { Slot } from "expo-router";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

const _layout = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="w-full h-[35vh] bg-white">
          <ImageBackground
            source={require("../../assets/images/auth.jpg")}
            alt="no image"
            className="size-full rounded-b-3xl "
            resizeMode="stretch"
          />
        </View>
        <Text className="text-center text-2xl font-bold text-black">
          Welcome to Our App
        </Text>
      </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  );
};

export default _layout;
