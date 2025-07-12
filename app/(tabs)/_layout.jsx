import { Slot } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  return (
    <>
      <SafeAreaView>
        <Text>Layouut</Text>
        <Slot />
      </SafeAreaView>
    </>
  );
};

export default _layout;
