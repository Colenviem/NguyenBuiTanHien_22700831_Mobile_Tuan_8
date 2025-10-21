import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Index() {
  const router = useRouter();
  const [name, setName] = useState("");
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR{"\n"}TASK</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#555" style={{ marginRight: 8 }} />
        <TextInput 
          placeholder="Enter your name" 
          value={name}
          onChangeText={setName}
          style={styles.input} 
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push({ pathname: "/list", params: { name } })}>
        <Text style={styles.buttonText}>Get Started</Text>
        <Ionicons name="arrow-forward" size={20} color="#fff" style={{ marginLeft: 8 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#8353E2"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "100%",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 120,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});