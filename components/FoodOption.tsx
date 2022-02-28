import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FoodOption(props : any) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.optionText}>
                {props.children} <Ionicons style={styles.icon} name="md-close-circle" size={16} color="#d9534f" />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#f0ad4e',
        padding: 15,
        borderRadius: 10,
        marginBottom: 5,
        width: '100%'
    },
    optionText: {
        fontSize: 14,
        textAlign: 'left'
    },
    icon: {
        position: 'absolute',
        top: 5,
        right: 5
    }
});