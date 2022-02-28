import { StatusBar } from 'expo-status-bar';
import { ImageBackground, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SettingsModal from './components/SettingsModal';
import FoodSuggestion from './components/FoodSuggestion';

const foodList : string[] = [
  'Seafood Fried Rice - Selera',
  'Chicken Rice - Food Republic',
  'Sandwitch - Subway',
  'Daily Bowl - Stuffd',
  'Burger - McDonalds',
  'Makisan',
  'Ayam Gebrek'
];

function getNextMealIdea() : string  {
  const len = foodList.length;
  const randomIndex = Math.floor((Math.random() * len - 1) + 1);
  return foodList[randomIndex];
}

export default function App() {
  const [randomFood, setRandomFood] = useState('Do you wanna know what to eat for lunch?');
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View style={styles.lunchImageWrapper}>
            <ImageBackground 
              source={require('./assets/lunch.jpg')} 
              resizeMode="cover" 
              style={styles.lunchImage}
              imageStyle={styles.lunchImageSrc}>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
      <FoodSuggestion randomFood={randomFood} />
      <TouchableOpacity
        style={styles.generateButton}
        onPress={() => {
          setRandomFood(getNextMealIdea());
        }}
      >
        <Text style={styles.generateButtonText}>Click Me</Text>
      </TouchableOpacity>
      <SettingsModal 
        foodList={foodList} 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center'
  },
  generateButton: {
    marginTop: 20,
    width: '70%',
    backgroundColor: "#FFF",
    borderRadius: 50,
    padding: 15,
    borderColor: '#FFC106',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  generateButtonText: {
    fontSize: 18,
    fontFamily: 'normal',
    fontWeight: '600',
    letterSpacing: 1.5
  },
  card: {
    backgroundColor: '#FFC106',
    width: '100%',
    paddingTop: 60,
    borderBottomEndRadius: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lunchImageWrapper: {
    marginBottom: -125,
  },
  lunchImage: {
    height: 250,
    width: 250
  },
  lunchImageSrc: { 
    borderRadius: 125,
    borderColor: '#FFC106',
    borderWidth: 5
  }
});