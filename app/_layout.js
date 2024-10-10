import { StatusBar } from "react-native";
import { Text, View } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="text-white">Layout</Text>
      <StatusBar style="auto" />
    </View>
  );
}
