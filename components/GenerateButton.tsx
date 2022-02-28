import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function GenerateButton(props : any) {
    const { setRandomFood, getNextMealIdea } = props;
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                setRandomFood();
            }}
        >
        <Text style={styles.text}>Click Me</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
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
    text: {
        fontSize: 18,
        fontFamily: 'normal',
        fontWeight: '600',
        letterSpacing: 1.5
    }
});