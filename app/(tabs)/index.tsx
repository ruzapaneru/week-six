import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";
import { ref, set } from "firebase/database";
import { db } from "../firebaseConfig";  // ✅ Correct import

export default function Index() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [destination, setDestination] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (!name || !country || !destination) {
      Alert.alert("Error", "Please fill all required fields.");
      return;
    }

    const userRef = ref(db, "tourists/" + name);
    set(userRef, {
      name,
      country,
      destination,
      feedback,
      timestamp: new Date().toISOString(),
    })
      .then(() => {
        Alert.alert("Success", "Tourist information saved successfully!");
        setName("");
        setCountry("");
        setDestination("");
        setFeedback("");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tourist Guide Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />

      <TextInput
        style={styles.input}
        placeholder="Favorite Destination"
        value={destination}
        onChangeText={setDestination}
      />

      <TextInput
        style={[styles.input, styles.feedbackInput]}
        placeholder="Any feedback or comment?"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9fafc",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2c3e50",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: "#fff",
  },
  feedbackInput: {
    height: 80,
    textAlignVertical: "top",
  },
});
