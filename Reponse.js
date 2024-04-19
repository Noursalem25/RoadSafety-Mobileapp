import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

const Reponse= ({ rotate,Rep }) => {
  return (
    <Pressable
      onPress={() => {
        rotate.value = rotate.value ? 0 : 1;
      }}
      style={styles.container}
    >
      <Text style={styles.cardContent}>{Rep}</Text>
      
    </Pressable>
  );
};

export default Reponse;

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
  
});
