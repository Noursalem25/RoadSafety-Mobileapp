import React from 'react';
import { View, StyleSheet, ScrollView,  SafeAreaView,Text,ImageBackground} from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Response from './Reponse';
import Qestion from './Question';

const questions = [
  { id: 1, quest: " What should you do if you witness aggressive driving behavior?" ,rep:"Safely distance yourself from the aggressive driver, avoid eye contact, and report the behavior to law enforcement if necessary."},
  { id: 2, quest: " Why is it important to obey speed limits?" ,rep:"Speeding reduces your ability to react to hazards and increases the severity of accidents. Obeying speed limits helps to ensure the safety of all road users."},
  {id: 3, quest: "How can you stay safe when walking or cycling near roads?",rep:"Always use designated sidewalks or bike lanes, obey traffic signals, wear bright or reflective clothing, and make eye contact with drivers before crossing."},
  {id: 4, quest: " Why is it important to wear seat belts?",rep:"Seat belts save lives by preventing occupants from being ejected from the vehicle in a crash and by reducing the severity of injuries."},
  {id: 5, quest: "What should you do if you encounter adverse weather conditions while driving?",rep:"Slow down, increase your following distance, and use headlights and windshield wipers as necessary. Consider pulling over if conditions become too hazardous."},
  {id: 6, quest: "Why is it important to check your vehicle's condition regularly?",rep:"Regular maintenance helps to ensure that your vehicle is safe to operate, reducing the risk of mechanical failure on the road."},
  {id: 7, quest: "How can you prevent drowsy driving?",rep:"Ensure you get enough sleep before driving, take regular breaks on long trips, and avoid driving during late night hours when you're naturally more tired."},
];

export default function Awarnes({navigation}) {
  const animatedStyles = [];
  const rotateValues = [];

  questions.forEach((question, index) => {
    const rotate = useSharedValue(0);
    const frontAnimatedStyles = useAnimatedStyle(() => {
      const rotateValue = interpolate(rotate.value, [0, 1], [0, 180]);
      return {
        transform: [
          { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) },
        ],
      };
    });
    const backAnimatedStyles = useAnimatedStyle(() => {
      const rotateValue = interpolate(rotate.value, [0, 1], [180, 360]);
      return {
        transform: [
          { rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 }) },
        ],
      };
    });

    animatedStyles.push({ front: frontAnimatedStyles, back: backAnimatedStyles });
    rotateValues.push(rotate);
  });

  return (
  <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContent}>
      <ImageBackground
            source={require('../assets/Road_Tips_for _safe_journey.png')} // Specify your image path
            style={styles.titleStyle} // Apply style for the ImageBackground
          >
      </ImageBackground>
    
      {questions.map((question, index) => (
        <View key={question.id} style={styles.cardStyle}>
          <Animated.View style={[styles.questcard, animatedStyles[index].front]}>
            <Qestion rotate={rotateValues[index]} Ques={question.quest} />
          </Animated.View>
          <Animated.View style={[styles.repCard, animatedStyles[index].back]}>
            <Response rotate={rotateValues[index]} Rep={question.rep}/>
          </Animated.View>
        </View>
      ))}
      </View>
    </SafeAreaView>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "2%",
    backgroundColor:'#CDDEFF',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questcard: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    elevation: 5, // Add elevation for shadow effect
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 6, // Shadow radius
    borderRadius: 10, // Border radius
    borderWidth: 2, // Border width
    borderColor: '#FF3131',
  },
  
  repCard: {
    backfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    elevation: 5, // Add elevation for shadow effect
    shadowColor: 'black', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.5, // Shadow opacity
    shadowRadius: 6, // Shadow radius
    borderRadius: 10, // Border radius
    borderWidth: 2, // Border width
    borderColor: '#7FAD4C',
  },
  cardStyle: {
    marginBottom: 20,
  },
  titleStyle: {
    marginBottom: 30,
    width: '100%', // Ensure the background covers the entire width
    height: 200, // Set the desired height for the background
    justifyContent: 'center',
    alignItems: 'center',
  },
});
