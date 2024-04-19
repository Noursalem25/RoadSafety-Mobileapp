import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import backgroundFeedetails from "../assets/backgroundFeedetails.png";

const FeeDetailsPage = ({ navigation }) => {
  const route = useRoute();
  const { user } = route.params;
  const [userID, setuserID] = useState(user.UserId);
  const feeList = user.Fees;

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.cell}>
        <View>
          <Text style={styles.cellText}>{item.feeDescription}</Text>
          <Text style={styles.cellText}>Amount : {item.feeAmount}</Text>
          <Text style={styles.cellText}>Date : {item.feeDate}</Text>
        </View>
      </View>
      <View style={styles.cell}>
        <TouchableOpacity style={styles.Button} onPress={() => handlePay(item)}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => handleBookAppointment(item)}
        >
          <Text style={styles.buttonText}>reservation</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handlePay = (fee) => {
    // Implement payment procedure for the selected fee
    navigation.navigate("Payment");
  };

  const handleBookAppointment = (fee) => {
    // Implement booking appointment for the selected fee
    navigation.navigate("Appointment");
  };

  return (
    <ImageBackground
      source={backgroundFeedetails}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Your fees</Text>
        </View>
        {feeList.length > 0 && (
          <Text style={styles.message}>You have fee(s) to pay.</Text>
        )}
        {feeList.length == 0 && (
          <Text style={styles.message}>You do not have fee(s) to pay.</Text>
        )}
        <FlatList data={feeList} renderItem={renderItem} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch"
  },
  titlecontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: "blue",
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "lightblue",
  },
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    textAlign: "center",
    fontSize: 15,
  },
  Button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginBottom: 5,
    width: "70%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default FeeDetailsPage;
