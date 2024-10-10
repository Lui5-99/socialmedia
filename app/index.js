import { useState } from "react";
import { StatusBar } from "react-native";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "expo-router";

const uri = "https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg";
const profilePicture = "https://randomuser.me/api/portraits/men/34.jpg";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    navigation.navigate("Home");
  };

  const handleLogin = async () => {};

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "purple",
          position: "absolute",
          bottom: 120,
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "blue",
          position: "absolute",
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          position: "absolute",
          top: 120,
          transform: [{ rotate: "45deg" }],
        }}
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BlurView intensity={90} style={{ borderRadius: 10 }}>
          <View style={styles.login}>
            <Image
              source={{ uri: profilePicture }}
              style={styles.profilePicture}
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                E-mail
              </Text>
              <TextInput
                style={styles.input}
                placeholder="jhondoe@example.com"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Password
              </Text>
              <TextInput
                style={styles.input}
                placeholder="********"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#00cfe890" }]}
              onPress={login}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#6792f090" }]}
            >
              <Text style={{ color: "white", fontSize: 20 }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  login: {
    width: 350,
    height: 500,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 1.5,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
});
