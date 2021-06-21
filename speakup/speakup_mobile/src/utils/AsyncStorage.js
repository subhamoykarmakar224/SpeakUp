import * as SecureStore from 'expo-secure-store';

export async function AsyncStorageSetData(key, value){
    await SecureStore.setItemAsync(key, value);
}

export async function AsyncStorageGetData(key){
    await SecureStore.getItemAsync(key);
}

// export default { AsyncStorageSetData, AsyncStorageGetData };

