import AsyncStorage from '@react-native-async-storage/async-storage';

const DataStorage = {
  retrieveData: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storedata');
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('Error retrieving data:', e);
      return null;
    }
  },

  storeData: async (data) => {
    try {
      await AsyncStorage.setItem('@storedata', JSON.stringify(data));
    } catch (e) {
      console.log('Error storing data:', e);
    }
  },
};

export default DataStorage;
