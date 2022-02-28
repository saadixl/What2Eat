import React,  { useState } from 'react';
import { Modal, Text, TextInput, View, Pressable, StyleSheet } from 'react-native';
import FoodOption from './FoodOption';

function renderFoodOptions(foodList : any) {
    return foodList.map((option: string, i: number) => {
        return <FoodOption key={i}>
            {option}
        </FoodOption>;
    });
}

export default function SettingsModal(props : any) {
    const { modalVisible, setModalVisible, foodList } = props;
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => {
            setModalVisible(modalVisible);
        }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {renderFoodOptions(foodList)}
                    <TextInput placeholder='Add new food option' style={styles.input} />
                    <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    >
                    <Text style={styles.textStyle}>Add new option</Text>
                    </Pressable>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    modalView: {
      margin: 10,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 10,
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
      padding: 20,
      elevation: 2,
      margin: 5,
      width: '100%'
    },
    buttonOpen: {
      backgroundColor: '#FFC106'
    },
    buttonClose: {
      backgroundColor: "#292b2c",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    input: {
        height: 50,
        marginTop: 10,
        marginBottom: 5,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        width: '100%'
    }
  });