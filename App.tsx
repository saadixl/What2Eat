import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import SettingsModal from './components/SettingsModal';
import FoodSuggestion from './components/FoodSuggestion';
import GenerateButton from './components/GenerateButton';
import Header from './components/Header';

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

      <Header setModalVisible={setModalVisible}/>

      <FoodSuggestion randomFood={randomFood} />

      <GenerateButton 
        setRandomFood={() => { setRandomFood(getNextMealIdea()) }} />

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
  }
});