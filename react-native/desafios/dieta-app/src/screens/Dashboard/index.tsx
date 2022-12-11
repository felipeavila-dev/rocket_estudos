import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Header } from '../../components/Header';
import { MealsListArea } from '../../components/MealsListArea';
import { NewMealsButton } from '../../components/NewMealsButton';
import { PercentCard } from '../../components/PercentCard';
import { getDataFromStorage } from '../../storage';
import { Container } from './styles';

type MealsProps = {
  title: string,
  data: {
    meal: string,
    diet: boolean
  }[]
}

type AverageProps = {
  totalMeals: number,
  totalInDiet: number,
  totalOutOfDiet: number,
  percentOutOfDiet: number,
  percentInDiet: number
}

export const Dashboard = () => {
  const [storedData, setStoredData] = useState([]);
  const [meals, setMeals] = useState<MealsProps[]>([]);
  const [totalMeals, setTotalMeals] = useState(0);
  const [inDiet, setInDiet] = useState(0);
  const [outOfDiet, setOutOfDiet] = useState(0);

  const [average, setAverage] = useState<AverageProps>({
    totalMeals: 0,
    totalInDiet: 0,
    totalOutOfDiet: 0,
    percentOutOfDiet: 0,
    percentInDiet: 0
  });


  // let totalMeals = 0
  // let inDiet = 0;
  // let outOfDiet = 0;

  // meals.map((meal) => {
  //   setTotalMeals((prev) => prev + meal.data.length);
  //   // totalMeals += meal.data.length;
  // }, 0)

  // meals.map((meal) => {
  //   meal.data.map((item) => {
  //     if(item.diet === true) {
  //       setInDiet(prev => prev + 1)
  //       // inDiet += 1;
  //     } else {
  //       setOutOfDiet(prev => prev + 1)
  //       // outOfDiet += 1;
  //     }
  //   })
  // })

  const storeData = async() => {
    setAverage({
        totalMeals: totalMeals,
        totalInDiet: inDiet,
        totalOutOfDiet: outOfDiet,
        percentInDiet: Number(((inDiet / totalMeals) * 100).toFixed(2)),
        percentOutOfDiet: Number(((outOfDiet / totalMeals) * 100).toFixed(2))
    });

    try {
      await AsyncStorage.setItem('average', JSON.stringify({
        totalMeals: totalMeals,
        totalInDiet: inDiet,
        totalOutOfDiet: outOfDiet,
        percentInDiet: Number(((inDiet / totalMeals) * 100).toFixed(2)),
        percentOutOfDiet: Number(((outOfDiet / totalMeals) * 100).toFixed(2))
      }));
    } catch (error) {
      console.log(error)
    }
  }

  const getTotalMeals = () => {
    let totalOfMeals = 0;
    meals.map((meal) => {
      totalOfMeals += meal.data.length;
    });

    setTotalMeals(totalOfMeals);
  }

  const getInDietAndOutDiet = () => {
    let currentInDiet = 0;
    let currentOutDiet = 0;

    meals.map((meal) => {
      meal.data.map((item) => {
        if(item.diet === true) {
          currentInDiet += 1;
        } else {
          currentOutDiet += 1;
        }
      })
    })

    setInDiet(currentInDiet);
    setOutOfDiet(currentOutDiet);
  }

  const getLocalStorageData = async() => {
    const storedData = await getDataFromStorage();
    setMeals(storedData);
  }

  console.log(meals)

  useFocusEffect(useCallback(() => {
    getLocalStorageData();
    // AsyncStorage.clear();
  }, []));
  
  
  useFocusEffect(useCallback(() => {
    storeData();
    getTotalMeals();
    getInDietAndOutDiet();
  }, [meals]));

  return (
    <Container>
      <Header />

      <PercentCard average={average}/>

      <NewMealsButton />

      <MealsListArea data={meals}/>
    </Container>
  );
}