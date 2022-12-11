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

export const Dashboard = (props: any) => {
  const [meals, setMeals] = useState<MealsProps[]>([]);
  const [totalMeals, setTotalMeals] = useState(0);
  const [percentMeals, setPercentMeals] = useState(0);
  const [inDiet, setInDiet] = useState(0);
  const [outOfDiet, setOutOfDiet] = useState(0);

  const getTotalMeals = () => {
    let totalOfMeals = 0;
    let currentInDiet = 0;
    let currentOutDiet = 0;
    meals.map((meal) => {
      totalOfMeals += meal.data.length;
      meal.data.map((item) => {
        if(item.diet === true) {
          currentInDiet += 1;
        } else {
          currentOutDiet += 1;
        }
      })
    });   

    setTotalMeals(totalOfMeals);
    setPercentMeals(Number(((currentInDiet / totalOfMeals) * 100).toFixed(2)));
    setInDiet(currentInDiet);
    setOutOfDiet(currentOutDiet);
  }

  const getLocalStorageData = async() => {
    const storedData = await getDataFromStorage();
    setMeals(storedData);
  }

  useFocusEffect(useCallback(() => {
    getLocalStorageData();
  }, []));
  
  useFocusEffect(useCallback(() => {
    getTotalMeals();
  }, [meals]));

  return (
    <Container>
      <Header />

      <PercentCard 
        totalMeals={totalMeals}
        percentMeals={percentMeals}
        inDiet={inDiet}
        outOfDiet={outOfDiet}
      />

      <NewMealsButton />

      <MealsListArea data={meals}/>
    </Container>
  );
}