import AsyncStorage from '@react-native-async-storage/async-storage';

const storagePrefix = 'amonino';

export const tokenStorage = {
    get: async () => {
        const token = await AsyncStorage.getItem(`${storagePrefix}token`);
        return JSON.parse(token);
    },
    set: token => {
        AsyncStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
    },
    clear: () => {
        AsyncStorage.removeItem(`${storagePrefix}token`);
    },
};
