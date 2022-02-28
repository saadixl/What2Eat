import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function FoodSuggestion(props : any) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>
                {props.randomFood}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: { 
        color: '#fff',
        fontSize: 25,
        fontWeight: '500'
    },
    wrapper: {
        textAlign: 'center',
        padding: 30,
        fontSize: 25,
        fontWeight: '500',
        color: '#fff',
        marginTop: 150
    }
});