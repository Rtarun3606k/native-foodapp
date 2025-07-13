import { Slot } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { signIn } from "../../lib/ButtonGoogle";

const _layout = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    try {
      const userInfo = await signIn();
      console.log("Sign-in successful:", userInfo);
      Alert.alert("Success", "Google Sign-in successful!");
      // Here you can navigate to the main app or handle the user data
    } catch (error) {
      console.error("Sign-in failed:", error);
      Alert.alert("Error", "Google Sign-in failed. Please try again.");
    } finally {
      setIsSigningIn(false);
    }
  };

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
        <Text className="text-center text-2xl font-space-bold text-blue-600">
          Welcome to Our App
        </Text>

        <View className="mt-8 mb-6 px-4">
          <Button
            title={isSigningIn ? "Signing in..." : "Sign in with Google"}
            onPress={handleGoogleSignIn}
            disabled={isSigningIn}
          />
        </View>
      </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  );
};

export default _layout;
