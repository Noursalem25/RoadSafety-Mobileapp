import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {SharedValue} from 'react-native-reanimated'
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo
function Props(rotate) {
    this.rotate = rotate;
  }
  const Qestion = ({rotate,Ques})=>{
    return (
      <Pressable onPress={()=>{
        rotate.value = rotate.value ? 0 : 1;
      }} style={styles.container}>
         <FontAwesome name="question-circle" size={24} color="#FF3131" style={styles.icon} />
        <Text style={styles.cardContent}>{Ques}</Text>
       
      </Pressable>
    );
  }
export default Qestion;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6f6f7',
    width: 300,
    height: 200,
    borderRadius: 10,
    padding: 20
  },
  
  cardContent: {
    fontSize: 18,
    color: '#3a5d9c',
    alignSelf: 'center',
    marginTop: 20
  },
  icon: {
    marginBottom: 10, 
  },
  
});