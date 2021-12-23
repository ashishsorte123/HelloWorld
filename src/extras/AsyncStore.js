import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncStore {
  async storeData(key, value) {
    try {
      console.log('Storing');
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('Something went wrong in storing', e);
      return false;
    }
  }

  async getData(key) {
    try {
      console.log('Getting');
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.log('Something went wrong in getting', e);
      return false;
    }
  }
}
