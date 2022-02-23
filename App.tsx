import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const foodList = [
  'Seafood Fried Rice - Selera',
  'Chicken Rice - Food Republic',
  'Sandwitch - Subway',
  'Daily Bowl - Stuff\'d',
  'Burger - McDonalds',
  'Makisan',
  'Ayam Gebrek'
];

function getNextMealIdea() {
  const len = foodList.length;
  const randomIndex = Math.floor((Math.random() * len - 1) + 1);
  return foodList[randomIndex];
}

export default function App() {
  const [randomFood, setRandomFood] = useState('Haven\'t decided.');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <View style={styles.head}>
          Decide what to eat with a tap!
        </View>
        <View style={styles.food}>
          {randomFood}
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setRandomFood(getNextMealIdea());
        }}
      >
        <Text style={styles.buttonText}>Tap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center'
  },
  head: {
    color: '#fff',
    fontSize: 40,
    padding: 50,
    marginBottom: 30
  },
  button: {
    backgroundColor: "#FFC106",
    borderRadius: 20,
    padding: 20
  },
  buttonText: {
    fontSize: 40,
    fontFamily: 'normal'
  },
  card: {
    backgroundColor: '#FFC106',
    width: '100%',
    marginBottom: 100,
    paddingTop: 10,
    paddingBottom: 100,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: '70%'
  },
  food: {
    textAlign: 'right',
    paddingRight: 40,
    fontWeight: 800,
    fontFamily: 'Roboto',
    fontSize: 20
  }
});
