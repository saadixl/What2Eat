import React from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderImage from './HeaderImage';

export default function Header(props : any) {
    const { setModalVisible } = props;
    return (
        <View style={styles.wrapper}>
            <HeaderImage setModalVisible={setModalVisible}/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FFC106',
        width: '100%',
        paddingTop: 60,
        borderBottomEndRadius: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});