import { StatusBar } from 'expo-status-bar';
import { Alert, ImageBackground, Modal, Pressable, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const foodList : string[] = [
  'Seafood Fried Rice - Selera',
  'Chicken Rice - Food Republic',
  'Sandwitch - Subway',
  'Daily Bowl - Stuff\'d',
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
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.settingsButton}
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
      <View style={styles.food}>
          {randomFood}
        </View>
      <TouchableOpacity
        style={styles.generateButton}
        onPress={() => {
          setRandomFood(getNextMealIdea());
        }}
      >
        <Text style={styles.generateButtonText}>Click Me</Text>
      </TouchableOpacity>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalText}>Hello World!</Text>
            <Pressable
              style={[modalStyles.button, modalStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalStyles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    fontFamily: 'Helvetica',
    fontWeight: '600',
    letterSpacing: 1.5
  },
  settingsButton: {
    marginTop: 10
  },
  card: {
    backgroundColor: '#FFC106',
    width: '100%',
    paddingTop: 60,
    borderBottomEndRadius: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  food: {
    textAlign: 'center',
    padding: 30,
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: '500',
    color: '#FFF',
    marginTop: 150
  },
  lunchImageWrapper: {
    marginBottom: -125,
  },
  lunchImage: {
    height: 250,
    width: 250
  },
  lunchImageSrc: { 
    borderRadius: '50%',
    borderColor: '#FFC106',
    borderWidth: 5
  }
});


const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});