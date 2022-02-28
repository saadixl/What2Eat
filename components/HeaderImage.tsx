import React from 'react';
import { TouchableOpacity, View, StyleSheet, ImageBackground } from 'react-native';

export default function HeaderImage(props : any) {
    const { setModalVisible } = props;
    return (
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
            <View style={styles.wrapper}>
                <ImageBackground 
                    source={require('../assets/lunch.jpg')} 
                    resizeMode="cover" 
                    style={styles.image}
                    imageStyle={styles.src}>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: -125,
    },
    image: {
        height: 250,
        width: 250
    },
    src: {
        borderRadius: 125,
        borderColor: '#FFC106',
        borderWidth: 5
    }
});