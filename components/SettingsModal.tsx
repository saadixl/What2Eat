import React,  { useState, useEffect } from 'react';
import { Modal, Text, TextInput, View, Pressable, StyleSheet } from 'react-native';
import FoodOption from './FoodOption';
import { setData } from '../helper/db';

function renderFoodOptions(foodMap:any={}, deleteOption : any) {
    return Object.keys(foodMap || {}).map((option: string, i: number) => {
        return <FoodOption deleteOption={deleteOption} option={option} key={i}>
            {option}
        </FoodOption>;
    });
}

export default function SettingsModal(props : any) {
    const { modalVisible, setModalVisible } = props;
    const [foodMap, setFoodMap] = useState({});
    const [text, onChangeText] = useState('');

    useEffect(() => {
      setFoodMap(props.foodMap);
    }, [props.foodMap]); // Update child state, when props also updated

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
                    {renderFoodOptions(foodMap, (option : string) => {
                      delete foodMap[option];
                      const updatedFoodMap = {
                        ...foodMap
                      };
                      setFoodMap(updatedFoodMap);
                      props.setFoodMap(updatedFoodMap);
                      setData('foodMap', updatedFoodMap);
                    })}
                    <TextInput
                      onChangeText={onChangeText}
                      value={text}
                      placeholder='Add new food option' 
                      style={styles.input} />
                    <Pressable
                      style={[styles.button, styles.buttonOpen]}
                      onPress={() => {
                        const updatedFoodMap = {
                          ...foodMap,
                          [text]: true
                        };
                        setFoodMap(updatedFoodMap);
                        props.setFoodMap(updatedFoodMap);
                        setData('foodMap', updatedFoodMap);
                        onChangeText('');
                      }}
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
      alignSelf: 'stretch'
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
        alignSelf: 'stretch'
    }
  });