import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";
import DatePicker from "react-native-datepicker";
import backgroundappoint from "../assets/backgroundappoint.png";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = () => {
    // Implement your logic to submit the appointment details
    setFirstName("");
    setLastName("");
    setEmail("");
    setSelectedDate("");
  };

  return (
    <ImageBackground source={backgroundappoint} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Book an Appointment</Text>
        <Text style={styles.label}>First Name :</Text>
        <TextInput
          value={firstName}
          onChangeText={setFirstName}
          placeholder="name"
          style={styles.input}
        />
        <Text style={styles.label}>Last Name :</Text>
        <TextInput
          value={lastName}
          onChangeText={setLastName}
          placeholder="LastName"
          style={styles.input}
        />
        <Text style={styles.label}> Email Address :</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email address"
          keyboardType="email-address"
          style={styles.input}
        />
        <Text style={styles.label}>Select a suitable date for you :</Text>
        <DatePicker
          style={styles.input}
          date={selectedDate}
          onDateChange={setSelectedDate}
          placeholder="Select Date"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>CONFIRM</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    //backgroundColor: '#CDDEFF', // Set background color here
    alignItems: "flex-start",
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
    marginBottom: 20,
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
    fontFamily: "serif",
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
    marginLeft: "10%",
    marginTop: 50,
    width: "40%",
    borderRadius: 20,
    marginBottom: 10,
    fontFamily: "serif",
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
  datePicker: {
    marginBottom: 10,
  },
});

export default AppointmentForm;
