import { GoogleSignin } from "@react-native-google-signin/google-signin";

// Configure Google Sign-In
GoogleSignin.configure({
  webClientId:
    "413594665939-u5abqktgvhbi4m01sga4ih1bref580tf.apps.googleusercontent.com", // Your Google Web Client ID
  offlineAccess: true,
});

export const signIn = async () => {
  try {
    console.log("Starting Google Sign-In...");

    // Check if Google Play Services are available
    await GoogleSignin.hasPlayServices();
    console.log("Google Play Services available");

    // Perform the sign-in
    const userInfo = await GoogleSignin.signIn();

    console.log("Google Sign-In Success:", userInfo);
    return userInfo;
  } catch (error) {
    console.error("Google Sign-In Error:", error);

    // Provide more specific error messages
    if (error.code === "SIGN_IN_CANCELLED") {
      console.log("User cancelled the sign-in");
    } else if (error.code === "IN_PROGRESS") {
      console.log("Sign-in already in progress");
    } else if (error.code === "PLAY_SERVICES_NOT_AVAILABLE") {
      console.log("Google Play Services not available");
    } else if (error.code === "DEVELOPER_ERROR") {
      console.error(
        "DEVELOPER_ERROR: Check your Google Cloud Console configuration"
      );
      console.error(
        "Required: Package name 'com.anonymous.foodapp' and SHA-1 fingerprint in Google Cloud Console"
      );
    } else {
      console.log("Some other error happened");
    }

    throw error;
  }
};

export const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    console.log("Google Sign-Out Success");
  } catch (error) {
    console.error("Google Sign-Out Error:", error);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentUser = await GoogleSignin.getCurrentUser();
    return currentUser;
  } catch (error) {
    console.error("Get Current User Error:", error);
    return null;
  }
};
