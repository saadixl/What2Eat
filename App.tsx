import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import SettingsModal from './components/SettingsModal';
import FoodSuggestion from './components/FoodSuggestion';
import GenerateButton from './components/GenerateButton';
import Header from './components/Header';

let initialFoodMap : object = {
  'Seafood Fried Rice - Selera': true,
  'Chicken Rice - Food Republic': true,
  'Sandwitch - Subway': true,
  'Daily Bowl - Stuffd': true,
  'Burger - McDonalds': true,
  'Makisan': true,
  'Ayam Gebrek': true
};

function getNextMealIdea(foodMap : object) : string  {
  const foodList = Object(foodMap).keys();
  const len = foodList.length;
  const randomIndex = Math.floor((Math.random() * len - 1) + 1);
  return foodList[randomIndex];
}

export default function App() {
  const [randomFood, setRandomFood] = useState('Do you wanna know what to eat for lunch?');
  const [modalVisible, setModalVisible] = useState(true);
  const [foodMap, setFoodMap] = useState(initialFoodMap);
  console.log("root foodMap", foodMap);
  return (
    <View style={styles.container}>

      <StatusBar style="auto" />

      <Header setModalVisible={setModalVisible}/>

      <FoodSuggestion randomFood={randomFood} />

      <GenerateButton 
        setRandomFood={() => { setRandomFood(getNextMealIdea(foodMap)) }} />

      <SettingsModal
        foodMap={foodMap}
        setFoodMap={setFoodMap}
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
  }
});