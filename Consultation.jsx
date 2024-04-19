import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

const ConsultationPage = ({ navigation }) => {
  const [userID, setUserID] = useState("");
  const feeList = [
    {
      UserId: "1111",
      Fees: [
        {
          hasFee: true,
          feeAmount: 50,
          feeDescription: "Initial consultation fee",
          feeDate: "2024-04-20",
        },
        {
          hasFee: true,
          feeAmount: 50,
          feeDescription: "Initial consultation fee",
          feeDate: "2024-04-20",
        },
        {
          hasFee: true,
          feeAmount: 50,
          feeDescription: "Initial consultation fee",
          feeDate: "2024-04-20",
        },
      ],
    },
    {
      UserId: "2222",
      Fees: [],
    },
    {
      UserId: "3333",
      Fees: [
        {
          hasFee: true,
          feeAmount: 50,
          feeDescription: "Initial consultation fee",
          feeDate: "2024-04-20",
        },
      ],
    },
  ];
  const handleIDCheck = () => {
    const user = feeList.find((item) => item.UserId === userID);
    if (user) {
      navigation.navigate("FeeDetailsPage", { user: user });
    } else {
      Alert.alert("user do not exist");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your ID"
        value={userID}
        onChangeText={setUserID}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleIDCheck}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default ConsultationPage;
