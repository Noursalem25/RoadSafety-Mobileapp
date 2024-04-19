import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import backgroundreportt from "../assets/backgroundpayment.png";

const PaymentForm = () => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = () => {
    // Implement your payment processing logic here
    setCardholderName("");
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
  };

  return (
    <ImageBackground source={backgroundreportt} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Fee Payment</Text>
        <Text style={styles.label}>Cardholder's Name :</Text>
        <TextInput
          value={cardholderName}
          onChangeText={setCardholderName}
          placeholder="name on Card"
          style={styles.input}
        />
        <Text style={styles.label}>Card Number :</Text>
        <TextInput
          value={cardNumber}
          onChangeText={setCardNumber}
          placeholder="_ _ _ _ _ _ _"
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.label}>Expiry Date (MM/YYYY) :</Text>
        <TextInput
          value={expiryDate}
          onChangeText={setExpiryDate}
          placeholder=" MM/YYYY"
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.label}>CVV :</Text>
        <TextInput
          value={cvv}
          onChangeText={setCvv}
          placeholder="code"
          keyboardType="numeric"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>PAY</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    //backgroundColor: '#CDDEFF', // Set background color here
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    paddingTop: "10%",
    margin: "auto",
  },
  titlecontainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
    marginRight: "20%",
    marginTop: -4,
    color: "#EF5F5F",
    fontFamily: "serif",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#8FB0F0",
    borderRadius: 20,
    width: "70%",
    padding: 10,
    margin: 5,
    textAlign: "center",
    fontFamily: "serif",
    marginLeft: "30%",
    marginRight: "30%",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
    color: "#6191EC",
    fontFamily: "serif",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxCont: {
    paddingLeft: 50,
  },
  input2: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    margin: 10,
    fontFamily: "serif",
  },
  button: {
    backgroundColor: "#6191EC",
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
    fontFamily: "serif",
  },
  image: {
    width: 250,
    height: 250,
    margin: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch"
  },
});

export default PaymentForm;
