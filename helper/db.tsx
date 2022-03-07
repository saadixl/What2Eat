import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setData(key : string, value : object) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        // Error
        console.log('Something went wrong while saving data: ', e);
    }
}

export async function getData(key : string) {
    try {
        const value = await AsyncStorage.getItem(key);
        return JSON.parse(value || '{}');
    } catch(e) {
        console.log('Something went wrong while getting data: ', e);
    }
}