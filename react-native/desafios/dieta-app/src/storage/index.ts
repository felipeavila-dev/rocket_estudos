import AsyncStorage from "@react-native-async-storage/async-storage";

type MealsProps = {
  title: string,
  data: {
    meal: string,
    diet: boolean
  }[]
}


export const getDataFromStorage  = async() => {
  try {
    const storageData = await AsyncStorage.getItem('meals');
    const parsedData: MealsProps[] = storageData ? JSON.parse(storageData) : [];
    return parsedData;  
  } catch (error) {
    throw error;
  }
}