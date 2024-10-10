import { Stack } from "expo-router";
import { initializeApp } from "firebase/app";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="Home" />
    </Stack>
  );
}
