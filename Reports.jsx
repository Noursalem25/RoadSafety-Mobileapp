import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { PermissionsAndroid } from "react-native";
import backgroundreportt from "../assets/backgroundreportt.png"
const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);
    if (
      granted["android.permission.CAMERA"] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted["android.permission.READ_EXTERNAL_STORAGE"] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted["android.permission.WRITE_EXTERNAL_STORAGE"] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log("Permissions granted");
    } else {
      console.log("Permissions denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const ReportForm = () => {
  const [location, setLocation] = useState("");
  const [Place, setPlace] = useState("");
  const [problemType, setProblemType] = useState("");
  const [photo, setPhoto] = useState(null);
  const [checkBoxState, setCheckBoxState] = useState({
    brokenLights: false,
    pothole: false,
    construction: false,
    other: false,
  });
  const [reasons, setReasons] = useState("");

  const handleCheckBoxChange = (key) => {
    setCheckBoxState({ ...checkBoxState, [key]: !checkBoxState[key] });
  };

  const handleReasonsChange = (text) => {
    setReasons(text);
  };

  const handleImageSelect = async () => {
    await requestCameraPermission(); // Ensure permissions are granted before accessing the camera

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [10, 10],
        quality: 1,
      });
      if (!result.cancelled) {
        setPhoto(result.assets[0].uri);
      }
    } catch (error) {}
  };

  const submitReport = () => {
    console.log({
      location,
      checkBoxState,
      photo,
    });
    setLocation("");
    setPlace("");
    setPhoto(null);
    setCheckBoxState({
      brokenLights: false,
      pothole: false,
      construction: false,
      other: false,
    });
  };

  return (
    <ImageBackground source={backgroundreportt} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Report Form</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Place :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter place"
            value={Place}
            onChangeText={setPlace}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Location :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter location (GPS coordinates)"
            value={location}
            onChangeText={setLocation}
          />
        </View>
        <Text style={styles.label}>Select problem type:</Text>
        <View style={styles.checkboxCont}>
          {Object.keys(checkBoxState).map((key) => (
            <View key={key} style={styles.checkboxContainer}>
              <RadioButton
                status={checkBoxState[key] ? "checked" : "unchecked"}
                onPress={() => handleCheckBoxChange(key)}
              />
              <Text>{key}</Text>
            </View>
          ))}
        </View>
        {checkBoxState["other"] && (
          <TextInput style={styles.input}
            value={reasons}
            onChangeText={handleReasonsChange}
            placeholder="other problems..."
          />
        )}
        <TouchableOpacity style={styles.button} onPress={handleImageSelect}>
          <Text style={styles.buttonText}>Attach Photo</Text>
        </TouchableOpacity>
        {photo && <Image source={{ uri: photo }} style={styles.image} />}
        <TouchableOpacity style={styles.button} onPress={submitReport}>
          <Text style={styles.buttonText}>Submit Report</Text>
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
    margin:"auto"
  },
  titlecontainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 1
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
    marginTop: -4,
    color: "#EF5F5F",
    fontFamily:"serif",
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
    fontFamily:"serif",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
    color: "#6191EC",
    fontFamily:"serif",
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
    fontFamily:"serif",
  },
  button: {
    backgroundColor: "#6191EC",
    padding: 10,
    marginLeft: "30%",
    width: "40%",
    borderRadius: 20,
    marginBottom: 10,
    fontFamily:"serif",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily:"serif",
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

export default ReportForm;
