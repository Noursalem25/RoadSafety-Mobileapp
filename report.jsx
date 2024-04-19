import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, CheckBox, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ReportForm = () => {
  const [location, setLocation] = useState('');
  const [problemType, setProblemType] = useState('');
  const [photo, setPhoto] = useState(null);
  const [checkBoxState, setCheckBoxState] = useState({
    brokenLights: false,
    pothole: false,
    construction: false,
    other: false
  });

  const handleCheckBoxChange = (key) => {
    setCheckBoxState({ ...checkBoxState, [key]: !checkBoxState[key] });
  };

  const handleImageSelect = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhoto(result.uri);
    }
  };

  const submitReport = () => {
    // Here you can send the report data to your backend or do whatever you need with it
    console.log({
      location,
      problemType,
      photo
    });
    // Reset form after submission
    setLocation('');
    setProblemType('');
    setPhoto(null);
    setCheckBoxState({
      brokenLights: false,
      pothole: false,
      construction: false,
      other: false
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter location (GPS coordinates)"
        value={location}
        onChangeText={setLocation}
      />
      <Text style={styles.label}>Select problem type:</Text>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={checkBoxState.brokenLights}
          onValueChange={() => handleCheckBoxChange('brokenLights')}
        />
        <Text style={styles.checkBoxLabel}>Broken Lights</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={checkBoxState.pothole}
          onValueChange={() => handleCheckBoxChange('pothole')}
        />
        <Text style={styles.checkBoxLabel}>Pothole</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={checkBoxState.construction}
          onValueChange={() => handleCheckBoxChange('construction')}
        />
        <Text style={styles.checkBoxLabel}>Construction</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={checkBoxState.other}
          onValueChange={() => handleCheckBoxChange('other')}
        />
        <Text style={styles.checkBoxLabel}>Other</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter other problem type"
        value={problemType}
        onChangeText={setProblemType}
        editable={checkBoxState.other}
      />
      <TouchableOpacity style={styles.button} onPress={handleImageSelect}>
        <Text style={styles.buttonText}>Select Photo</Text>
      </TouchableOpacity>
      {photo && <Image source={{ uri: photo }} style={styles.image} />}
      <TouchableOpacity style={styles.button} onPress={submitReport}>
        <Text style={styles.buttonText}>Submit Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkBoxLabel: {
    marginLeft: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});

export default ReportForm;
