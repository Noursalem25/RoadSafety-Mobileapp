import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import backgroundconsultation from "../assets/backgroundconsultation.png";

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
      navigation.navigate("Fee Details", { user: user });
    } else {
      Alert.alert("user do not exist");
    }
  };

  return (
    <ImageBackground
      source={backgroundconsultation}
      style={styles.backgroundImage}
    >
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#A378F8",
    padding: 10,
    marginLeft: "30%",
    width: "40%",
    borderRadius: 20,
    marginBottom: 10,
    fontFamily: "serif",
    marginTop: 30,
    marginLeft: "30%,",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch"
  },
  input: {
    borderWidth: 1,
    borderColor: "#A378F8",
    borderRadius: 20,
    width: "70%",
    padding: 10,
    margin: 5,
    textAlign: "center",
    marginTop: 70,
    fontFamily: "serif",
    marginLeft: "30%",
    marginRight: "30%",
  },
});

export default ConsultationPage;
